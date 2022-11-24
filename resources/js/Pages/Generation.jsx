import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import AppHeader from "@/Components/AppHeader";
import BannerVideo from "@/Components/BannerVideo";
import GenerationMembers from "@/Components/GenerationMembers";
import AppFooter from "@/Components/AppFooter";
import Banner from "@/Components/Banner";
import { AppLayout } from "@/Components/Layouts/AppLayout";

const Welcome = (props) => {
    const { generations, generation, sponsors, social_networks } = props;
    const [open, setOpen] = useState(false);
    const [openSuccesfully, setOpenSuccesfully] = useState(false);
    return (
        <>
            <Head title="Generaciones" />
            <AppLayout
                open={open}
                setOpen={setOpen}
                openSuccesfully={openSuccesfully}
                setOpenSuccesfully={setOpenSuccesfully}
                generations={generations}
                social_networks={social_networks}
                sponsors={sponsors}
                footerBgColor={generation.background_color}
            >
                <div className="space-y-5 lg:space-y-10">
                    <Banner banner_img={generation.banner_image} />
                    {/* <BannerVideo /> */}
                    <GenerationMembers
                        generation={generation}
                        sponsors={sponsors}
                    />
                </div>
            </AppLayout>
        </>
    );
};

export default Welcome;
