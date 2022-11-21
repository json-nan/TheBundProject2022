import { useState } from "react";
import { Modal } from "./Modal";
import { NewsTitleSvg } from "./svg/NewsTittle";

const HomeNews = ({ news }) => {
    const [open, setOpen] = useState(false);
    const [notice, setNotice] = useState(null);
    const onNoticeOpen = (notice) => {
        setNotice(notice);
        setOpen(true);
    };

    return (
        <div className="relative bg-[#F0A31F] pb-16" id="news">
            <div></div>

            <div className="w-full lg:py-5 ">
                <div className="flex justify-between py-5">
                    <NewsTitleSvg className="w-1/4" />
                    <img
                        className="absolute top-0 right-0 w-16 lg:w-36"
                        src="/assets/images/THEBUNDPROJECT-NEXOS2022-NOTICIAS ICONO_Mesa de trabajo 1.svg"
                    />
                </div>

                <div className="flex justify-between max-w-4xl px-6 mx-auto lg:px-0">
                    <div className="grid w-full grid-cols-1 gap-20 lg:grid-cols-2">
                        {news.map((notice, index) => {
                            return (
                                <div
                                    key={`item-${index}`}
                                    className="col-span-1"
                                >
                                    <HomeNewsItem
                                        notice={notice}
                                        onNoticeOpen={onNoticeOpen}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <NoticeModal
                open={open}
                onClose={() => setOpen(false)}
                notice={notice}
            />
        </div>
    );
};

export default HomeNews;

const HomeNewsItem = ({ notice, onNoticeOpen }) => {
    return (
        <div
            className="w-full bg-white cursor-pointer member"
            onClick={() => onNoticeOpen(notice)}
        >
            <div className="h-56 overflow-hidden">
                <img src={`/storage/${notice.image}`} alt="" />
            </div>
            <div className="p-2">
                <p className="font-bold text-primary">{notice.title}</p>
            </div>
        </div>
    );
};

const NoticeModal = ({ notice, open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose} bgColor="#F0A31F">
            <div className="flex flex-col p-6">
                <div className="w-full max-h-96">
                    <img src={`/storage/${notice?.image}`} alt="" />
                </div>
                <div className="p-2">
                    <div className="flex items-center gap-2">
                        <p className="text-xl font-bold text-primary">
                            {notice?.title}
                        </p>
                    </div>
                    <div className="-mt-4">
                        {notice?.content.split("\n").map((paragraph) => (
                            <>
                                <br />
                                <p>{paragraph}</p>
                            </>
                        ))}
                    </div>
                    <p className="text-primary">{}</p>
                </div>
            </div>
        </Modal>
    );
};
