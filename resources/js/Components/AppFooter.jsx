import InstagramIcon from "@/icons/InstagramIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import TikTokIcon from "@/icons/TikTokIcon";

const AppFooter = ({
    bgColor = "#000",
    sponsors,
    social_networks,
    openSubscriberModal,
}) => {
    return (
        <footer>
            <div
                style={{ backgroundColor: bgColor }}
                className="py-10 text-white"
            >
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 gap-5 lg:gap-20 lg:grid-cols-2">
                        <div className="flex flex-col items-center justify-center space-y-5 lg:items-start lg:justify-start">
                            <img
                                className="w-64"
                                src="/assets/images/THEBUNDPROJECT-NEXOS2022-LOGOTBP BLANCO_Mesa de trabajo 1.svg"
                                alt=""
                            />
                            <p className="text-center lg:text-left">
                                The Bünd Project es un colectivo creativo que
                                engloba generaciones de diseñadores
                                industriales, con el objetivo de mostrar su
                                trabajo y competencias a diferentes empresas o
                                público interesado. The Bund Project incorpora
                                todas las categorías del diseño en una sola
                                plataforma.
                            </p>
                            <div className="flex flex-col gap-4 lg:flex-row ">
                                <div className="flex justify-center gap-2">
                                    {social_networks.map((socialNetwork) => (
                                        <a
                                            href={socialNetwork.url}
                                            target="_blank"
                                            key={socialNetwork.id}
                                        >
                                            <img
                                                src={`/storage/${socialNetwork.social_network.icon}`}
                                                className="w-10"
                                            />
                                        </a>
                                    ))}
                                    <button
                                        onClick={openSubscriberModal}
                                        type="button"
                                        className="px-2 py-1 text-white bg-[#F0A31F] border border-transparent shadow-sm tems-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Suscríbete
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center space-y-5">
                            <p className="text-xl text-center">
                                Patrocinadores
                            </p>
                            <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-6">
                                {sponsors.map((sponsor) => (
                                    <FooterPartnersItem
                                        key={sponsor.id}
                                        sponsor={sponsor}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-4 text-sm text-center text-gray-500">
                <p>
                    Copyright © 2010 - 2022 The Bünd Project. Todos los derechos
                    reservados.
                </p>
            </div>
        </footer>
    );
};

export default AppFooter;

const FooterPartnersItem = ({ sponsor }) => {
    return (
        <a href={sponsor.url} className="">
            <img src={`/storage/${sponsor.image}`} alt={sponsor.name} />
        </a>
    );
};
