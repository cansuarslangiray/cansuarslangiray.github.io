import React from "react";
import {motion} from "framer-motion";

const variants = {
    default: {width: 0},
    active: {width: "calc(100% - 0.75rem"},
};
const TabButton = ({active, selectTab, children}) => {
    const buttonClass = active ? 'text-gray-600 ' : 'text-[#ADB7BE] '

    return (
        <button onClick={selectTab} style={{
            textAlign: "center",
                    display: "flex",
                    flexDirection: "column  ",
                    justifySelf: "center"
        }}>
            <p style={{
                width: "9vw",
                textAlign: "center",
                margin: "0"
            }}
                className={`mr-3 transition-color duration-200 font-semibold hover:text-[#FFC8DD] ${buttonClass}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className={"h-1 bg-[#C8B6FF]"}
                style={{
                    borderRadius: "2px",
                    alignSelf: "center"
                }}
            ></motion.div>
        </button>
    )
}
export default TabButton