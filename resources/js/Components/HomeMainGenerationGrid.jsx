const HomeMainGenerationGrid = () => {
    return (
        <div className="home-generation relative">
            <img src="/assets/images/THEBUNDPROJECT-NEXOS2022-FONDO PREVISUALIZACIÓN PORTAFOLIOS_Mesa de trabajo 1_Mesa de trabajo 1.svg" />

            <div className="py-10 absolute top-0 w-full">
                <div className="max-w-4xl mx-auto space-y-10">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                            <img
                                className="w-2/3"
                                src="/assets/images/THEBUNDPROJECT-NEXOS2022-FONDOBLANCO ID_Mesa de trabajo 1.svg"
                            />
                        </div>
                        <div className="col-span-1">
                            <p className="text-white">
                                Nuestra unión y conexión de mentes creativas
                                reunidad para formar parte de un colectivo que
                                buscan formar nexos y experiencias para el
                                desarrollo e innovación de la industria creativa
                                en El Salvador.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-6">
                        {new Array(26).fill("").map((item, index) => {
                            return (
                                <div
                                    key={`item-${index}`}
                                    className="col-span-1"
                                >
                                    <GenerationMember />
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex justify-center text-xl font-bold">
                        <p className="text-white">#It’stime, to make NEXOS</p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 w-full h-20 flex space-x-4 justify-center p-1">
                <div>
                    <img
                        src="/assets/images/THEBUNDPROJECT-NEXOS2022-LOGOTBP BLANCO_Mesa de trabajo 1.svg"
                        className="h-full"
                    />
                </div>
                <div>
                    <img
                        src="/assets/images/THEBUNDPROJECT-NEXOS2022-LOGOUDB_Mesa de trabajo 1.svg"
                        className="h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeMainGenerationGrid;

const GenerationMember = () => {
    return (
        <div className="generation-member h-32 w-full bg-white rounded-md">
            <div className="generation-member-image">
                {/* <img src="/assets/images/THEBUNDPROJECT-NEXOS2022-FONDO PREVISUALIZACIÓN PORTAFOLIOS_Mesa de trabajo 1_Mesa de trabajo 1.svg" /> */}
            </div>
        </div>
    );
};
