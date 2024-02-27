"use client";
import React, {useState} from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

const EmailSection = () => {

    return <section id="contact" className={"contact-container"}>
            <h5 className={"text-xl font-bold text-white my-2 text-center"}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Let's Connect
            </h5>
            <p className={"text-[#ADB7BE] p-2"}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                I'm currently looking for new opportunities, my inbox is always open.  {/* eslint-disable-next-line react/no-unescaped-entities */}
                Whether you have a question or just want to say hi, I'll try my best to get back to you!

            </p>
        <div className="contact-info">
            <div className="info-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon"/>
                <span className="way">Phone:</span>
                <span className="way text-[#ADB7BE]">+90 552 746 41 86</span>
            </div>
            <div className="info-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>
                <span className="way">Email:</span>
                <span className="way text-[#ADB7BE]">cansuarslangiray8@gmail.com</span>
            </div>
            <div className="info-item">
                <FontAwesomeIcon icon={faGithub} className="contact-icon"/>
                <span className="way">Github:</span>
                <a className="way text-[#ADB7BE]" href="https://github.com/cansuarslangiray"
                   target="_blank">https://github.com/cansuarslangiray</a>
            </div>

            <div className="info-item">
                <FontAwesomeIcon icon={faLinkedin} className="contact-icon"/>
                <span className="way">LinkedIn:</span>
                <a className="way text-[#ADB7BE]" href="https://www.linkedin.com/in/cansu-arslangiray/"
                   target="_blank">https://www.linkedin.com/in/cansu-arslangiray/</a>
            </div>

        </div>


    </section>;
};

export default EmailSection;