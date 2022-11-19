import React from "react";
import { Head } from "@inertiajs/inertia-react";
import AppHeader from "@/Components/AppHeader";
import BannerVideo from "@/Components/BannerVideo";
import GenerationMembers from "@/Components/GenerationMembers";
import AppFooter from "@/Components/AppFooter";

const Welcome = (props) => {
    const { generations, generation, sponsors, social_networks } = props;
    return (
        <>
            <Head title="Welcome" />
            <AppHeader generations={generations} />
            <div className="space-y-10">
                <BannerVideo />
                <GenerationMembers
                    generation={generation}
                    sponsors={sponsors}
                />
            </div>
            <AppFooter
                bgColor={generation.background_color}
                sponsors={sponsors}
                social_networks={social_networks}
            />
        </>
    );
};

export default Welcome;
