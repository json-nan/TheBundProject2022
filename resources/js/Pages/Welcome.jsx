import React, { useEffect, useState } from "react";
import { Link, Head, useForm } from "@inertiajs/inertia-react";
import AppHeader from "@/Components/AppHeader";
import BannerVideo from "@/Components/BannerVideo";
import HomeMainGenerationGrid from "@/Components/HomeMainGenerationGrid";
import HomeNews from "@/Components/HomeNews";
import AppFooter from "@/Components/AppFooter";
import { Modal } from "@/Components/Modal";
import { AppLayout } from "@/Components/Layouts/AppLayout";

const Welcome = ({ members, generations, news, sponsors, social_networks }) => {
    const [open, setOpen] = useState(false);
    const [openSuccesfully, setOpenSuccesfully] = useState(false);
    return (
        <>
            <Head title="Welcome" />
            <HomePageHeader
                social_networks={social_networks}
                openSubscriberModal={() => setOpen(true)}
            />
            <AppLayout
                open={open}
                setOpen={setOpen}
                openSuccesfully={openSuccesfully}
                setOpenSuccesfully={setOpenSuccesfully}
                generations={generations}
                social_networks={social_networks}
                sponsors={sponsors}
            >
                <div className="space-y-10">
                    <BannerVideo />
                    <HomeMainGenerationGrid members={members} />
                    <HomeNews news={news} />
                </div>
            </AppLayout>
        </>
    );
};

export default Welcome;

const HomePageHeader = ({ social_networks, openSubscriberModal }) => {
    return (
        <div>
            <div className="bg-[#F0A31F] h-16 font-bold flex justify-center items-center">
                <img
                    src="/assets/images/NEXOS2022-DISEÑO-INDUSTRIAL-EL SALVADOR_Mesa de trabajo 1.svg"
                    className="w-80"
                />
                {/* <p>#It's time, to make NEXOS</p> */}
            </div>
            <div className="grid grid-cols-1 space-y-4 border lg:h-16 lg:grid-cols-5 border-b-gray-400 lg:space-y-0">
                <div className="col-span-1"></div>

                <div className="col-span-1 lg:col-span-3">
                    <div className="flex items-center justify-center h-full text-center">
                        <p>
                            Mentes creativas reunidad para formar parte de un
                            colectivo nuevo e innovador
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center col-span-1 gap-4 pb-2 lg:pb-0 lg:flex-row">
                    <div>
                        <button
                            onClick={openSubscriberModal}
                            type="button"
                            className="px-2 py-1 text-white bg-[#F0A31F] border border-transparent shadow-sm tems-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Suscríbete
                        </button>
                    </div>
                    <div className="flex order-first gap-2 lg:order-last">
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
            </div>
        </div>
    );
};
