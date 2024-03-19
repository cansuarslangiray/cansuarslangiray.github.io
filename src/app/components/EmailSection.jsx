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
            <h4 className={"text-xl font-bold text-black text-center"}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Let's Connect
            </h4>
            <p style={{
                textAlign: "center"
            }} className={"text-gray-600 py-5"}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                I'm currently looking for new opportunities, my inbox is always open.  {/* eslint-disable-next-line react/no-unescaped-entities */}
                Whether you have a question or just want to say hi, I'll try my best to get back to you!

            </p>
        <div className="contact-info py-3">
            <div className="info-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon"/>
                <span className="way">Phone:</span>
                <span className="way text-gray-600">+90 552 746 41 86</span>
            </div>
            <div className="info-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>
                <span className="way">Email:</span>
                <span className="way text-gray-600">cansuarslangiray8@gmail.com</span>
            </div>
            <div className="info-item">
                <FontAwesomeIcon icon={faGithub} className="contact-icon"/>
                <span className="way">Github:</span>
                <a className="way text-gray-600" href="https://github.com/cansuarslangiray"
                   target="_blank">https://github.com/cansuarslangiray</a>
            </div>

            <div className="info-item">
                <FontAwesomeIcon icon={faLinkedin} className="contact-icon"/>
                <span className="way">LinkedIn:</span>
                <a className="way text-gray-600" href="https://www.linkedin.com/in/cansu-arslangiray/"
                   target="_blank">https://www.linkedin.com/in/cansu-arslangiray/</a>
            </div>

        </div>


    </section>;
};

export default EmailSection;