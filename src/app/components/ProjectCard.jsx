import React from "react";

const ProjectCard = ({imgUrl, title, description, click}) => {
    return (
        <div onClick={click} style={{
            cursor: "pointer",
            borderRadius: "16px"
        }}>
            <div style={{
                height: "250px", display: "flex", justifyContent: "center"
            }}>
            <img style={{borderTopLeftRadius: "16px", borderTopRightRadius: "16px" ,minWidth: "100%", height: "auto"}} src={imgUrl} alt="Hello"></img>
            </div>
            <div style={{
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px"
            }} className={"text-black bg-[#f1f5f9] py-6 px-4"}>
                <h5 className={"text-xl font-semibold mb-2"}>{title}</h5>
                <p className={"text-gray-600"}>{description}</p>
            </div>
        </div>

    )
}
export default ProjectCard