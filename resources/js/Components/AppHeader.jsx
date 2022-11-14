import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    DocumentChartBarIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import HomeMenuDropdown from "./HomeMenuDropdown";

const menuItems = [
    {
        name: "Quienes somos?",
        description:
            "Get a better understanding of where your traffic is coming from.",
        href: "#",
    },
    {
        name: "Portafolios",
        description:
            "Speak directly to your customers in a more meaningful way.",
        href: "#",
    },
    {
        name: "Noticias",
        description: "Your customers' data will be safe and secure.",
        href: "#",
    },
    {
        name: "Catalogo de nexos",
        description:
            "Connect with third-party tools that you're already using.",
        href: "#",
    },
    {
        name: "Diseñadores emblema",
        description:
            "Build strategic funnels that will drive your customers to convert",
        href: "#",
    },
];
const resources = [
    {
        name: "Help Center",
        description:
            "Get all of your questions answered in our forums or contact support.",
        href: "#",
    },
    {
        name: "Guides",
        description:
            "Learn how to maximize our platform to get the most out of it.",
        href: "#",
    },
    {
        name: "Events",
        description:
            "See what meet-ups and other events we might be planning near you.",
        href: "#",
    },
    {
        name: "Security",
        description: "Understand how we take your privacy seriously.",
        href: "#",
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function AppHeader({ generations }) {
    return (
        <Popover className="relative bg-white">
            <div className="flex items-center justify-between px-4 py-2 sm:px-6 md:justify-start">
                <div className="-my-2 -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                                                "h-full group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
                                                        <a
                                                            href={"#"}
                                                            className="flex items-start p-2 -m-3 hover:bg-gray-50"
                                                        >
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">
                                                                    Quienes
                                                                    somos?
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
                                                        <a
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
                                                        </a>
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                        </Popover.Group>
                        <div className="flex items-center justify-center">
                            <img
                                className="w-64"
                                src="/assets/images/THEBUNDPROJECT-NEXOS2022-LOGOPRINCIPAL_Mesa de trabajo 1.svg"
                                alt=""
                            />
                            {/* <img
                                className="w-auto h-8 sm:h-10"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            /> */}
                        </div>
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
                    className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
                >
                    <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="w-auto h-8"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                </div>
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
                                <nav className="grid gap-6">
                                    {/* {menuItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                                        >
                                            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md">
                                                <item.icon
                                                    className="w-6 h-6"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className="ml-4 text-base font-medium text-gray-900">
                                                {item.name}
                                            </div>
                                        </a>
                                    ))} */}
                                </nav>
                            </div>
                        </div>
                        <div className="px-5 py-6">
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Pricing
                                </a>

                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Docs
                                </a>

                                <a
                                    href="#"
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                >
                                    Enterprise
                                </a>
                                {resources.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-base font-medium text-center text-gray-500">
                                    Existing customer?{" "}
                                    <a
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-500"
                                    >
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
