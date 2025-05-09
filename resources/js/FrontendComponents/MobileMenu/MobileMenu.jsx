import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

export default function MobileMenu({openMenu, setOpenMenu}) {
    return (
        <Fragment>
            <nav className={` ${openMenu === true ? "left-0" : "-left-full"} transition-all duration-500 ease-in fixed w-full h-full top-0  bg-white z-50`}>
                <div className="px-5 sm:px-8 pt-5 flex justify-between items-center">
                    <div className="logo">
                        <Link
                            href={route("home")}
                            className="block w-[60px] sm:w-[80px] lg:w-[100px]"
                        >
                            <img
                                src="/FrontendImages/logo.png"
                                alt="Logo"
                                className="w-full"
                            />
                        </Link>
                    </div>
                    <div className="menu">
                        <button onClick={() => setOpenMenu(false)} className="border-c1 border w-8 h-8 rounded-full flex items-center justify-center text-c1 hover:bg-c1 hover:text-white transition-all duration-300 ease-in">
                            <IoCloseSharp />
                        </button>
                    </div>
                </div>
                <div className="menu px-5 sm:px-8">
                    <div className="nav-bar">
                        <ul className="flex flex-col gap-y-5 mt-14">
                            <li className="overflow-hidden border-b relative before:absolute before:bottom-0 before:-left-full before:w-full hover:before:left-0 before:transition-all before:duration-300 before:ease-in hover:text-c1 before:h-[1px] before:bg-c1 pb-2">
                                <Link
                                    href={route("home")}
                                    className="text-[#4d5267] xl:text-[18px] transition-all duration-500 hover:text-c1"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="overflow-hidden border-b relative before:absolute before:bottom-0 before:-left-full before:w-full hover:before:left-0 before:transition-all before:duration-300 before:ease-in hover:text-c1 before:h-[1px] before:bg-c1 pb-2">
                                <Link
                                    href={route("about-us.index")}
                                    className="text-[#4d5267] xl:text-[18px] transition-all duration-500 hover:text-c1"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="overflow-hidden border-b relative before:absolute before:bottom-0 before:-left-full before:w-full hover:before:left-0 before:transition-all before:duration-300 before:ease-in hover:text-c1 before:h-[1px] before:bg-c1 pb-2">
                                <Link
                                    href={route("services.front")}
                                    className="text-[#4d5267] xl:text-[18px] transition-all duration-500 hover:text-c1"
                                >
                                    Services
                                </Link>
                            </li>
                            <li className="overflow-hidden border-b relative before:absolute before:bottom-0 before:-left-full before:w-full hover:before:left-0 before:transition-all before:duration-300 before:ease-in hover:text-c1 before:h-[1px] before:bg-c1 pb-2">
                                <Link
                                    href={route("testimonials.front")}
                                    className="text-[#4d5267] xl:text-[18px] transition-all duration-500 hover:text-c1"
                                >
                                    Testimonials
                                </Link>
                            </li>
                            <li className="overflow-hidden border-b relative before:absolute before:bottom-0 before:-left-full before:w-full hover:before:left-0 before:transition-all before:duration-300 before:ease-in hover:text-c1 before:h-[1px] before:bg-c1 pb-2">
                                <Link
                                    href={route("contact-us.index")}
                                    className="text-[#4d5267] xl:text-[18px] transition-all duration-500 hover:text-c1"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li className="overflow-hidden border-b relative before:absolute before:bottom-0 before:-left-full before:w-full hover:before:left-0 before:transition-all before:duration-300 before:ease-in hover:text-c1 before:h-[1px] before:bg-c1 pb-2">
                                <Link
                                    href={route("galleries.front")}
                                    className="text-[#4d5267] xl:text-[18px] transition-all duration-500 hover:text-c1"
                                >
                                    Gallery
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer fixed bottom-0 w-full">
                    <ul className="flex bg-c1 justify-center py-3 text-white items-center gap-[30px]">
                        <li>
                            <Link className="text-[24px] transition-all duration-500 hover:text-black">
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link className="text-[24px] transition-all duration-500 hover:text-black">
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link className="text-[24px] transition-all duration-500 hover:text-black">
                                <FaWhatsapp />
                            </Link>
                        </li>
                        <li>
                            <Link className="text-[24px] transition-all duration-500 hover:text-black">
                                <FaLinkedinIn />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}
