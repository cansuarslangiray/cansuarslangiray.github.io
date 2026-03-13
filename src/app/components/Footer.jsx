import React from "react";

const rightsLabelByLanguage = {
  en: "All rights reserved.",
  tr: "Tüm hakları saklıdır.",
};

const Footer = ({ language = "en" }) => {
  const rightsLabel = rightsLabelByLanguage[language] ?? rightsLabelByLanguage.en;

  return (
    <footer className="border-t border-[#d2d2d7] bg-white py-6">
      <div className="container mx-auto px-5 text-sm text-[#6e6e73] md:px-10">
        © {new Date().getFullYear()} Cansu Arslangiray. {rightsLabel}
      </div>
    </footer>
  );
};

export default Footer;
