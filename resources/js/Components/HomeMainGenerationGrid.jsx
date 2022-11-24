const HomeMainGenerationGrid = ({ members }) => (
    <div className="relative overflow-hidden home-generation bg-primary">
        <img
            src="/assets/images/THEBUNDPROJECT-NEXOS2022-TRAMA_Mesa de trabajo 1.svg"
            className="absolute bottom-0 w-16 lg:w-56 2xl:w-96"
        />
        <img
            src="/assets/images/THEBUNDPROJECT-NEXOS2022-TRAMA2_Mesa de trabajo 1.svg"
            className="absolute w-24 lg:w-24 2xl:w-44 top-8 right-4 lg:right-12 "
        />
        <img
            src="/assets/images/THEBUNDPROJECT-NEXOS2022-TRAMA3_Mesa de trabajo 1.svg"
            className="absolute bottom-0 right-0 w-40 lg:w-60 2xl:w-96 2xl:bottom-16 lg:bottom-20"
        />

        <div className="relative top-0 z-10 w-full px-6 py-10 lg:px-0">
            <div className="max-w-2xl mx-auto space-y-10 2xl:max-w-7xl lg:max-w-4xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex justify-center col-span-1 -mt-3">
                        <img
                            className="h-28"
                            src="/assets/images/THEBUNDPROJECT-NEXOS2022-FONDOBLANCO ID_Mesa de trabajo 1.svg"
                        />
                    </div>
                    <div className="col-span-1">
                        <p className="text-white font-poppins">
                            Nuestra unión y conexión de mentes creativas
                            reunidas para formar parte de un movimiento que
                            buscan formar nexos y experiencias para el
                            desarrollo e innovación de la industria creativa en
                            El Salvador.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 lg:grid-cols-7">
                    {members.map((member, index) => {
                        return (
                            <div key={`item-${index}`} className="col-span-1">
                                <GenerationMember member={member} />
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-center text-xl font-bold">
                    <p className="text-white">#It’stime, to make NEXOS</p>
                </div>
            </div>
        </div>

        <div className="relative w-full h-20 flex space-x-4 justify-center p-1 bg-[#1A2465]">
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

export default HomeMainGenerationGrid;

const GenerationMember = ({ member }) => {
    return (
        <div className="overflow-hidden bg-white rounded-md generation-member">
            <div className="generation-member-image">
                <img src={`/storage/${member.profile_image}`} />
            </div>
        </div>
    );
};
