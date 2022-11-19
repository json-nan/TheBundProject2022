import { Modal } from "./Modal";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

const GenerationMembers = (props) => {
    const { generation, sponsors } = props;
    const [open, setOpen] = useState(false);
    const [member, setMember] = useState(null);
    const onMemberOpen = (member) => {
        setMember(member);
        setOpen(true);
    };
    return (
        <div
            style={{
                backgroundImage:
                    "url('/storage/" + generation.background_image + "')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="pt-10 generation-members"
        >
            <div className="max-w-2xl mx-auto space-y-10 2xl:max-w-7xl lg:max-w-4xl">
                <div className="flex justify-center">
                    <img
                        src={`/storage/${generation.logo_image}`}
                        className="max-h-28"
                    />
                </div>
                <div className="grid grid-cols-4 gap-10">
                    {generation.members.map((member, index) => (
                        <Member
                            key={index}
                            member={member}
                            onMemberOpen={onMemberOpen}
                        />
                    ))}
                </div>
            </div>
            <div
                className="flex items-center justify-center h-20 mt-10 bg-white"
                style={{ backgroundColor: generation.background_color }}
            >
                <img
                    src="/assets/images/THEBUNDPROJECT-NEXOS2022-LOGOUDB_Mesa de trabajo 1.svg"
                    className="h-full"
                />
                {sponsors.map((sponsor, index) => (
                    <img
                        key={sponsor.id}
                        src={`/storage/${sponsor.image}`}
                        className="w-20 h-20"
                    />
                ))}
                {/* {generation.phrase} */}
            </div>
            <div className="flex items-center justify-center h-20 bg-white">
                {/* <p>Hello world</p> */}
                <p>{generation.phrase}</p>
            </div>
            <MemberModal
                open={open}
                onClose={() => setOpen(false)}
                member={member}
                bgColor={generation.background_color}
                bgOpacity={generation.background_opacity}
            />
        </div>
    );
};

const Member = ({ member, onMemberOpen }) => {
    return (
        <div
            className="transition duration-300 ease-in-out delay-150 cursor-pointer member hover:-translate-y-1 hover:scale-110"
            onClick={() => onMemberOpen(member)}
        >
            <div className="member-image">
                <img
                    className="rounded-lg"
                    src={`/storage/${member.profile_image}`}
                />
            </div>
        </div>
    );
};

const MemberModal = ({ member, open, onClose, bgColor, bgOpacity }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            bgColor={bgColor}
            bgOpacity={bgOpacity}
        >
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3">
                    <img src={`/storage/${member?.profile_image}`} />
                </div>
                <div className="flex flex-col col-span-2 space-y-2">
                    <div className="flex items-center justify-center">
                        <img
                            src={`/storage/${member?.logo_image}`}
                            className="h-44"
                        />
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        <p className="text-sm text-primary">
                            {member?.description}
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-center">
                            {member?.social_networks.map((network, index) => (
                                <a
                                    key={network.id}
                                    href={parseUrl(network.pivot.url)}
                                >
                                    <img
                                        src={`/storage/${network.icon}`}
                                        className="w-8 text-red-500"
                                    />
                                </a>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <a
                                target="_blank"
                                href={
                                    member?.local_portfolio_url
                                        ? `/storage/${member?.local_portfolio_url}`
                                        : member?.external_portfolio_url
                                }
                                style={{ backgroundColor: bgColor }}
                                className="px-2 py-1 text-white"
                            >
                                Ver portafolio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default GenerationMembers;

const parseUrl = (url) => {
    if (url.startsWith("http")) {
        return url;
    }
    return `http://${url}`;
};
