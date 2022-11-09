import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import AppHeader from "@/Components/AppHeader";
import BannerVideo from "@/Components/BannerVideo";
import HomeMainGenerationGrid from "@/Components/HomeMainGenerationGrid";
import HomeNews from "@/Components/HomeNews";
import AppFooter from "@/Components/AppFooter";
export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <AppHeader />
            <div className="space-y-10">
                <BannerVideo />
                <HomeMainGenerationGrid />
                <HomeNews />
                <AppFooter />
            </div>
        </>
    );
}
