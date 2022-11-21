import { useForm } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import AppFooter from "../AppFooter";
import AppHeader from "../AppHeader";
import { Modal } from "../Modal";

export const AppLayout = ({
    children,
    generations,
    sponsors,
    social_networks,
    open,
    setOpen,
    openSuccesfully,
    setOpenSuccesfully,
    footerBgColor,
}) => {
    return (
        <>
            <AppHeader
                generations={generations}
                social_networks={social_networks}
                openSubscriberModal={() => setOpen(true)}
            />
            <main className="">{children}</main>
            <AppFooter
                sponsors={sponsors}
                social_networks={social_networks}
                openSubscriberModal={() => setOpen(true)}
                bgColor={footerBgColor}
            />

            <SubscriberModal
                open={open}
                onClose={() => setOpen(false)}
                social_networks={social_networks}
                showSuccesfully={() => setOpenSuccesfully(true)}
            />

            <SuccessfullyModal
                open={openSuccesfully}
                onClose={() => setOpenSuccesfully(false)}
            />
        </>
    );
};

const SuccessfullyModal = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <div>
                <h2 className="text-[#F0A31F] font-bold text-4xl text-center">
                    ¡Felicidades!
                </h2>
                <p className="mt-4 text-center">
                    ¡Ahora eres parte de nuestro movimiento
                    <br />
                    pronto te contactaremos
                </p>
            </div>
        </Modal>
    );
};
const SubscriberModal = ({
    open,
    onClose,
    social_networks,
    showSuccesfully,
}) => {
    const {
        data: form,
        setData: setForm,
        post,
        processing,
        errors,
        reset,
        wasSuccessful,
    } = useForm({
        email: "",
        name: "",
        reason: "",
        occupation: "",
        other_occupation: "",
    });

    useEffect(() => {
        if (wasSuccessful) {
            reset();
            showSuccesfully();
            onClose();
        }
    }, [wasSuccessful]);
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [key]: value });
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("subscriber.store"));
    };
    return (
        <Modal
            bgColor="#fff"
            open={open}
            onClose={onClose}
            panelBgColor="#F2F2F2"
        >
            <div className="mx-12 space-y-6">
                <div className="grid grid-cols-2">
                    <div className="flex items-center justify-center">
                        <img
                            className="w-48"
                            src="/assets/images/THEBUNDPROJECT-NEXOS2022-LOGOPRINCIPAL_Mesa de trabajo 1.svg"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p>¿No eres miembro todavia?</p>
                        <p className="text-[#F0A31F] font-bold">
                            Registrate ahora
                        </p>
                    </div>
                </div>
                <form onSubmit={submit}>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="col-span-1 ">
                            <input
                                required
                                onChange={handleChange}
                                value={form.email}
                                placeholder="Correo electrónico o número de contácto"
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="given-name"
                                className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="col-span-1">
                            <label
                                htmlFor="username"
                                className="block text-sm font-bold text-gray-700"
                            >
                                Tu nombre completo
                            </label>
                            <div className="flex mt-1 rounded-md shadow-sm">
                                <input
                                    required
                                    onChange={handleChange}
                                    value={form.name}
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="given-name"
                                    className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <label
                                htmlFor="username"
                                className="block text-sm font-bold text-gray-700"
                            >
                                ¿Por qué quieres ser parte del movimiento?
                            </label>
                            <div className="flex mt-1 rounded-md shadow-sm">
                                <input
                                    required
                                    onChange={handleChange}
                                    value={form.reason}
                                    type="text"
                                    name="reason"
                                    id="reason"
                                    autoComplete="given-name"
                                    className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <label
                                htmlFor="username"
                                className="block text-sm font-bold text-gray-700"
                            >
                                ¿A qué te dedicas?
                            </label>
                            <div className="flex mt-1 rounded-md shadow-sm">
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-center">
                                        <input
                                            required
                                            id="student"
                                            value={"student"}
                                            onChange={handleChange}
                                            name="occupation"
                                            type="radio"
                                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                        />
                                        <label
                                            htmlFor="student"
                                            className="block ml-3 text-sm font-medium text-gray-700"
                                        >
                                            Estudiante
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="professional"
                                            value={"professional"}
                                            onChange={handleChange}
                                            name="occupation"
                                            type="radio"
                                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                        />
                                        <label
                                            htmlFor="professional"
                                            className="block ml-3 text-sm font-medium text-gray-700"
                                        >
                                            Profesional
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="other"
                                            value={"other"}
                                            onChange={handleChange}
                                            name="occupation"
                                            type="radio"
                                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                        />
                                        <label
                                            htmlFor="other"
                                            className="block ml-3 text-sm font-medium text-gray-700"
                                        >
                                            Otro
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`flex mt-2 rounded-md shadow-sm ${
                                    form.occupation === "other" ? "" : "hidden"
                                }`}
                            >
                                <input
                                    onChange={handleChange}
                                    value={form.other_occupation}
                                    type="text"
                                    name="other_occupation"
                                    id="other_occupation"
                                    autoComplete="given-name"
                                    className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                disabled={processing}
                                type="submit"
                                className="px-8 py-1 text-white bg-[#F0A31F] border border-transparent shadow-sm tems-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Enviar
                            </button>
                        </div>
                        <div className="flex justify-end">
                            {social_networks.map((socialNetwork) => (
                                <a
                                    href={socialNetwork.url}
                                    target="_blank"
                                    key={socialNetwork.id}
                                >
                                    <img
                                        src={`/storage/${socialNetwork.social_network.icon}`}
                                        className="w-8"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    );
};
