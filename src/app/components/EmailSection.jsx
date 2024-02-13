import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    return <section className={"grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"}>
        <div>
            <h5 className={"text-xl font-bold text-white my-2"}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Let's Connect
            </h5>
            <p className={"text-[#ADB7BE] mb-4 max-w-md"}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                I'm currently looking for new opportunities, my inbox is always open,
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Whether you have a question or just want to say hi, I'll try my bext
                to get back to you!
            </p>
            <div className={"socials flex flex-row gap-20"}></div>
            <Link href={"github.com"}>
                <Image src={GithubIcon} alt={"Github Icon"}/>
            </Link>
            <Link href={"linkedin.com"}>
                <Image src={LinkedinIcon} alt={"Linkedin Icon"}/>
            </Link>
        </div>
        <div>
            <from clssName={"flex flex-col gap-4"}>
                <label htmlFor={"email"} className={"text-white"}>Your email</label>
                <input type={"email"} id={"email"} required placeholder={"jacob@google.com"}/>
            </from>
        </div>
    </section>;
};

export default EmailSection;