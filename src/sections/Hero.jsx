import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import {useTranslation} from "react-i18next";

const Hero = () => {
    // Verifier if the device is a mobile device
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    const {t} = useTranslation();
    // const x = useControls(
    //     'HackerRoom',
    //     {
    //         rotationX: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10,
    //         },
    //         rotationY: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10,
    //         },
    //         rotationZ: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10,
    //         },
    //         positionX: {
    //             value: 0,
    //             min: -10,
    //             max: 10,
    //         },
    //         positionY: {
    //             value: 0,
    //             min: -10,
    //             max: 10,
    //         },
    //         positionZ: {
    //             value: 0,
    //             min: -10,
    //             max: 10,
    //         },
    //         scale: {
    //             value: 1,
    //             min: 0.1,
    //             max: 10,
    //         }
    //     }
    // );

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className={"w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 absolute z-10"}>
                <p className={"sm:text-3xl text-xl font-medium text-white text-center font-generals"}>
                    {t("hiWords")}
                    <span className={"waving-hand"}>👋</span>
                </p>
                <p className={"hero_tag text-gray_gradient"}>
                    {t("fullStackDev")}
                </p>
            </div>

            <div className={"w-full h-full absolute inset-0"}>
                {/*<Leva/>*/}
                <Canvas className={"w-full h-full"}>
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera
                            makeDefault
                            position={[0, 0, 20]}
                        />
                        {/* 3d model - hacker room*/}
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                //scale={0.07}
                                scale={sizes.deskScale}
                                rotation={[0, -Math.PI, 0]}
                                position={sizes.deskPosition}
                            />
                        </HeroCamera>

                        {/* floating elements*/}
                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition}/>
                        </group>

                        <ambientLight intensity={1.4}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>

            <div className={"absolute bottom-7 left-0 right-0 w-full z-10 c-space"}>
                <a href="#about" className={"w-fit"}>
                    <Button
                        name={t("letUsWorkTogether")}
                        isBeam
                        containerClass={"sm:w-fit w-full sm:min-w-96"}
                    />
                </a>
            </div>
        </section>
    )
}
export default Hero
