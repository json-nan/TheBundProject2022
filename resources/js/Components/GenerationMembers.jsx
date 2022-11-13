import { Modal } from "./Modal";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

const GenerationMembers = (props) => {
    const { generation } = props;
    const [open, setOpen] = useState(false);
    const [member, setMember] = useState(null);
    const onMemberOpen = (member) => {
        setMember(member);
        setOpen(true);
        console.log(member);
    };
    return (
        <div
            style={{
                backgroundImage:
                    "url('/storage/" + generation.background_image + "')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="py-10 generation-members"
        >
            <div className="max-w-2xl mx-auto space-y-10 2xl:max-w-7xl lg:max-w-4xl">
                <div className="grid grid-cols-1">
                    <div>
                        <img src={`/storage/${generation.logo_image}`} />
                    </div>
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
            className="cursor-pointer member"
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
                    <div>
                        <img src={`/storage/${member?.logo_image}`} />
                    </div>
                    <div className="h-32 overflow-y-auto">
                        <p className="text-sm text-primary">
                            {member?.description}
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-center">
                            {member?.social_networks.map((network, index) => (
                                <a href={`${network.pivot.url}`}>
                                    <img
                                        src={`/storage/${network.icon}`}
                                        className="w-8 text-red-500"
                                    />
                                </a>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <button
                                style={{ backgroundColor: bgColor }}
                                className="px-2 py-1 text-white"
                            >
                                Ver portafolio
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default GenerationMembers;
