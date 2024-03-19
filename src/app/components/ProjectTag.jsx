import React from "react";

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected
        ? " border-gray-400 bg-gradient-to-br from-[#FFD6FF] via-[#C8B6FF] to to-[#BBD0FF] text-black"
        : " border-gray-200 text-black";
    return (
        <button
            className={`${buttonStyles} transition-colors duration-400 px-1 py-1 w-full sm:w-fit rounded-full hover:bg-gradient-to-br from-[#FFD6FF] via-[#C8B6FF] to to-[#BBD0FF]  rounded-full border-2   px-6 py-3 text-xl cursor-pointer `}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    );
};

export default ProjectTag;