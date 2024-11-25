"use client";

import {Tabs} from "../components/ui/tabs.jsx";
import React from "react";

export function TabsDemo() {
    const tabs = [
        {
            title: "Master 2",
            value: "Master 2",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-lg p-3 md:p-10
                     bg-black-200 border border-black-300">
                    {/* Header */}
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-between">
                            <p className="sm:text-md md::text-xl lg:text-4xl font-bold text-white">Master 2</p>
                            <p className="sm:text-sm md:text-lg lg:text-2xl text-white">MIAGE IPM</p>
                            <p className="sm:text-xs md:text-md lg:text-xl text-white">2023.9 - 2024.11</p>
                        </div>
                        <div className="flex flex-col items-end gap-1 md:gap-3">
                            <img src="/assets/UTC.jpg" alt="UTC Logo" className="w-12 h-12 md:w-24 md:h-24 rounded-md"/>
                            <p className="sm:text-sm md:text-xl lg:font-bold text-white">Université Toulouse Capitole</p>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="mt-3 md:mt-10">
                        <p className="text-white">Main courses:</p>
                    </div>


                </div>
            ),
        },
        {
            title: "Master 1",
            value: "Master 1",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Master 1</p>
                </div>
            ),
        },
        {
            title: "Prep. Year",
            value: "Prep. Year",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold
                    text-white bg-gradient-to-br from-purple-700 to-violet-900 border-2 border-white-700">
                    <p>Prep Year</p>
                </div>
            ),
        },
        {
            title: "Bachelor degree",
            value: "Bachelor degree",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Bachelor degree</p>
                </div>
            ),
        },
    ];

    return (
        <section className={"c-space my-20"} id="education">
            <h3 className={"head-text"}>
                My Education
            </h3>
            <div>
                <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto
                w-full items-start justify-start mb-40 mt-16">
                    <Tabs tabs={tabs}/>
                </div>
            </div>
        </section>
    );
}


