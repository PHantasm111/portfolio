import React, {Suspense, useState} from 'react'
import {myProjects} from "../constants/index.js";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import DemoComputer from "../components/DemoComputer.jsx";
import {useTranslation} from "react-i18next";

const Projects = () => {

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const projectCount = myProjects.length;

    const currentProject = myProjects[selectedProjectIndex];

    const {t} = useTranslation();

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        })
    }

    return (
        <section className={"c-space my-20"} id="project">
            {/* Heading Text */}
            <p className={"head-text"}>{t("myWork")}</p>
            {/* Grid Container */}
            <div className={"grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full"}>

                <div className={"flex flex-col gap-5 relative sm:p-10 py-10 shadow-2xl shadow-black-200"}>
                    {/* Background Image */}
                    <div className={"absolute top-0 right-0"}>
                        <img src={currentProject.spotlight}
                             alt="spotlight"
                             className={"w-full h-96 object-cover rounded-xl"}
                        />
                    </div>
                    {/* Logo */}
                    <div className={"p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"} style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className={"w-10 h-10 shadow-sm"}/>
                    </div>

                    {/* Content */}
                    <div className={"flex flex-col gap-5 text-white-600 my-5"}>
                        <p className={"text-white text-2xl font-semibold animatedText"}>
                            {t(currentProject.title)}
                        </p>
                        <p className={"animateText text-justify"}>{t(currentProject.desc)}</p>
                        <p className={"animateText text-justify"}>{t(currentProject.subdesc)}</p>
                    </div>

                    {/* Tags */}
                    <div className={"flex items-center justify-between flex-wrap gap-5"}>
                        <div className={"flex items-center gap-3"}>
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className={"tech-logo"}>
                                    <img src={tag.path} alt={tag.name}/>
                                </div>
                            ))}
                        </div>

                        <a className={"flex items-center gap-2 cursor-pointer text-white-600"}
                           href={currentProject.href}
                           target={"_blank"}
                           rel="noreferrer"
                        >
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className={"w-3 h-3"}/>
                        </a>
                    </div>

                    {/* Switch arrows*/}
                    <div className={"flex justify-between items-center mt-7"}>
                        <button className={"arrow-btn"} onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" className={"w-4 h-4"}/>
                        </button>
                        <button className={"arrow-btn"} onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className={"w-4 h-4"}/>
                        </button>
                    </div>
                </div>

                {/* 3d computer */}
                <div className={"border border-black-300 bg-black-200 rounded-lg h-96 md:h-full"}>
                    <Canvas>
                        <ambientLight intensity={Math.PI}/>
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture}/>
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />

                    </Canvas>

                </div>

            </div>
        </section>
    )
}
export default Projects
