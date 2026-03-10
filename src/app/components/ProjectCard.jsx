import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStoreIos, faGooglePlay, faSteam } from "@fortawesome/free-brands-svg-icons";

const platformIconMap = {
  steam: faSteam,
  appstore: faAppStoreIos,
  googleplay: faGooglePlay,
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
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      click();
    }
  };

  return (
    <div
      onClick={click}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="w-full overflow-hidden rounded-3xl border border-[#e4dcf6] bg-white/95 text-left shadow-[0_6px_16px_rgba(72,85,125,0.08)] transition-shadow duration-200 hover:shadow-[0_10px_22px_rgba(72,85,125,0.12)]"
    >
      <div className="h-[190px] w-full overflow-hidden border-b border-[#eee7fb] bg-[#f8fafc] sm:h-[210px]">
        <img
          src={imgUrl}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {techTags.map((tag) => (
              <span key={tag} className={`rounded-lg px-3 py-1 text-xs font-semibold ${chipClass(tag)}`}>
                {tag}
              </span>
            ))}
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-2.5">
            {platforms.map((platform) => {
              const key = platform.toLowerCase();
              const iconDef = platformIconMap[key];
              if (!iconDef) return null;
              const href = platformLinks[key];
              if (href) {
                return (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-lg border border-[#d8c9fb] bg-[#f4efff] p-1.5"
                    onClick={(event) => event.stopPropagation()}
                    aria-label={platform}
                  >
                    <FontAwesomeIcon icon={iconDef} className="h-6 w-6 text-[#6A5BC9]" />
                  </a>
                );
              }
              return (
                <span
                  key={platform}
                  className="inline-flex rounded-lg border border-[#d8c9fb] bg-[#f4efff] p-1.5"
                >
                  <FontAwesomeIcon icon={iconDef} className="h-6 w-6 text-[#6A5BC9]" />
                </span>
              );
            })}
          </div>
        </div>
        <h3 className="text-lg font-bold text-[#2a2340]">{title}</h3>
        <p className="line-clamp-2 text-sm leading-6 text-[#6e6e73]">{description}</p>
        <p className="inline-flex rounded-full border border-[#d8c9fb] bg-[#f3ecff] px-3 py-1 text-xs font-semibold tracking-wide text-[#5e4f85]">
          More info
        </p>
      </div>
    </div>
  );
};

export default React.memo(ProjectCard);
