"use client";

import React from "react";
import certificateData from "@/certificates.json";

const AchievementsSection = () => {
  const certificates = certificateData.slice(0, 9);

  return (
    <section id="certificates" className="mb-14">
      <h2 className="section-heading mb-2">Certificates</h2>
      <p className="section-subtitle mb-6">Professional and academic certificates from recent programs and trainings.</p>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {certificates.map((certificate) => (
          <a
            key={certificate.name}
            className="overflow-hidden rounded-2xl border border-[#d2d2d7] bg-white shadow-[0_6px_20px_rgba(15,23,42,0.08)] transition-transform duration-200 hover:-translate-y-1"
            href={certificate.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="h-[165px] overflow-hidden border-b border-[#e5e7eb] bg-[#f8fafc] sm:h-[190px]">
              <img src={certificate.imagePath} alt={certificate.name} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="line-clamp-2 text-sm font-semibold leading-6 text-[#1d1d1f]">{certificate.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
