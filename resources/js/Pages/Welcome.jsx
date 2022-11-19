import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import AppHeader from "@/Components/AppHeader";
import BannerVideo from "@/Components/BannerVideo";
import HomeMainGenerationGrid from "@/Components/HomeMainGenerationGrid";
import HomeNews from "@/Components/HomeNews";
import AppFooter from "@/Components/AppFooter";

const Welcome = ({ members, generations, news, sponsors, social_networks }) => (
    <>
        <Head title="Welcome" />
        <HomePageHeader social_networks={social_networks} />
        <AppHeader generations={generations} />
        <div className="space-y-10">
            <BannerVideo />
            <HomeMainGenerationGrid members={members} />
            <HomeNews news={news} />
            <AppFooter sponsors={sponsors} social_networks={social_networks} />
        </div>
    </>
);

export default Welcome;

const HomePageHeader = ({ social_networks }) => {
    return (
        <div>
            <div className="bg-[#F0A31F] h-16 font-bold flex justify-center items-center">
                <img src="/assets/images/NEXOS2022-DISEÑO-INDUSTRIAL-EL SALVADOR_Mesa de trabajo 1.svg" className="w-96" />
                {/* <p>#It's time, to make NEXOS</p> */}
            </div>
            <div className="grid h-16 grid-cols-5 border border-b-gray-400">
                <div className="col-span-1"></div>

                <div className="col-span-3">
                    <div className="flex items-center justify-center h-full">
                        <p>
                            Mentes creativas reunidad para formar parte de un
                            colectivo nuevo e innovador
                        </p>
                    </div>
                </div>
                <div className="flex items-center col-span-1 gap-4">
                    <div>
                        <button
                            type="button"
                            className="px-2 py-1 text-white bg-[#F0A31F] border border-transparent shadow-sm tems-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Button text
                        </button>
                    </div>
                    <div>
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
