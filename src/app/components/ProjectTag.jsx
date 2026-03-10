import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const classes = isSelected
    ? "border-[#007aff] bg-[#007aff] text-white"
    : "border-[#d2d2d7] bg-white text-[#4d4d52] hover:bg-[#f5f5f7]";

  return (
    <button
      className={`${classes} rounded-full border px-4 py-2 text-sm font-semibold transition-colors`}
      onClick={() => onClick(name)}
      type="button"
    >
      {name}
    </button>
  );
};

export default ProjectTag;
