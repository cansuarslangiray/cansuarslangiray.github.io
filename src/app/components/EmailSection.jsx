"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const contactItems = [
  {
    icon: faEnvelope,
    label: "Email",
    value: "cansuarslangiray@gmail.com",
    href: "mailto:cansuarslangiray@gmail.com",
  },
  {
    icon: faPhone,
    label: "Phone",
    value: "+90 552 746 41 86",
    href: "tel:+905527464186",
  },
  {
    icon: faGithub,
    label: "GitHub",
    value: "github.com/cansuarslangiray",
    href: "https://github.com/cansuarslangiray",
  },
  {
    icon: faLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/cansu-arslangiray",
    href: "https://www.linkedin.com/in/cansu-arslangiray/",
  },
];

const EmailSection = () => {
  return (
    <section id="contact" className="mb-10">
      <h2 className="section-heading mb-2">Contact</h2>
      <p className="section-subtitle mb-6">
        Feel free to reach out for collaboration, or game development opportunities.
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
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#4d4d52]">{item.label}</p>
              <p className="text-sm text-[#6e6e73]">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default EmailSection;
