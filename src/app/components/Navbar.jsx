"use client"
import React, {useState} from "react";
import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Project",
        path: "#project",
    },
    {
        title: "Contact",
        path: "#Contact",
    }
]

const Navbar = () => {
    const [,] = useState(false);
    let navbarOpen;
    return (
        <nav className={"fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90"}>
            <div className={"flex flex-wrap items-center justify-between mx-auto px-4 py-2"}>
                <Link href={"/"} className={"text-2xl md:text-5xl text-white font-semibold"}>
                    LOGO
                </Link>
                <div className={"mobile-menu block md:hidden"}>
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)}
                                    className={"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"}>
                                <Bars3Icon className={"h-5 w-5"}/>
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)}
                                    className={"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"}>
                                <XMarkIcon className={"h-5 w-5"}/>
                            </button>
                        )


                    }
                </div>
                <div className={"menu hidden md:block md:w-auto"} id="navbar">
                    <ul className={"flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0"}>
                        {
                            navLinks.map((links, index) => (
                                <li key={index}>
                                    <NavLink href={links.path} title={links.title}/>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;