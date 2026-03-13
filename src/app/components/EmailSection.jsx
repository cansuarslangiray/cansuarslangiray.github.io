"use client";

import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

const contactItems = [
  {
    icon: "email",
    label: "Email",
    value: "cansuarslangiray@gmail.com",
    href: "mailto:cansuarslangiray@gmail.com",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "+90 552 746 41 86",
    href: "tel:+905527464186",
  },
  {
    icon: "github",
    label: "GitHub",
    value: "github.com/cansuarslangiray",
    href: "https://github.com/cansuarslangiray",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/cansu-arslangiray",
    href: "https://www.linkedin.com/in/cansu-arslangiray/",
  },
];

const contentByLanguage = {
  en: {
    heading: "Contact",
    subtitle: "Feel free to reach out for collaboration, or game development opportunities.",
    labels: {
      email: "Email",
      phone: "Phone",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
  tr: {
    heading: "İletişim",
    subtitle: "İş birliği veya oyun geliştirme fırsatları için dilediğiniz zaman ulaşabilirsiniz.",
    labels: {
      email: "E-posta",
      phone: "Telefon",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
};

const GithubIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M12 2a10 10 0 0 0-3.162 19.488c.5.093.682-.216.682-.48 0-.236-.009-.863-.013-1.694-2.776.603-3.362-1.34-3.362-1.34-.454-1.152-1.11-1.46-1.11-1.46-.908-.62.069-.607.069-.607 1.004.07 1.531 1.03 1.531 1.03.893 1.53 2.342 1.088 2.912.832.09-.646.35-1.088.636-1.338-2.217-.252-4.549-1.108-4.549-4.934 0-1.09.39-1.981 1.029-2.678-.103-.253-.446-1.268.098-2.644 0 0 .84-.269 2.75 1.023A9.59 9.59 0 0 1 12 6.844a9.61 9.61 0 0 1 2.504.337c1.909-1.292 2.748-1.023 2.748-1.023.545 1.376.202 2.391.1 2.644.64.697 1.027 1.588 1.027 2.678 0 3.835-2.336 4.68-4.56 4.928.359.31.678.922.678 1.858 0 1.341-.012 2.422-.012 2.751 0 .267.18.578.688.48A10.001 10.001 0 0 0 12 2Z" />
  </svg>
);

const LinkedinIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="M6.94 8.5a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88Zm-1.23 1.1h2.46v8.05H5.7V9.6Zm4.1 0h2.36v1.1h.03c.33-.62 1.14-1.28 2.34-1.28 2.5 0 2.96 1.65 2.96 3.8v4.43h-2.45v-3.93c0-.94-.02-2.14-1.3-2.14-1.3 0-1.5 1.02-1.5 2.08v3.99H9.8V9.6Z" />
    <path d="M4 4h16v16H4z" fill="none" />
  </svg>
);

const EmailSection = ({ language = "en" }) => {
  const content = contentByLanguage[language] ?? contentByLanguage.en;

  return (
    <section id="contact" className="mb-10">
      <h2 className="section-heading mb-2">{content.heading}</h2>
      <p className="section-subtitle mb-6">
        {content.subtitle}
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="glass-card flex items-center gap-4 p-5 transition-colors hover:bg-[#fafafa]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef5ff] text-[#007aff]">
              {item.icon === "email" && <EnvelopeIcon className="h-5 w-5" />}
              {item.icon === "phone" && <PhoneIcon className="h-5 w-5" />}
              {item.icon === "github" && <GithubIcon />}
              {item.icon === "linkedin" && <LinkedinIcon />}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#4d4d52]">{content.labels[item.icon]}</p>
              <p className="text-sm text-[#6e6e73]">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default EmailSection;
