import InstagramIcon from "@/icons/InstagramIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import TikTokIcon from "@/icons/TikTokIcon";

const AppFooter = ({ bgColor = "#000", sponsors, social_networks }) => {
    return (
        <footer>
            <div
                style={{ backgroundColor: bgColor }}
                className="py-10 text-white"
            >
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 gap-20">
                        <div className="space-y-5">
                            <img
                                className="w-64"
                                src="/assets/images/THEBUNDPROJECT-NEXOS2022-LOGOTBP BLANCO_Mesa de trabajo 1.svg"
                                alt=""
                            />
                            <p>
                                The Bünd Project es un colectivo creativo que
                                engloba generaciones de diseñadores
                                industriales, con el objetivo de mostrar su
                                trabajo y competencias a diferentes empresas o
                                público interesado. The Bund Project incorpora
                                todas las categorías del diseño en una sola
                                plataforma.
                            </p>
                            <div className="flex gap-4 ">
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
                                {/* <LinkedinIcon className="w-8 text-yellow-600" />
                                <InstagramIcon className="w-8 text-yellow-600" />
                                <TikTokIcon className="w-8 text-yellow-600" /> */}
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-yellow-600 border border-transparent shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Button text
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center space-y-5">
                            <p className="text-xl">Patrocinadores</p>
                            <div className="grid grid-cols-4 gap-x-12 gap-y-6">
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
            <div className="flex justify-center py-4">
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
        <a href={sponsor.url} className="w-24 h-24 ">
            <img src={`/storage/${sponsor.image}`} alt={sponsor.name} />
        </a>
    );
};
