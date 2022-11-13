import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { TvIcon } from "@heroicons/react/20/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function HomeMenuDropdown({ generations }) {
    return (
        <Menu as="div" className="relative -m-3 flex items-start">
            <div className="w-full">
                <Menu.Button className="flex justify-between w-full bg-white px-4 text-sm font-medium  hover:bg-gray-50 items-center">
                    <div className="flex items-start p-2 hover:bg-gray-50">
                        <div className="">
                            <p className="text-base font-medium text-gray-900">
                                Portafolios
                            </p>
                        </div>
                    </div>
                    <div className="flex h-full">
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-yellow-500"
                        >
                            <path
                                d="M12.75 15L15.75 12M15.75 12L12.75 9M15.75 12L8.25 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />
                        </svg>
                    </div>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute -right-60 z-10 -mt-0 w-56 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {generations.map((generation) => (
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href={`/generations/${generation.slug}`}
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        {generation.name}
                                    </a>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
