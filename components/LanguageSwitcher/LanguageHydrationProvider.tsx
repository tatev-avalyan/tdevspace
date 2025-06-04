"use client";

import { useEffect, useState, ReactNode } from "react";
import i18n from "@/i18n/i18n";

export default function LanguageHydrationProvider({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedLanguage = localStorage.getItem("i18nextLng") || "en";
        i18n.changeLanguage(savedLanguage).finally(() => {
            setMounted(true);
        });
    }, []);

    if (!mounted) return null;

    return <>{children}</>;
}
