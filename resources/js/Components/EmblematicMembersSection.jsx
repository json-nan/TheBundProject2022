import { Transition } from "@headlessui/react";
import { useState, Fragment } from "react";

const EmblematicMembersSection = ({ emblematic_members }) => {
    return (
        <div className="relative ">
            <div className="relative space-y-10 emblematic-members-section__container">
                {/* <img
                    src="/assets/images/TRAMA GRANDE.svg"
                    className="sticky right-0 z-10 float-right w-24 mr-10 top-10"
                    alt=""
                /> */}
                <div className="max-w-md mx-auto emblematic-members-section__container__title">
                    <h2 className="-ml-5 text-6xl font-extrabold">
                        <span className="underline">Di</span>
                        <span>señadores</span>
                    </h2>
                    <h2 className="text-6xl font-extrabold text-[#FFA300] text-right -mr-5">
                        Emblema
                    </h2>
                </div>
                <div className="max-w-4xl mx-auto emblematic-members-section__container__title">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec placerat libero porta, posuere lorem vitae, porta
                        ligula. Praesent elementum mi sed finibus aliquet.
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus. Mauris dignissim turpis arcu, sed tincidunt
                        neque mollis vitae. Aenean finibus ullamcorper ipsum et
                        malesuada. Phasellus tincidunt dui sem, eget ultricies
                        lacus tristique in. In quis massa vel sapien egestas
                        imperdiet.
                    </p>
                </div>
                <div className="relative grid max-w-4xl grid-cols-3 mx-auto gap-14 emblematic-members-section__container__content">
                    {emblematic_members.map((emblematic_member, index) => (
                        <EmblematicMemberItem
                            key={emblematic_member.id}
                            emblematic_member={emblematic_member}
                        />
                        // <div
                        //     key={emblematic_member.id}
                        //     className="flex justify-center col-span-1 emblematic-members-section__container__content__item"
                        // >
                        //     <div className="z-20 px-6 bg-white rounded-full">
                        //         <div className="overflow-hidden border-4 border-dashed rounded-full w-60 h-60 border-spacing-3 border-[#FFA300] border-  ">
                        //             <img
                        //                 src={`/storage/${emblematic_member.profile_image}`}
                        //                 className=""
                        //             />
                        //         </div>
                        //     </div>
                        //     <div className="absolute w-full right-0 overflow-hidden h-60 bg-[#CDCDCD] z-10">
                        //         Hello world
                        //     </div>
                        // </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblematicMembersSection;

const EmblematicMemberItem = ({ emblematic_member }) => {
    console.log(emblematic_member);
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    const splittedName = emblematic_member.name.split(" ");
    return (
        <div
            className={`flex items-center justify-center  emblematic-members-section__container__content__item ${
                open || closing ? "col-span-3" : "col-span-1"
            }`}
        >
            <div
                className={`z-20 p-3 bg-white rounded-full `}
                onClick={() => setOpen(!open)}
            >
                <div className="border-4 border-dashed border-[#FFA300] rounded-full p-3">
                    <div className="p-1 overflow-hidden rounded-full w-52 h-52 border-spacing-3">
                        <img
                            src={`/storage/${emblematic_member.profile_image}`}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </div>
            <Transition
                as={Fragment}
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
            >
                <div
                    className={`w-full overflow-hidden h-60 bg-[#CDCDCD] z-10 -ml-20 relative ease-in-out delay-150 transition-all ${
                        open ? "inline-flex" : "hidden"
                    }`}
                >
                    <div
                        className="absolute bottom-0 cursor-pointer right-2"
                        onClick={() => setOpen(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="3"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                    <div className="flex items-center h-full ml-28 ">
                        <div className="flex-1 space-y-4">
                            <div>
                                <div className="flex space-x-4">
                                    <p className="text-5xl">
                                        {splittedName[0]}
                                    </p>
                                    <p className="text-5xl font-bold">
                                        {splittedName[1]}
                                    </p>
                                </div>
                                <p className="text-lg italic ">
                                    Member since{" "}
                                    {new Date(
                                        emblematic_member.member_since
                                    ).getFullYear()}
                                </p>
                            </div>
                            <p className="leading-none text-justify">
                                {emblematic_member.description}
                            </p>
                            <div className="flex gap-4">
                                <a
                                    target="_blank"
                                    href={
                                        emblematic_member?.internal_portfolio
                                            ? `/storage/${emblematic_member?.internal_portfolio}`
                                            : emblematic_member?.external_portfolio
                                    }
                                    className="px-2 py-1 text-white bg-black"
                                >
                                    Ver portafolio
                                </a>
                                {emblematic_member.social_networks.map(
                                    (socialNetwork) => (
                                        <a
                                            href={socialNetwork.pivot.url}
                                            target="_blank"
                                        >
                                            <img
                                                src={`/storage/${socialNetwork.icon}`}
                                                className="w-8 h-8"
                                            />
                                        </a>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="z-20 mx-10 bg-white rounded-full ">
                            <div className="overflow-hidden rounded-full w-44 h-44">
                                <img
                                    src={`/storage/${emblematic_member.logo}`}
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    );
};
