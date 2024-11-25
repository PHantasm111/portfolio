import React, { useState } from 'react'
import { navLinks } from "../constants/index.js";
import AceternityButton from "../components/ui/AceternityButton.jsx";
import LanguageSelector from "../components/LanguageSelector.jsx";
import { useTranslation } from "react-i18next";

const handleNavigation = (href) => {
    window.location.href = href;
}

const NavItems = () => {
    const { t } = useTranslation();
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a href={href}
                        className="nav-li_a"
                        onClick={() => { handleNavigation(href) }}
                    >
                        {t(name)}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a hef="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        {t("myName")}
                    </a>

                    <div className='flex items-center'>
                        <div className='sm:hidden flex'>
                            <LanguageSelector/>
                        </div>
                        

                        <button
                            onClick={toggleMenu}
                            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                            aria-label="Toggle menu"
                        >
                            <img src={isOpen ? " assets/close.svg" : " assets/menu.svg"}
                                alt=" toggle"
                                className=" w-6 h-6"
                            />
                        </button>
                    </div>


                    <nav className="sm:flex hidden gap-5">
                        <AceternityButton />
                        <NavItems />
                        <LanguageSelector />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5 flex flex-col gap-5">
                    <NavItems />
                    <div className="mx-auto">
                        <AceternityButton />
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Navbar
