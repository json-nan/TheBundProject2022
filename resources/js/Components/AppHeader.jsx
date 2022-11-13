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
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
                <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
                    <div className="grid grid-cols-3 w-full">
                        <Popover.Group
                            as="nav"
                            className="flex space-x-10 col-span-1"
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
                                            <Bars3Icon className="mr-2 h-5 w-5 group-hover:text-gray-500" />
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
                                            <Popover.Panel className="absolute z-10 -ml-6 mt-2 w-screen max-w-md transform ">
                                                <div className=" shadow-lg">
                                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-6 sm:p-8 lg:grid-cols-1 divide-y-4 divide-gray-200">
                                                        <a
                                                            href={"#"}
                                                            className="-m-3 flex items-start p-2 hover:bg-gray-50"
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
                                                            href={"#"}
                                                            className="-m-3 flex items-start p-2 hover:bg-gray-50"
                                                        >
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">
                                                                    Noticias
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href={"#"}
                                                            className="-m-3 flex items-start p-2 hover:bg-gray-50"
                                                        >
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">
                                                                    Catalogo de
                                                                    nexos
                                                                </p>
                                                            </div>
                                                        </a>
                                                        <a
                                                            href={"#"}
                                                            className="-m-3 flex items-start p-2 hover:bg-gray-50"
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
                                className="h-8 w-auto sm:h-10"
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
                    className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
                >
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XMarkIcon
                                            className="h-6 w-6"
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
                                            className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                                        >
                                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                                                <item.icon
                                                    className="h-6 w-6"
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
                        <div className="py-6 px-5">
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
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
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
