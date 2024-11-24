import React, {useEffect, useRef, useState} from 'react'
import {useTranslation} from "react-i18next";

const languages = [
    {code:"en", lang:"English"},
    {code:"fr", lang:"French"},
    {code:"cn", lang:"Chinese"},
]

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("i18nextLng") || "en");
    const [isOpen, setIsOpen] = useState(false)

    const dropdownRef = useRef(null);

    const {i18n} = useTranslation()

    const handleSelect = (languageCode) => {
        i18n.changeLanguage(languageCode).then(() => console.log("changed") );
    }

    const {t} = useTranslation();

    // 点击下拉菜单以外时关闭菜单
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false); // 如果点击发生在菜单外部，关闭菜单
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center" ref={dropdownRef}>
            <button onClick={() => setIsOpen((prev) => !prev)}
                    className="flex items-center justify-center space-x-2 px-4 py-2">
                <img
                    src="/assets/languages.svg"
                    alt="language"
                    width={24}
                    height={24}
                />
            </button>

            {isOpen && (
                <div className="absolute top-10 mt-2 w-28 bg-black text-white border rounded-md">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => {
                                handleSelect(language.code)
                                setSelectedLanguage(language.code)
                                setIsOpen(false)
                            }}
                            className={`${selectedLanguage === language.code ? "bg-gray-100" : ""} w-full flex flex-col items-center py-2 hover:bg-gray-100 cursor-pointer rounded-sm`}
                        >
                            <span className="text-center">{t(language.lang)}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>

    )
}
export default LanguageSelector
