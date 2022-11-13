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

            <div className="w-full py-5 ">
                <div className="flex justify-between">
                    <NewsTitleSvg className="w-1/4" />
                    <img
                        className="w-36"
                        src="/assets/images/THEBUNDPROJECT-NEXOS2022-NOTICIAS ICONO_Mesa de trabajo 1.svg"
                    />
                </div>

                <div className="flex justify-between max-w-4xl mx-auto">
                    <div className="grid w-full grid-cols-2 gap-20">
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
            <div className="overflow-hidden h-60">
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
            <div className="flex flex-col">
                <div className="w-full h-96">
                    <img src={`/storage/${notice?.image}`} alt="" />
                </div>
                <div className="p-2">
                    <div className="flex items-center gap-2">
                        <p className="text-xl font-bold text-primary">
                            {notice?.title}
                        </p>
                        <a
                            target="_blank"
                            href={notice?.external_link}
                            className="text-sm underline font-bold text-[#F0A31F]"
                        >
                            Link de referencia
                        </a>
                    </div>
                    <p className="text-primary">{notice?.content}</p>
                </div>
            </div>
        </Modal>
    );
};
