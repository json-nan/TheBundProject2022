import { NewsTitleSvg } from "./svg/NewsTittle";

const HomeNews = () => {
    return (
        <div className="bg-secondary relative">
            <div>
                <img src="/assets/images/THEBUNDPROJECT-NEXOS2022-NOTICIAS-FONDO_Mesa de trabajo 1.svg" />
            </div>

            <div className="py-5 absolute top-0 w-full">
                <div className="flex justify-between">
                    <NewsTitleSvg className="w-1/4" />
                    <img
                        className="w-36"
                        src="/assets/images/THEBUNDPROJECT-NEXOS2022-NOTICIAS ICONO_Mesa de trabajo 1.svg"
                    />
                </div>

                <div className="flex justify-between max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 w-full gap-20">
                        {new Array(4).fill("").map((item, index) => {
                            return (
                                <div
                                    key={`item-${index}`}
                                    className="col-span-1"
                                >
                                    <HomeNewsItem />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeNews;

const HomeNewsItem = () => {
    return (
        <div className="bg-white w-full h-60">
            <div></div>
        </div>
    );
};
