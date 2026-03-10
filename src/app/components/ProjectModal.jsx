import React, { useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

const ProjectModal = ({ project, onClose }) => {
  const toItems = (value) => (typeof value === "string" ? value.split("_").filter(Boolean) : []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <Transition.Root show as={React.Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
        <div className="flex min-h-screen items-center justify-center p-4" onClick={onClose}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/40" />
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
            <div className="modal-container relative z-10" onClick={(event) => event.stopPropagation()}>
              <div className="modal-content">
                <h2 className="project-title">
                  {project.title}
                </h2>
                {project.projectType === "company" && (
                  <div className="mt-3 rounded-2xl border border-[#ddd2f8] bg-[#f8f4ff] p-4">
                    <p className="text-sm font-semibold text-[#4f3a86]">
                      Company Project: {project.companyName ?? "Company"}
                    </p>
                    {Array.isArray(project.companyResponsibilities) && project.companyResponsibilities.length > 0 && (
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#4d4d52]">
                        {project.companyResponsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                <div className="grid-layout">
                  <div className="grid-row">
                    <div className="text-part">
                      <h3 className="headings">Description</h3>
                      <p className="text-sm leading-7 text-[#4d4d52]">{project.textOne}</p>
                    </div>
                    <div className="image-part">
                      <img src={project.imageOne} alt="Project detail" loading="lazy" decoding="async" />
                    </div>
                  </div>

                  <div className="grid-row">
                    <div className="image-part">
                      <img src={project.imageTwo} alt="Project features" loading="lazy" decoding="async" />
                    </div>
                    <div className="text-part">
                      <h3 className="headings">{project.headerOne}</h3>
                      <ul className="list-disc space-y-1 pl-5 text-sm leading-7 text-[#4d4d52]">
                        {toItems(project.textTwo).map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid-row">
                    <div className="text-part">
                      <h3 className="headings">{project.headerTwo}</h3>
                      <ul className="list-disc space-y-1 pl-5 text-sm leading-7 text-[#4d4d52]">
                        {toItems(project.textThree).map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="image-part">
                      <img src={project.imageThree} alt="Project gameplay" loading="lazy" decoding="async" />
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
