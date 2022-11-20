import { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import HomeMenuDropdown from "./HomeMenuDropdown";
import { TBPIcon } from "./svg/TBPIcon";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function AppHeader({
    generations,
    social_networks,
    openSubscriberModal,
}) {
    const [isSticky, setIsSticky] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const cachedRef = ref.current,
            observer = new IntersectionObserver(
                ([e]) => setIsSticky(e.intersectionRatio < 1),
                { threshold: [1], rootMargin: "-1px 0px 0px 0px" }
            );

        observer.observe(cachedRef);

        return function () {
            observer.unobserve(cachedRef);
        };
    }, []);

    return (
        <Popover className="sticky top-0 z-20 bg-white" ref={ref}>
            <div className="flex items-center justify-between px-4 py-2 sm:px-6 md:justify-start">
                <div className="-my-2 -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500">
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
                <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
                    <div className="grid w-full grid-cols-3">
                        <Popover.Group
                            as="nav"
                            className="flex col-span-1 space-x-10"
                        >
                            <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open
                                                    ? "text-gray-900"
                                                    : "text-gray-500",
                                                "h-full group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none "
                                            )}
                                        >
                                            <Bars3Icon className="w-5 h-5 mr-2 group-hover:text-gray-500" />
                                            <span>Menu</span>
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute z-10 w-screen max-w-md mt-2 -ml-6 transform ">
                                                <div className="shadow-lg ">
                                                    <div className="relative grid gap-6 px-5 py-6 bg-white divide-y-4 divide-gray-200 sm:gap-6 sm:p-8 lg:grid-cols-1">
                                                        <div className="flex gap-2">
                                                            <button
                                                                onClick={
                                                                    openSubscriberModal
                                                                }
                                                                type="button"
                                                                className="px-2 py-1 text-white bg-[#F0A31F] border border-transparent shadow-sm tems-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                            >
                                                                Suscríbete
                                                            </button>
                                                            {social_networks.map(
                                                                (
                                                                    socialNetwork
                                                                ) => (
                                                                    <a
                                                                        href={
                                                                            socialNetwork.url
                                                                        }
                                                                        target="_blank"
                                                                        key={
                                                                            socialNetwork.id
                                                                        }
                                                                    >
                                                                        <img
                                                                            src={`/storage/${socialNetwork.social_network.icon}`}
                                                                            className="w-8"
                                                                        />
                                                                    </a>
                                                                )
                                                            )}
                                                        </div>
                                                        <a
                                                            href={"/"}
                                                            className="flex items-start p-2 -m-3 hover:bg-gray-50 group"
                                                        >
                                                            <div className="flex justify-between w-full ml-4 ">
                                                                <p className="text-base font-medium text-gray-900">
                                                                    Inicio
                                                                </p>
                                                                <div className="hidden h-full -my-1 group-hover:flex">
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
                                                            </div>
                                                        </a>
                                                        <HomeMenuDropdown
                                                            generations={
                                                                generations
                                                            }
                                                        />
                                                        <a
                                                            href={"/#news"}
                                                            className="flex items-start p-2 -m-3 hover:bg-gray-50 group"
                                                        >
                                                            <div className="flex justify-between w-full ml-4">
                                                                <p className="text-base font-medium text-gray-900">
                                                                    Noticias
                                                                </p>
                                                                <div className="hidden h-full -my-1 group-hover:flex">
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
                                                            </div>
                                                        </a>
                                                        {/* <a
                                                        href={"/connections"}
                                                        className="flex items-start p-2 -m-3 hover:bg-gray-50"
                                                    >
                                                        <div className="ml-4">
                                                            <p className="text-base font-medium text-gray-900">
                                                                Catalogo de
                                                                nexos
                                                            </p>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href={"/emblematic-members"}
                                                        className="flex items-start p-2 -m-3 hover:bg-gray-50"
                                                    >
                                                        <div className="ml-4">
                                                            <p className="text-base font-medium text-gray-900">
                                                                Diseñadores
                                                                emblema
                                                            </p>
                                                        </div>
                                                    </a> */}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                        </Popover.Group>
                        <a
                            href="/"
                            className="flex items-center justify-center"
                        >
                            {isSticky ? (
                                <TBPIcon className="w-10 text-[#F0A31F]" />
                            ) : (
                                <img
                                    className="w-64"
                                    src="/assets/images/THEBUNDPROJECT-NEXOS2022-LOGOPRINCIPAL_Mesa de trabajo 1.svg"
                                    alt=""
                                />
                            )}
                        </a>
                        <div className="flex items-center md:ml-12"></div>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute top-0 left-0 p-2 transition origin-top-right transform md:hidden"
                >
                    <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XMarkIcon
                                            className="w-6 h-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-6"></nav>
                            </div>
                        </div>
                        <div className="px-5 py-6">
                            <div className="grid grid-cols-1 gap-4">
                                <a
                                    href={"/"}
                                    className="flex items-start p-2 -m-3 hover:bg-gray-50"
                                >
                                    <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                            Inicio
                                        </p>
                                    </div>
                                </a>
                                <HomeMenuDropdown generations={generations} />
                                <a
                                    href={"#news"}
                                    className="flex items-start p-2 -m-3 hover:bg-gray-50"
                                >
                                    <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                            Noticias
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
