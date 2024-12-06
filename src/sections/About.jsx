import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useTranslation} from "react-i18next";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const {t} = useTranslation();
    const handleCopy = () => {
        navigator.clipboard.writeText("panghanfr@gmail.com");

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }

    const handleNavigation = (href) => {
        window.location.href = href;
    }

    return (
        <div className={"c-space my-20"} id="about">
            <div className={"grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"}>
                {/* Grid 1 */}
                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img
                            src="/assets/phcv-nobg.png"
                            alt={"grid-1"}
                            className={"w-full sm:h-[276px] h-fit object-cover"}
                        />
                        <div>
                            <p className={"grid-headtext"}>
                                {t("hiWords")}
                                <span className={"waving-hand"}>✌️</span>
                            </p>
                            <p className={"grid-subtext text-justify"}>
                                {t("grid1_intro")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid 2 */}
                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img
                            src="/assets/grid2-grey.png"
                            alt="grid-2"
                            className="w-full sm:w-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className={"grid-headtext"}>{t("grid2Title")}</p>
                            <p className={"grid-subtext text-justify"}>
                                {t("grid2_TechStack")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid 3 */}
                <div className={"col-span-1 xl:row-span-4"}>
                    <div className={"grid-container"}>
                        <div className={"rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"}>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 43.611436400253965,
                                    lng: 1.4503204689085096,
                                    text: '31000, Toulouse, France',
                                    color: 'white',
                                    size: 20
                                }]}
                                labelSize={3}
                                labelDotRadius={0.5}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext text-justify">{t("grid3Title")}</p>
                            <p className="grid-subtext">{t("grid3_based")}</p>
                            <br/>
                            <p className="grid-subtext">{t("grid3_language")}</p>
                            <a href={"#contact"} className="w-full">
                                <Button
                                    name={t("contactMe")}
                                    isBeam
                                    containerClass="w-full mt-10"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid 4 */}
                <div className={"xl:col-span-2 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img
                            src="/assets/grid3.png"
                            alt="grid-3"
                            className="w-full sm:h-[266px] h-fit object-contain"
                        />
                        <div>
                            <p className={"grid-headtext"}>{t("grid4Title")}</p>
                            <p className={"grid-subtext text-justify"}>
                                {t("grid4_content1")}
                            </p>
                            <p className={"grid-subtext text-justify"}>
                                {t("grid4_content2")}
                            </p>

                        </div>
                    </div>
                </div>

                {/* Grid 5 */}
                <div className={"xl:col-span-1 xl:row-span-2"}>
                    <div className={"grid-container"}>
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className={"space-y-2"}>
                            <p className={"grid-subtext text-center"}>{t("contactMe")}</p>
                            <div className={"copy-container"} onClick={handleCopy}>
                                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy"/>
                                <p className={"lg:text-2xl md:text-xl font-medium text-gray_gradient text-white"}>
                                    panghanfr@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default About
