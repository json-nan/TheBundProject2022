const HomeMainGenerationGrid = ({ members }) => (
    <div className="relative overflow-hidden home-generation bg-primary">
        <img
            src="/assets/images/THEBUNDPROJECT-NEXOS2022-TRAMA_Mesa de trabajo 1.svg"
            className="absolute bottom-0 2xl:w-96 w-72 lg:w-56"
        />
        <img
            src="/assets/images/THEBUNDPROJECT-NEXOS2022-TRAMA2_Mesa de trabajo 1.svg"
            className="absolute w-32 2xl:w-44 top-8 right-12 lg:w-24 "
        />
        <img
            src="/assets/images/THEBUNDPROJECT-NEXOS2022-TRAMA3_Mesa de trabajo 1.svg"
            className="absolute bottom-0 right-0 2xl:w-96 w-72 2xl:bottom-16 lg:w-60 lg:bottom-20"
        />

        <div className="relative top-0 z-10 w-full py-10">
            <div className="max-w-2xl mx-auto space-y-10 2xl:max-w-7xl lg:max-w-4xl">
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
                            desarrollo e innovación de la industria creativa en
                            El Salvador.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-6">
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
