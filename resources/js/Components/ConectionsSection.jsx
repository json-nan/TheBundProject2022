const ConnectionsSection = ({ connections }) => {
    return (
        <div className="relative contacts-section">
            <div className="relative contacts-section__container">
                <img
                    src="/assets/images/TRAMA GRANDE.svg"
                    className="sticky right-0 z-10 float-right w-24 mr-10 top-10"
                    alt=""
                />
                <div className="max-w-md mx-auto contacts-section__container__title">
                    <h2 className="ml-4 text-6xl font-extrabold">
                        <span className="underline">Ca</span>
                        <span>tálogo de</span>
                    </h2>
                    <h2 className="text-6xl font-extrabold text-[#FFA300] text-right mr-4">
                        Nexos
                    </h2>
                </div>
                <div className="flex flex-col max-w-4xl mx-auto gap-14 contacts-section__container__content">
                    {connections.map((connection, index) => (
                        <div
                            key={connection.id}
                            className="flex gap-10 contacts-section__container__content__item"
                        >
                            <div
                                className={` ${
                                    index % 2 === 0 ? "" : "order-last"
                                }`}
                            >
                                <img
                                    src={`/storage/${connection.image}`}
                                    className="max-h-80"
                                />
                            </div>
                            <div
                                className={`flex flex-col  gap-6 flex-1 min-w-max`}
                            >
                                <div>
                                    <h5 className="text-5xl font-bold">
                                        {connection.name}
                                    </h5>
                                    <h6 className="text-[#EFA701] font-bold text-lg">
                                        {connection.profession}
                                    </h6>
                                </div>
                                <div className="flex flex-col space-y-3">
                                    <p className="max-w-md font-bold">
                                        {connection.description}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-black rounded-full"></div>
                                        <p className="text-lg font-bold">
                                            {connection.contact_number}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConnectionsSection;
