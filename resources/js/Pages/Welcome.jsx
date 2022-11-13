import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import AppHeader from "@/Components/AppHeader";
import BannerVideo from "@/Components/BannerVideo";
import HomeMainGenerationGrid from "@/Components/HomeMainGenerationGrid";
import HomeNews from "@/Components/HomeNews";
import AppFooter from "@/Components/AppFooter";

const Welcome = ({ members, generations, news }) => (
    <>
        <Head title="Welcome" />
        <AppHeader generations={generations} />
        <div className="space-y-10">
            <BannerVideo />
            <HomeMainGenerationGrid members={members} />
            <HomeNews news={news} />
            <AppFooter />
        </div>
    </>
);

export default Welcome;
