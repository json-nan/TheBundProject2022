import React from "react";
import { Head } from "@inertiajs/inertia-react";
import AppHeader from "@/Components/AppHeader";
import BannerVideo from "@/Components/BannerVideo";
import AppFooter from "@/Components/AppFooter";
import EmblematicMembersSection from "@/Components/EmblematicMembersSection";

const EmblematicMembers = (props) => {
    const { generations, emblematic_members } = props;
    return (
        <>
            <Head title="Welcome" />
            <AppHeader generations={generations} />
            <div className="space-y-16">
                <PageBanner />
                <EmblematicMembersSection emblematic_members={emblematic_members} />
                <AppFooter />
            </div>
        </>
    );
};

const PageBanner = () => {
    return (
        <div className="relative flex items-center justify-center bg-black page-banner h-96">
            <img
                src="/assets/images/THEBUNDPROJECT-NEXOS2022-LOGOTBP BLANCO_Mesa de trabajo 1.svg"
                className="w-[30rem]"
                alt=""
            />
            <img
                src="/assets/images/TRAMA GRANDE 2.svg"
                className="absolute w-24 left-10 top-5"
                alt=""
            />
            <img
                src="/assets/images/TRAMA GRANDE.svg"
                className="absolute w-24 right-10 bottom-5 "
                alt=""
            />
        </div>
    );
};
export default EmblematicMembers;
