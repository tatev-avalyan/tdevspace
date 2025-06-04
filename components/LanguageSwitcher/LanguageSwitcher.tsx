"use client";

import { useTranslation } from "react-i18next";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import Image from "next/image";
import { useEffect } from "react";
import enFlag from "@/public/flags/en.png";
// import amFlag from "../../../public/flags/am.png";
// import ruFlag from "../../../public/flags/ru.png";
import "./styles.scss";

const languages = [
    { code: "en", label: "En", flag: enFlag },
    { code: "am", label: "Am", flag: enFlag }, //change to am flag
    { code: "ru", label: "Ru", flag: enFlag }, //change to ru flag
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0];

    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === "i18nextLng" && e.newValue && e.newValue !== i18n.language) {
                i18n.changeLanguage(e.newValue).catch(console.log);
            }
        };
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, [i18n]);

    const changeLanguage = async (langCode: string) => {
        i18n.changeLanguage(langCode)
            .then(() => localStorage.setItem("i18nextLng", langCode))
            .catch(console.log);
    };

    const menu = (
        <Menu
            onClick={({ key }) => changeLanguage(key)}
            items={languages.map((lang) => ({
                key: lang.code,
                label: (
                    <div className="lang-option">
                        <Image src={lang.flag} alt={lang.label} width={20} height={14} />
                        <span>{lang.label}</span>
                    </div>
                ),
            }))}
        />
    );

    return (
        <div className="language-switcher">
            <Dropdown overlay={menu} trigger={["click"]}>
                <div className="lang-button">
                    <Image src={currentLang.flag} alt={currentLang.label} width={26} height={18} />
                    <span>{currentLang.label}</span>
                    <DownOutlined />
                </div>
            </Dropdown>
        </div>
    );
};

export default LanguageSwitcher;
