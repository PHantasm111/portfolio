"use client";

import {Tabs} from "../components/ui/tabs.jsx";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";


const generateTabs = (t) =>  [
    {
        title: "2024",
        value: "2024",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-lg p-3 md:p-10
                     bg-black-200 border border-black-300">
                {/* Header */}
                <div className="flex justify-between">
                    <div className="flex flex-col justify-between text-[#afb0b6]">
                        <p className="sm:text-lg md:text-2xl lg:text-4xl font-bold text-white">Master 2</p>
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
                            Université Toulouse Capitole
                        </p>
                    </div>
                </div>
                {/* Content */}
                <div className="mt-3 md:mt-10 ">
                    <p className="text-md md:text-2xl font-semibold text-white">Main Courses :</p>
                    <div className="ml-10 mt-3 flex flex-col gap-2 text-[#afb0b6] text-sm md:text-xl">
                        <p>- Analysis/Design of Information Systems (UML, UP)</p>
                        <p>- Business Process Modeling (BPMN)</p>
                        <p>- Object-Oriented Application Development (JAVA)</p>
                        <p>- Agile Requirements Gathering</p>
                    </div>

                    <p className="mt-3 text-md md:text-2xl text-white font-semibold hidden md:block">School Project
                        :</p>
                    <div className="ml-10 mt-3 text-[#afb0b6] text-sm md:text-xl hidden md:block">
                        <p
                            className="mb-2 flex items-center gap-2 cursor-pointer hover:underline hover:text-white"
                            onClick={() => window.open("https://github.com/Projet-DAI/ProjetDrive_G1", "_blank")}
                        >
                            Project_Drive : A web application for online shopping with order pickup via drive-in
                            <img src="/assets/arrow-up.png" alt="arrow" className={"w-3 h-3"}/>
                        </p>
                        <p
                            className="flex items-center gap-2 cursor-pointer hover:underline hover:text-white"
                            onClick={() => window.open("https://github.com/manuvai/risk2023", "_blank")}
                        >
                            Project_Risk : Design and development of the board game 'RISK'
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
                        <p className="sm:text-lg md:text-2xl lg:text-4xl font-bold text-white">Master 1</p>
                        <p className="sm:text-sm md:text-lg lg:text-2xl">MIAGE IM</p>
                        <div className="flex items-center gap-1">
                            <img src="/assets/hourglass.png" alt="time" className="w-3 h-3 md:w-5 md:h-5"/>
                            <p className="sm:text-xs md:text-lg lg:text-xl">2022.9 - 2023.4</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="/assets/pin.png" alt="pin" className="w-3 h-3 md:w-5 md:h-5"/>
                            <p className="sm:text-xs md:text-lg lg:text-xl">Toulouse, France</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 md:gap-3 justify-end">
                        <img src="/assets/UTC.jpg" alt="UTC Logo" className="w-16 h-16 md:w-28 md:h-28 rounded-md"/>
                        <p
                            className="sm:text-sm md:text-xl lg:text-2xl font-bold text-white cursor-pointer"
                            onClick={() => window.open("https://www.ut-capitole.fr/", "_blank")}
                        >
                            Université Toulouse Capitole
                        </p>
                    </div>
                </div>
                {/* Content */}
                <div className="mt-3 md:mt-10 ">
                    <p className="text-md md:text-2xl font-semibold text-white">Main Courses :</p>
                    <div className="ml-10 mt-3 flex flex-col gap-2 text-[#afb0b6] text-sm md:text-xl">
                        <p>Website Design (HTML, CSS, JavaScript)</p>
                        <p>OLAP (SAP-BO, Power BI)</p>
                        <p>Database Development (MySQL, Oracle)</p>
                        <p>Structured Programming (Python)</p>
                        <p>Project Management</p>
                    </div>

                    <p className="mt-3 text-md md:text-2xl text-white font-semibold hidden md:block">
                        School Project :
                    </p>
                    <div className="ml-10 mt-3 text-[#afb0b6] text-sm md:text-xl hidden md:block">
                        <p
                            className="mb-2 flex items-center gap-2 cursor-pointer hover:underline hover:text-white cursor-pointer"
                            onClick={() => window.open("https://github.com/MangerSainement/HEALTH_ME", "_blank")}
                        >
                            Project_HealthMe : A website offering natural foods to ease symptoms
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
                        <p className="sm:text-lg md:text-2xl lg:text-4xl font-bold text-white">Preparation Year</p>
                        <p className="sm:text-sm md:text-lg lg:text-2xl">MIAGE APC</p>
                        <div className="flex items-center gap-1">
                            <img src="/assets/hourglass.png" alt="time" className="w-3 h-3 md:w-5 md:h-5"/>
                            <p className="sm:text-xs md:text-lg lg:text-xl">2021.9 - 2022.4</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="/assets/pin.png" alt="pin" className="w-3 h-3 md:w-5 md:h-5"/>
                            <p className="sm:text-xs md:text-lg lg:text-xl">Toulouse, France</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 md:gap-3 justify-end">
                        <img src="/assets/UTC.jpg" alt="UTC Logo" className="w-16 h-16 md:w-28 md:h-28 rounded-md"/>
                        <p
                            className="sm:text-sm md:text-xl lg:text-2xl font-bold text-white cursor-pointer"
                            onClick={() => window.open("https://www.ut-capitole.fr/", "_blank")}
                        >
                            Université Toulouse Capitole
                        </p>
                    </div>
                </div>
                {/* Content */}
                <div className="mt-3 md:mt-10 ">
                    <p className="text-md md:text-2xl font-semibold text-white">Main Courses :</p>
                    <div className="ml-10 mt-3 flex flex-col gap-2 text-[#afb0b6] text-sm md:text-xl">
                        <p>Advanced French</p>
                        <p>Information System Architecture and Design</p>
                        <p>Python introductory course</p>
                        <p>Access Database</p>
                        <p>Project Management</p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Bachelor degree",
        value: "Bachelor degree",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-lg p-3 md:p-10
                bg-black-200 border border-black-300">
                {/* Header */}
                <div className="flex justify-between">
                    <div className="flex flex-col justify-between text-[#afb0b6]">
                        <p className="sm:text-lg md:text-2xl lg:text-4xl font-bold text-white">Bachelor Degree</p>
                        <p className="sm:text-sm md:text-lg lg:text-2xl">Economics</p>
                        <div className="flex items-center gap-1">
                            <img src="/assets/hourglass.png" alt="time" className="w-3 h-3 md:w-5 md:h-5"/>
                            <p className="sm:text-xs md:text-lg lg:text-xl">2017.9 - 2021.7</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="/assets/pin.png" alt="pin" className="w-3 h-3 md:w-5 md:h-5"/>
                            <p className="sm:text-xs md:text-lg lg:text-xl">Beijing, China</p>
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
                        >
                            Capital University<br/> of Economics and Business
                        </p>
                    </div>
                </div>
                {/* Content */}
                <div className="mt-3 md:mt-10 ">
                    <p className="text-md md:text-2xl font-semibold text-white">Main Courses :</p>
                    <div className="ml-10 mt-3 flex flex-col gap-1 text-[#afb0b6] text-sm md:text-xl">
                        <p>Macroeconomics</p>
                        <p>Microeconomics</p>
                        <p>Econometrics</p>
                        <p>Statistics</p>
                        <p>Finance</p>
                    </div>
                </div>
                {/*    Awards*/}
                <p className="mt-3 text-md md:text-2xl text-white font-semibold hidden md:block">Awards :</p>
                <div className="ml-10 mt-3 text-[#afb0b6] text-sm md:text-xl hidden md:block">
                    <p className="mb-2 flex items-center gap-2 hover:text-white">School-level academic excellence scholarship</p>
                </div>
            </div>
        ),
    },
];

export function TabsDemo() {
    const { t, i18n } = useTranslation();
    const [tabs, setTabs] = useState(() => generateTabs(t));

    useEffect(() => {
        setTabs(generateTabs(t));
    }, [t, i18n.language]); // 监听语言变化

    return (
        <section className={"c-space my-20"} id="education">
            <h3 className={"head-text"}>
                {t("myEducation")}
            </h3>
            <div>
                <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto
                w-full items-start justify-start mb-40 mt-16">
                    <Tabs/>
                </div>
            </div>
        </section>
    );
}


