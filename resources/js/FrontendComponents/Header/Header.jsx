import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import OutLineButton from "../Button/OutLineButton";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import Navbar from "../Navbar/Navbar";

export default function Header() {
    return (
        <Fragment>
            <header className="header">
                <div className="top-header py-[20px]">
                    <div className="container mx-auto 2xl:px-[50px] xl:px-[40px]">
                        <div className="grid grid-cols-12 items-center">
                            <div className="col-span-3">
                                <div className="logo">
                                    <Link className="block w-[200px] 2xl:w-[240px]">
                                        <img
                                            src="/FrontendImages/logo.webp"
                                            alt="Logo"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-6">
                                <form
                                    action="#"
                                    className="relative rounded-[50px] overflow-hidden w-[50%] mx-auto"
                                >
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full h-[50px] rounded-[50px] border !border-transparent bg-custbg !outline-none !ring-0 px-[20px] focus:!border-c1 transition-all duration-500"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute top-[50%] translate-y-[-50%] right-[10px] w-[40px] h-[40px] rounded-[50%] bg-c1 flex items-center justify-center text-white text-[24px] transition-all duration-500 hover:bg-black"
                                    >
                                        <MdSearch />
                                    </button>
                                </form>
                            </div>
                            <div className="col-span-3">
                                <div className="head-btns flex justify-end items-center gap-[10px]">
                                    <ul className="flex items-center gap-[10px]">
                                        <li>
                                            <a
                                                href="tel:"
                                                className="w-[46px] h-[46px] bg-custbg flex items-center justify-center rounded text-[rgba(77, 82, 103, 1)] text-[24px] transition-all duration-500 hover:bg-c1 hover:text-white"
                                            >
                                                <IoCallOutline />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="mailto:"
                                                className="w-[46px] h-[46px] bg-custbg flex items-center justify-center rounded text-[rgba(77, 82, 103, 1)] text-[24px] transition-all duration-500 hover:bg-c1 hover:text-white"
                                            >
                                                <MdOutlineEmail />
                                            </a>
                                        </li>
                                    </ul>
                                    <OutLineButton
                                        title="Get A Quote"
                                        link="/"
                                        css="green"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-header bg-custbg py-[15px]">
                    <div className="container mx-auto 2xl:px-[50px] xl:px-[40px]">
                        <div className="grid grid-cols-1 items-center">
                            <Navbar />
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}
