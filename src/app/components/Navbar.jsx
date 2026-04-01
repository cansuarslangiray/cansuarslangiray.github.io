"use client";

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinksByLanguage = {
  en: [
    { title: "About", path: "#about" },
    { title: "Projects", path: "#showcase", view: "projects" },
    { title: "Certificates", path: "#showcase", view: "certificates" },
    { title: "Contact", path: "#contact" },
  ],
  tr: [
    { title: "Hakkımda", path: "#about" },
    { title: "Projeler", path: "#showcase", view: "projects" },
    { title: "Sertifikalar", path: "#showcase", view: "certificates" },
    { title: "İletişim", path: "#contact" },
  ],
};

const Navbar = ({ language = "en", onLanguageChange }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navLinks = navLinksByLanguage[language] ?? navLinksByLanguage.en;
  const menuLabel = language === "tr" ? "menüyü aç/kapat" : "toggle menu";
  const toggleLanguage = () => onLanguageChange?.(language === "en" ? "tr" : "en");

  const handleNavClick = (view) => {
    if (view && typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("showcase-tab-change", { detail: view }));
    }
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 border-b border-[#d2d2d7] bg-white/95">
      <div className="container mx-auto flex items-center justify-between px-5 py-4 md:px-10">
        <a href="#about" className="text-xl font-bold text-[#1d1d1f] md:text-2xl">
          Cansu Arslangiray
        </a>

        <button
          className="rounded-lg border border-[#d2d2d7] p-2 text-[#1d1d1f] md:hidden"
          onClick={() => setNavbarOpen((prev) => !prev)}
          aria-label={menuLabel}
        >
          {navbarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            className="hidden inline-flex rounded-xl border border-[#d8c9fb] bg-[#f4efff] px-3 py-1.5 text-xs font-semibold text-[#6A5BC9] transition-colors hover:bg-[#ede4ff]"
            onClick={toggleLanguage}
            aria-label={language === "en" ? "Switch language to Turkish" : "Dili İngilizceye çevir"}
          >
            {language.toUpperCase()}
          </button>

          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={`${link.title}-${link.path}`}>
                <a
                  className="text-[0.95rem] font-semibold text-[#4d4d52] hover:text-[#007aff]"
                  href={link.path}
                  onClick={() => handleNavClick(link.view)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen && (
        <ul className="space-y-1 border-t border-[#e5e7eb] bg-white px-5 py-4 md:hidden">
          <li className="mb-2">
            <button
              type="button"
              className="hidden inline-flex rounded-xl border border-[#d8c9fb] bg-[#f4efff] px-3 py-1.5 text-xs font-semibold text-[#6A5BC9] transition-colors hover:bg-[#ede4ff]"
              onClick={toggleLanguage}
              aria-label={language === "en" ? "Switch language to Turkish" : "Dili İngilizceye çevir"}
            >
              {language.toUpperCase()}
            </button>
          </li>
          {navLinks.map((link) => (
            <li key={`${link.title}-${link.path}`}>
              <a
                className="block rounded-md px-3 py-2 text-[0.95rem] font-semibold text-[#4d4d52] hover:bg-[#f5f5f7]"
                href={link.path}
                onClick={() => handleNavClick(link.view)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
