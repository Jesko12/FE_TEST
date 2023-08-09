'use client'

import { useState } from "react";
import Link from "next/link";
import { navbarData } from "./NavbarData";
import { FaUserAlt } from "react-icons/fa"
import authService from "@/services/authService";
import Image from "next/image";
import logo from "@/logo.png"

function Nav() {
    const [toggle, setToggle] = useState(false);

    const showNav = () => {
        setToggle(!toggle);
    };

    return (

        <nav className="fixed top-0 w-full bg-slate-500 items-center flex p-4">
            <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
                <Image src={logo} alt="logo" width={150} height={50} />
                <button
                    className="flex justify-end md:hidden rounded"
                    onClick={showNav}
                >
                    <FaUserAlt></FaUserAlt>
                </button>

                <ul
                    className={`${toggle ? " flex" : " hidden"
                        } flex-col left-6 w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
                >
                    {navbarData.map((link, index) => {
                        return (
                            <li key={index} className={link.cname}>
                                <Link
                                    className="hover:text-sky-500"
                                    href={link.href}
                                    onClick={showNav}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <button
                    className={`${toggle ? " flex" : " hidden"
                        } text-indigo-800 hover:bg-gray-300 mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium bg-gray-100 px-1 p-2 rounded-lg mt-4 w-24`}
                    onClick={authService.logout}
                >
                    Logout
                </button>
            </div>
        </nav>

    )

}

export default Nav;