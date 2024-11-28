import React, {Suspense, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import {workExperiences} from "../constants/index.js";
import {CameraControls, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Developer from "../components/Developer.jsx";
import {useTranslation} from "react-i18next";

const Experience = () => {
    const [animationName, setAnimationName] = useState('idle')
    const {t} = useTranslation();

    return (
        <section className={"c-space my-20"} id="experience">
            <div className={"w-full text-white-600"}>
                <h3 className={"head-text"}>{t("myExperience")}</h3>
                <div className={"work-container"}>
                    <div className={"work-canvas"}>
                        <Canvas>
                            <ambientLight intensity={7}/>
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
                            <directionalLight position={[10, 15, 10]} intensity={3}/>
                            <OrbitControls enableZoom={true} minDistance={9} maxDistance={12} minPolarAngle={-2} maxPolarAngle={1.3}/>
                            <Suspense fallback={<CanvasLoader/>}>
                                <Developer position-y={-5} scale={5} animationName={animationName}/>
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className={"work-content flex flex-col justify-center"}>
                        <div className={"sm:py-10 py-5 sm:px-5 px-2.5"}>
                            {workExperiences.map(({
                                                      id,
                                                      name,
                                                      pos,
                                                      duration,
                                                      title,
                                                      icon,
                                                      animation}
                            ) => (
                                <div key={id}
                                     className={"work-content_container group"}
                                     onClick={() => setAnimationName(animation.toLowerCase())}
                                     onPointerOver={() => setAnimationName(animation.toLowerCase())}
                                     onPointerOut={() => setAnimationName('idle')}
                                >
                                    <div className={"flex flex-col h-full justify-start items-center py-2"}>
                                        <div className={"work-content_logo"}>
                                            <img
                                                src={icon}
                                                alt="logo"
                                                className={"w-full h-full"}
                                            />
                                        </div>
                                        <div className={"work-content_bar"} />
                                    </div>
                                    <div className={"sm:px-5 px-2.5 py-5"}>
                                        <p className={"font-bold text-white-700"}>{t(name)}</p>
                                        <p className={"text-sm mb-5 text-white-600"}>{t(pos)} -- {t(duration)}</p>
                                        <p className={"group-hover:text-white transition ease-in-out duration-500 text-justify text-md"}>{t(title)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience
