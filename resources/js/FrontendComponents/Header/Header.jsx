import { Link } from "@inertiajs/react";
import React, { Fragment, useState } from "react";
import OutLineButton from "../Button/OutLineButton";
import { IoCallOutline, IoMenuSharp } from "react-icons/io5";
import { MdMenuOpen, MdOutlineEmail } from "react-icons/md";
import Navbar from "../Navbar/Navbar";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <Fragment>
            <header className="header">
                <div className="top-header py-3">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 2xl:px-[50px]">
                        <div className="grid grid-cols-2 items-center justify-between gap-y-4">
                            {/* Logo Section */}
                            <div className="flex">
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
                            </div>

                            {/* Buttons Section */}
                            <div className="flex justify-end items-center gap-4">
                                <ul className="flex justify-center sm:justify-end items-center gap-3 order-2">
                                    <li>
                                        <a
                                            href="tel:07791043791"
                                            className="w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] bg-custbg flex items-center justify-center rounded text-[rgba(77, 82, 103, 1)] text-[20px] sm:text-[24px] transition-all duration-500 hover:bg-c1 hover:text-white"
                                        >
                                            <IoCallOutline />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="mailto:Abbeyfarmbusiness@outlook.com"
                                            className="w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] bg-custbg flex items-center justify-center rounded text-[rgba(77, 82, 103, 1)] text-[20px] sm:text-[24px] transition-all duration-500 hover:bg-c1 hover:text-white"
                                        >
                                            <MdOutlineEmail />
                                        </a>
                                    </li>
                                    <li className="lg:hidden block">
                                        <span
                                            onClick={() => setOpenMenu(true)}
                                            className="w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] bg-custbg flex items-center justify-center rounded text-[rgba(77, 82, 103, 1)] text-[20px] sm:text-[24px] transition-all duration-500 hover:bg-c1 hover:text-white"
                                        >
                                            <IoMenuSharp />
                                        </span>
                                    </li>
                                </ul>

                                <div className="justify-center sm:justify-end order-1 hidden sm:block">
                                    <OutLineButton
                                        title="Book Now"
                                        link={route("bookings.index")}
                                        css="fill"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-header bg-custbg py-[15px] lg:block hidden">
                    <div className="container mx-auto 2xl:px-[50px] xl:px-[40px]">
                        <div className="grid grid-cols-1 items-center">
                            <Navbar />
                        </div>
                    </div>
                </div>
            </header>
            <div>
                <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </div>
        </Fragment>
    );
}
