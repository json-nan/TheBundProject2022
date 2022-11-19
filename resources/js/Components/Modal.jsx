import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export const Modal = ({
    open,
    onClose,
    children,
    bgColor = "#6b7280",
    bgOpacity = 75,
    panelBgColor = "#ffffff",
}) => {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-30" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        style={{
                            backgroundColor: convertHexToRGBA(
                                bgColor,
                                bgOpacity / 100
                            ),
                        }}
                        className={`fixed inset-0 transition-opacity `}
                    />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                style={{ backgroundColor: panelBgColor }}
                                className="relative z-50 px-4 pt-5 pb-4 my-10 overflow-hidden text-left transition-all transform rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-xl sm:p-6 "
                            >
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

const convertHexToRGBA = (hexCode, opacity = 1) => {
    let hex = hexCode.replace("#", "");

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    /* Backward compatibility for whole number based opacity values. */
    if (opacity > 1 && opacity <= 100) {
        opacity = opacity / 100;
    }

    return `rgba(${r},${g},${b},${opacity})`;
};
