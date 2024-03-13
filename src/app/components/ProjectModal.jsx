import React, { useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

const ProjectModal = ({ project, onClose }) => {
    // Handle closing the modal when pressing the escape key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    const handleClickInsideModal = (event) => {
        // Prevent click event propagation to parent elements
        event.stopPropagation();
    };

    return (
        <Transition.Root show={true} as={React.Fragment}>
            <Dialog
                as="div"
                className="fixed z-50 inset-0 overflow-y-auto"
                onClose={onClose}
            >
                <div onClick={onClose} className="flex items-center justify-center h-screen">
                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay  className="fixed -z-10 inset-0 bg-black opacity-30" />
                    </Transition.Child>

                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="modal-container" onClick={handleClickInsideModal}>
                            <div className="modal-content">
                                <h1 className="project-title title">
                                    {project.title}
                                    {!project.hasVideo && (
                                        <a href={project.gitUrl} target="_blank">
                                            <img
                                                src="../../../public/github-icon.svg"
                                                alt="GitHub"
                                                className="noStore"
                                            />
                                        </a>
                                    )}
                                </h1>
                                <div style={{paddingTop: "20px"}} className="grid-layout">
                                    {project.hasVideo && (
                                        <div className="grid-row">
                                            <div className="text-part">
                                                <div className="plyr__video-embed" id="player">
                                                    <iframe
                                                        src={project.safeURL}
                                                        allowFullScreen
                                                        allowTransparency
                                                        allow="autoplay"
                                                    ></iframe>
                                                </div>
                                            </div>
                                            <div className="image-part">
                                                <div className="github-icons">
                                                    <a
                                                        className="github-icon left"
                                                        href={project.repoLink}
                                                        target="_blank"
                                                    >
                                                        <img
                                                            src="../../../public/github-icon.svg"
                                                            alt=""
                                                            className="icon"
                                                        />
                                                    </a>
                                                    {project.hasStore && (
                                                        <a
                                                            className="github-icon right"
                                                            href={project.storeUrl}
                                                            target="_blank"
                                                        >
                                                            <img
                                                                src="assets/gp.png"
                                                                alt=""
                                                                className="icon"
                                                            />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="grid-row">
                                        <div className="text-part">
                                            <h3 className="headings">Description</h3>
                                            <p>{project.textOne}</p>
                                        </div>
                                        <div className="image-part">
                                            <img src={project.imageOne} alt="Description Image"/>
                                        </div>
                                    </div>
                                    <div className="grid-row">
                                        <div className="image-part">
                                            <img src={project.imageTwo} alt="Features Image"/>
                                        </div>
                                        <div className="text-part">
                                            <h3 className="headings">{project.partOneTitle}</h3>
                                            <ul>
                                                {project.textTwo.split("_").map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grid-row">
                                        <div className="text-part">
                                            <h3 className="headings">{project.partTwoTitle}</h3>
                                            <ul>
                                                {project.textThree.split("_").map((step, index) => (
                                                    <li key={index}>{step}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="image-part">
                                            <img
                                                src={project.imageThree}
                                                alt="How to Play Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default ProjectModal;
