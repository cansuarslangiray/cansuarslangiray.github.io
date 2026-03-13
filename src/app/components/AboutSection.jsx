"use client";

import React from "react";

const contentByLanguage = {
    en: {
        ariaLabel: "About",
        heading: "About Me",
        body: "I'm a Computer Engineering graduate and a game developer who loves taking projects from a simple concept to a finished, playable loop. Whether it's designing systems or cleaning up architecture, I'm always focused on how to make the game feel better for the player. I thrive on iterative work, taking feedback and turning it into a smoother experience. I really enjoy the challenge of building things that are both technically solid and genuinely fun to play.",
    },
    tr: {
        ariaLabel: "Hakkımda",
        heading: "Hakkımda",
        body: "Bilgisayar Mühendisliği mezunuyum ve bir fikri basit bir konseptten oynanabilir, tamamlanmış bir deneyime dönüştürmeyi çok seven bir oyun geliştiricisiyim. Sistem tasarımı ya da mimariyi sadeleştirme fark etmeksizin odağım her zaman oyuncu deneyimini iyileştirmek. İteratif çalışmayı seviyorum; geri bildirimi alıp daha akıcı bir deneyime çevirme süreci beni motive ediyor. Teknik olarak sağlam ve gerçekten keyifli oynanan ürünler ortaya çıkarmak benim en sevdiğim kısım.",
    },
};

const AboutSection = ({ language = "en" }) => {
    const content = contentByLanguage[language] ?? contentByLanguage.en;

    return (
        <section id="about" className="mb-8 scroll-mt-24" aria-label={content.ariaLabel}>
            <div className="mb-3">
                <h2 className="section-heading">{content.heading}</h2>
            </div>

            <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-4">
                <div className="glass-card w-full flex-none overflow-hidden md:w-[200px]">
                    <img
                        src="/image/unity.jpg"
                        alt="Unity"
                        className="h-[165px] w-full object-cover md:h-[190px]"
                        onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = "/image/me.jpg";
                        }}
                    />
                </div>

                <div className="glass-card w-full p-4 md:flex-1">
                    <p className="section-subtitle mx-auto text-center text-[0.96rem] leading-7 md:text-left">
                        {content.body}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
