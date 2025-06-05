"use client";

import { useTranslation } from "react-i18next";
import { Dropdown, Menu } from "antd";
import Image from "next/image";
import enFlag from "@/public/flags/en.png";
import amFlag from "@/public/flags/am.png";
import ruFlag from "@/public/flags/ru.png";

const langs = {
  en: { label: "EN", flag: enFlag },
  am: { label: "AM", flag: amFlag },
  ru: { label: "RU", flag: ruFlag },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = langs[i18n.language as keyof typeof langs] || langs.en;

  const handleChange = (key: string) => {
    i18n.changeLanguage(key).then(() => localStorage.setItem("i18nextLng", key));
  };

  const menu = (
    <Menu
      items={Object.entries(langs).map(([code, lang]) => ({
        key: code,
        label: (
          <div className="flex items-center gap-2">
            <Image src={lang.flag} alt={lang.label} width={20} height={14} />
            {lang.label}
          </div>
        ),
      }))}
      onClick={({ key }) => handleChange(key)}
    />
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <div className="flex items-center gap-2 cursor-pointer text-sm px-2 py-1 rounded border border-gray-300 dark:border-gray-600 min-h-[28px]">
        <Image src={current.flag} alt={current.label} width={22} height={16} />
        {/* <span>{current.label}</span> */}
      </div>
    </Dropdown>
  );
};

export default LanguageSwitcher;
