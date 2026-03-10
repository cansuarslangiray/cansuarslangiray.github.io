import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam, faAppStoreIos, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";

const platformIconMap = {
  steam: faSteam,
  appstore: faAppStoreIos,
  googleplay: faGooglePlay,
  gamestore: faStore,
};

const chipClass = (tag) => {
  const key = tag.toLowerCase();
  if (key.includes("unity")) return "bg-[#7265df] text-white";
  if (key.includes("c#")) return "bg-[#9f6bde] text-white";
  if (key.includes("mobile")) return "bg-[#2f86ff] text-white";
  if (key.includes("firebase")) return "bg-[#f7bf12] text-[#4a3a00]";
  return "bg-[#ece6ff] text-[#4f3a86]";
};

const ProjectCard = ({ imgUrl, title, description, techTags = [], platforms = [], platformLinks = {}, click }) => {
  return (
    <button
      onClick={click}
      type="button"
      className="group w-full overflow-hidden rounded-3xl border border-[#e4dcf6] bg-white/95 text-left shadow-[0_10px_26px_rgba(72,85,125,0.09)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(72,85,125,0.14)]"
    >
      <div className="relative h-[190px] w-full overflow-hidden border-b border-[#eee7fb] bg-[#f8fafc] sm:h-[210px]">
        <Image
          src={imgUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {techTags.map((tag) => (
              <span key={tag} className={`rounded-lg px-3 py-1 text-xs font-semibold ${chipClass(tag)}`}>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xl text-[#5e4f85]">
            {platforms.map((platform) => {
              const key = platform.toLowerCase();
              const icon = platformIconMap[key];
              if (!icon) return null;
              const href = platformLinks[key];
              if (href) {
                return (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-transform duration-200 hover:scale-110"
                    onClick={(event) => event.stopPropagation()}
                    aria-label={platform}
                  >
                    <FontAwesomeIcon icon={icon} title={platform} />
                  </a>
                );
              }
              return <FontAwesomeIcon key={platform} icon={icon} title={platform} />;
            })}
          </div>
        </div>
        <h3 className="text-lg font-bold text-[#2a2340]">{title}</h3>
        <p className="line-clamp-2 text-sm leading-6 text-[#6e6e73]">{description}</p>
        <p className="inline-flex rounded-full border border-[#d8c9fb] bg-[#f3ecff] px-3 py-1 text-xs font-semibold tracking-wide text-[#5e4f85]">
          More info
        </p>
      </div>
    </button>
  );
};

export default React.memo(ProjectCard);
