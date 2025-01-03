"use client";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {cn} from "../../../lib/utils.js";
import {useTranslation} from "react-i18next";


export const Tabs = () => {
    const { t, i18n } = useTranslation();
    const generateTabs = ()  => [
        {
            title: "2024",
            value: "2024",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-lg p-3 md:p-10
                     bg-black-200 border border-black-300">
                    {/* Header */}
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-between text-[#afb0b6]">
                            <p className="sm:text-lg md:text-2xl lg:text-4xl font-bold text-white">{t("master2")}</p>
                            <p className="sm:text-sm md:text-lg lg:text-2xl">MIAGE IPM</p>
                            <div className="flex items-center gap-1">
                                <img src="/assets/hourglass.png" alt="time" className="w-3 h-3 md:w-5 md:h-5"/>
                                <p className="sm:text-xs md:text-lg lg:text-xl">2023.9 - 2024.11</p>
                            </div>

                            <div className="flex items-center gap-1">
                                <img src="/assets/pin.png" alt="pin" className="w-3 h-3 md:w-5 md:h-5"/>
                                <p className="sm:text-xs md:text-lg lg:text-xl">{t("UTCLocation")}</p>
                            </div>

                        </div>
                        <div className="flex flex-col items-end gap-1 md:gap-3 text-[#afb0b6] justify-end">
                            <img src="/assets/UTC.jpg" alt="UTC Logo" className="w-16 h-16 md:w-28 md:h-28 rounded-md"/>
                            <p className="sm:text-sm md:text-xl lg:text-2xl font-bold text-white cursor-pointer"
                               onClick={() => window.open("https://www.ut-capitole.fr/", "_blank")}
                            >
                                {t("nameUTC")}
                            </p>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="mt-3 md:mt-10 ">
                        <p className="text-md md:text-2xl font-semibold text-white">{t("mainCourses")} :</p>
                        <div className="ml-10 mt-3 flex flex-col gap-2 text-[#afb0b6] text-sm md:text-xl">
                            <p>- {t("course1")}</p>
                            <p>- {t("course2")}</p>
                            <p>- {t("course3")}</p>
                            <p>- {t("course4")}</p>
                        </div>

                        <p className="mt-3 text-md md:text-2xl text-white font-semibold hidden md:block">
                            {t("project_school")} :
                        </p>
                        <div className="ml-10 mt-3 text-[#afb0b6] text-sm md:text-xl hidden md:block">
                            <p
                                className="mb-2 flex items-center gap-2 cursor-pointer hover:underline hover:text-white"
                                onClick={() => window.open("https://github.com/Projet-DAI/ProjetDrive_G1", "_blank")}
                            >
                                {t("project_Drive")}
                                <img src="/assets/arrow-up.png" alt="arrow" className={"w-3 h-3"}/>
                            </p>
                            <p
                                className="flex items-center gap-2 cursor-pointer hover:underline hover:text-white"
                                onClick={() => window.open("https://github.com/manuvai/risk2023", "_blank")}
                            >
                                {t("project_Risk")}
                                <img src="/assets/arrow-up.png" alt="arrow" className={"w-3 h-3"}/>
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            value: "2023",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-lg p-3 md:p-10
                bg-black-200 border border-black-300">
                    {/* Header */}
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-between text-[#afb0b6]">
                            <p className="sm:text-lg md:text-2xl lg:text-4xl font-bold text-white">{t("master1")}</p>
                            <p className="sm:text-sm md:text-lg lg:text-2xl">MIAGE IM</p>
                            <div className="flex items-center gap-1">
                                <img src="/assets/hourglass.png" alt="time" className="w-3 h-3 md:w-5 md:h-5"/>
                                <p className="sm:text-xs md:text-lg lg:text-xl">2022.9 - 2023.4</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <img src="/assets/pin.png" alt="pin" className="w-3 h-3 md:w-5 md:h-5"/>
                                <p className="sm:text-xs md:text-lg lg:text-xl">{t("UTCLocation")}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1 md:gap-3 justify-end">
                            <img src="/assets/UTC.jpg" alt="UTC Logo" className="w-16 h-16 md:w-28 md:h-28 rounded-md"/>
                            <p
                                className="sm:text-sm md:text-xl lg:text-2xl font-bold text-white cursor-pointer"
                                onClick={() => window.open("https://www.ut-capitole.fr/", "_blank")}
                            >
                                {t("nameUTC")}
                            </p>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="mt-3 md:mt-10 ">
                        <p className="text-md md:text-2xl font-semibold text-white">{t("mainCourses")} :</p>
                        <div className="ml-10 mt-3 flex flex-col gap-1 text-[#afb0b6] text-sm md:text-xl">
                            <p>- {t("course5")}</p>
                            <p>- {t("course6")}</p>
                            <p>- {t("course7")}</p>
                            <p>- {t("course8")}</p>
                            <p>- {t("course9")}</p>
                        </div>

                        <p className="mt-3 text-md md:text-2xl text-white font-semibold hidden md:block">
                            {t("project_school")} :
                        </p>
                        <div className="ml-10 mt-3 text-[#afb0b6] text-sm md:text-xl hidden md:block">
                            <p
                                className="mb-2 flex items-center gap-2 cursor-pointer hover:underline hover:text-white cursor-pointer"
                                onClick={() => window.open("https://github.com/MangerSainement/HEALTH_ME", "_blank")}
                            >
                                {t("project_HealthMe")}
                                <img src="/assets/arrow-up.png" alt="arrow" className={"w-3 h-3"}/>
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            value: "2022",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-lg p-3 md:p-10
                bg-black-200 border border-black-300">
                    {/* Header */}

                    <div className="flex justify-between">
                        <div className="flex flex-col justify-between text-[#afb0b6]">
                            <p className="sm:text-lg md:text-2xl lg:text-4xl font-bold text-white">{t("prepYear")}</p>
                            <p className="sm:text-sm md:text-lg lg:text-2xl">MIAGE APC</p>
                            <div className="flex items-center gap-1">
                                <img src="/assets/hourglass.png" alt="time" className="w-3 h-3 md:w-5 md:h-5"/>
                                <p className="sm:text-xs md:text-lg lg:text-xl">2021.9 - 2022.4</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <img src="/assets/pin.png" alt="pin" className="w-3 h-3 md:w-5 md:h-5"/>
                                <p className="sm:text-xs md:text-lg lg:text-xl">{t("UTCLocation")}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1 md:gap-3 justify-end">
                            <img src="/assets/UTC.jpg" alt="UTC Logo" className="w-16 h-16 md:w-28 md:h-28 rounded-md"/>
                            <p
                                className="sm:text-sm md:text-xl lg:text-2xl font-bold text-white cursor-pointer"
                                onClick={() => window.open("https://www.ut-capitole.fr/", "_blank")}
                            >
                                {t("nameUTC")}
                            </p>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="mt-3 md:mt-10 ">
                        <p className="text-md md:text-2xl font-semibold text-white">{t("mainCourses")} :</p>
                        <div className="ml-10 mt-3 flex flex-col gap-1 text-[#afb0b6] text-sm md:text-xl">
                            <p>- {t("course10")}</p>
                            <p>- {t("course11")}</p>
                            <p>- {t("course12")}</p>
                            <p>- {t("course13")}</p>
                            <p>- {t("course14")}</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: t("bachelor"),
            value: t("bachelor"),
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-lg p-3 md:p-10
                bg-black-200 border border-black-300">
                    {/* Header */}
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-between text-[#afb0b6]">
                            <p className="sm:text-lg md:text-2xl lg:text-4xl font-bold text-white">{t("bachelor")}</p>
                            <p className="sm:text-sm md:text-lg lg:text-2xl">{t("economics")}</p>
                            <div className="flex items-center gap-1">
                                <img src="/assets/hourglass.png" alt="time" className="w-3 h-3 md:w-5 md:h-5"/>
                                <p className="sm:text-xs md:text-lg lg:text-xl">2017.9 - 2021.7</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <img src="/assets/pin.png" alt="pin" className="w-3 h-3 md:w-5 md:h-5"/>
                                <p className="sm:text-xs md:text-lg lg:text-xl">{t("beijing")}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1 md:gap-3 justify-end">
                            <img src="/assets/cueb.png" alt="CUEB Logo"
                                 className="w-12 h-12 md:w-24 md:h-24 rounded-md"/>
                            <p
                                className="sm:text-sm md:text-xl lg:text-2xl font-bold text-white cursor-pointer text-end"
                                onClick={() => {
                                    window.open("https://www.cueb.edu.cn/", "_blank")
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: t("cueb"),
                                }}
                            >

                            </p>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="mt-3 md:mt-10 ">
                        <p className="text-md md:text-2xl font-semibold text-white">{t("mainCourses")} :</p>
                        <div className="ml-10 mt-3 flex flex-col gap-1 text-[#afb0b6] text-sm md:text-xl">
                            <p>- {t("course15")}</p>
                            <p>- {t("course16")}</p>
                            <p>- {t("course17")}</p>
                            <p>- {t("course18")}</p>
                            <p>- {t("course19")}</p>
                        </div>
                    </div>
                    {/*    Awards*/}
                    <p className="mt-3 text-md md:text-2xl text-white font-semibold hidden md:block">{t("awards")} :</p>
                    <div className="ml-10 mt-3 text-[#afb0b6] text-sm md:text-xl hidden md:block">
                        <p className="mb-2 flex items-center gap-2 hover:text-white">{t("scholarship")}</p>
                    </div>
                </div>
            ),
        },
    ];

    const [tabs, setTabs] = useState(generateTabs());
    const [active, setActive] = useState(generateTabs()[0]);

    useEffect(() => {
        setTabs(generateTabs());
        setActive(generateTabs()[0]); // 同时更新活动的 tab
    }, [t, i18n.language]);

    const moveSelectedTabToTop = (idx) => {
        const newTabs = [...generateTabs()];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabs(newTabs);
        setActive(newTabs[0]);
    };

    const [hovering, setHovering] = useState(false);

    return (<>
        <div className="flex flex-row items-center justify-start [perspective:1000px] relative
        overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full">
            {generateTabs().map((tab, idx) => (
                <button
                    key={tab.title}
                    onClick={() => {
                        moveSelectedTabToTop(idx);
                    }}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    className="relative px-4 py-2 rounded-full"
                    style={{
                        transformStyle: "preserve-3d",
                    }}>
                    {active.value === tab.value && (
                        <motion.div
                            layoutId="clickedbutton"
                            transition={{type: "spring", bounce: 0.3, duration: 0.6}}
                            className="absolute inset-0 bg-blue-400 text-white rounded-full"/>
                    )}

                    <span className={`${active.title === tab.title && "text-white"} relative block text-md lg:text-xl font-bold text-[#afb0b6]`}>
                        {tab.title}
                    </span>
                </button>
            ))}
        </div>
        <FadeInDiv
            tabs={tabs}
            active={active}
            key={active.value}
            hovering={hovering}
        />
    </>);
};

export const FadeInDiv = ({ tabs, hovering }) => {
    const isActive = (tab) => {
        return tab.value === tabs[0].value;
    };
    return (
        (<div className="relative w-full h-full">
            {tabs.map((tab, idx) => (
                <motion.div
                    key={tab.value}
                    layoutId={tab.value}
                    style={{
                        scale: 1 - idx * 0.1,
                        top: hovering ? idx * -50 : 0,
                        zIndex: -idx,
                        opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                    }}
                    animate={{
                        y: isActive(tab) ? [0, 40, 0] : 0,
                    }}
                    className="w-full h-full absolute top-0 left-0 mt-16">
                    {tab.content}
                </motion.div>
            ))}
        </div>)
    );
};
