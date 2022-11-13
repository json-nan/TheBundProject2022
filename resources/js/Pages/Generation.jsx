import React from "react";
import { Head } from "@inertiajs/inertia-react";
import AppHeader from "@/Components/AppHeader";
import BannerVideo from "@/Components/BannerVideo";
import GenerationMembers from "@/Components/GenerationMembers";
import AppFooter from "@/Components/AppFooter";

const Welcome = (props) => {
    const { generations, generation } = props;
    return (
        <>
            <Head title="Welcome" />
            <AppHeader generations={generations} />
            <div className="space-y-10">
                <BannerVideo />
                <GenerationMembers generation={generation} />
                <AppFooter />
            </div>
        </>
    );
};

export default Welcome;
