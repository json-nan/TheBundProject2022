import InstagramIcon from "@/icons/InstagramIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import TikTokIcon from "@/icons/TikTokIcon";

const AppFooter = () => {
    return (
        <footer>
            <div className="bg-black text-white py-10">
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
                                <LinkedinIcon className="w-8 text-yellow-600" />
                                <InstagramIcon className="w-8 text-yellow-600" />
                                <TikTokIcon className="w-8 text-yellow-600" />
                                <button
                                    type="button"
                                    className="inline-flex items-center  border border-transparent bg-yellow-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Button text
                                </button>
                            </div>
                        </div>
                        <div className="space-y-5 flex flex-col justify-center">
                            <p className="text-xl">Patrocinadores</p>

                            <div className="grid grid-cols-4 gap-x-12 gap-y-6">
                                <FooterPartnersItem />
                                <FooterPartnersItem />
                                <FooterPartnersItem />
                                <FooterPartnersItem />
                                <FooterPartnersItem />
                                <FooterPartnersItem />
                                <FooterPartnersItem />
                                <FooterPartnersItem />
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

const FooterPartnersItem = () => {
    return (
        <div className="flex items-center gap-4 bg-white w-full h-24">
            <div></div>
        </div>
    );
};
