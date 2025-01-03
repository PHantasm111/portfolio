import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useTranslation} from "react-i18next";
import {AnimatePresence, motion} from "framer-motion";
import {Modal, ModalContent, ModalFooter} from "../components/ui/animated-modal.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const {t} = useTranslation();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredButton, setHoveredButton] = useState(false);
    const [clicking, setClicking] = useState(false);
    const [open, setOpen] = useState(false);

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

    const hoveredGrid = () => (
        <motion.span
            className="absolute inset-0 h-full w-full bg-black-500/80 block rounded-xl"
            layoutId="hoverBackground"
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {duration: 0.1},
            }}
            exit={{
                opacity: 0,
                transition: {duration: 0.1, delay: 0.2},
            }}
        />
    )

    return (
        <>
            <div className="c-space my-20">
                <div className={"grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 h-full"}>
                    {/* Grid 1 */}
                    <div className="col-span-1 xl:row-span-3 relative p-2"
                         onMouseEnter={() => setHoveredIndex(1)}
                         onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Hover Animation */}
                        <AnimatePresence>
                            {hoveredIndex === 1 && (hoveredGrid())}
                        </AnimatePresence>
                        {/* Grid Content */}
                        <div className="grid-container">
                            <img
                                src="/assets/phcv-nobg.png"
                                alt="grid-1"
                                className="w-full sm:h-[276px] h-fit object-cover"
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
                    <div className="col-span-1 xl:row-span-3 relative p-2"
                         onMouseEnter={() => setHoveredIndex(2)}
                         onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Hover Animation */}
                        <AnimatePresence>
                            {hoveredIndex === 2 && (hoveredGrid())}
                        </AnimatePresence>
                        {/* Grid Content */}
                        <div className="grid-container">
                            <div className="relative cursor-pointer"
                                 onMouseEnter={() => setHoveredButton(true)}
                                 onMouseLeave={() => setHoveredButton(false)}
                            >
                                {/* Hover Layer */}
                                {hoveredButton && (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-black-200/[0.2] rounded-lg">
                                        <motion.div
                                            initial={{opacity: 0, scale: 0, y: 10}}
                                            animate={{opacity: 1, scale: 1, y: 0}}
                                            exit={{opacity: 0, scale: 0, y: 10}}
                                            transition={{duration: 0.4, ease: "easeIn"}}
                                        >
                                            <button className={`overflow-hidden text-white flex justify-center 
                                        group/modal-btn rounded-lg px-4 py-2 text-lg bg-black-500/[0.7] 
                                        hover:bg-black-500 hover:transition-all hover:duration-300 
                                        ${clicking ? '!bg-black-300' : ''} `}
                                                    onClick={() => setOpen(true)}
                                                    onMouseDown={() => setClicking(true)}
                                                    onMouseUp={() => setClicking(false)}
                                            >
                                                <span className="group-hover/modal-btn:translate-x-40
                                                    text-center transition duration-300 ease-in"
                                                >
                                                Learn More...
                                                </span>
                                                <div className=" -translate-x-40 group-hover/modal-btn:translate-x-0
                                                    flex items-center justify-center absolute inset-0 transition duration-300
                                                    text-transparent group-hover/modal-btn:text-white ease-in"
                                                >
                                                    🖱️Click!
                                                </div>
                                            </button>
                                        </motion.div>
                                    </div>
                                )}
                                <img
                                    src="/assets/grid2-grey.png"
                                    alt="grid-2"
                                    className="w-full sm:w-[276px] h-fit object-contain"
                                />
                            </div>
                            <div className="border-t-2 border-black-300 w-full"></div>
                            <div>
                                <p className={"grid-headtext"}>{t("grid2Title")}</p>
                                <p className={"grid-subtext text-justify"}>
                                    {t("grid2_TechStack")}
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Grid 3 */}
                    <div className="col-span-1 xl:row-span-4 relative p-2"
                         onMouseEnter={() => setHoveredIndex(3)}
                         onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Hover Animation */}
                        <AnimatePresence>
                            {hoveredIndex === 3 && (hoveredGrid())}
                        </AnimatePresence>
                        {/* Grid Content */}
                        <div className="grid-container">
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
                    <div className="xl:col-span-2 xl:row-span-3 relative p-2"
                         onMouseEnter={() => setHoveredIndex(4)}
                         onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Hover Animation */}
                        <AnimatePresence>
                            {hoveredIndex === 4 && (hoveredGrid())}
                        </AnimatePresence>
                        {/* Grid Content */}
                        <div className="grid-container">
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
                    <div className="xl:col-span-1 xl:row-span-2 relative p-2"
                         onMouseEnter={() => setHoveredIndex(5)}
                         onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Hover Animation */}
                        <AnimatePresence>
                            {hoveredIndex === 5 && (hoveredGrid())}
                        </AnimatePresence>
                        {/* Grid Content */}
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

            <Modal open={open} setOpen={setOpen}>
                <ModalContent>
                    <h2>Modal Title</h2>
                    <p>This is the content of the modal.</p>
                </ModalContent>
                <ModalFooter>
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={() => setOpen(false)}
                    >
                        Close
                    </button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default About
