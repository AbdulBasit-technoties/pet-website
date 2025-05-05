import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
    return (
        <Fragment>
            <footer className="footer bg-c1 text-white 2xl:pt-[100px] pt-[80px]">
                <div className="container mx-auto 2xl:px-[50px] px-[40px]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-5">
                            <div className="footer-logo-main pe-[150px]">
                                <Link className="block w-[200px] 2xl:w-[240px]">
                                    <img
                                        src="/FrontendImages/white-logo.png"
                                        alt="Logo"
                                    />
                                </Link>
                                <p className="text-[18px] mt-[30px]">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Nullam molestie a eu sapien sapien egestas.
                                    Ultrices faucibus sit convallis gravida. Et
                                    gravida risus volutpat integer odio nibh
                                    tellus. Ut consectetur auctor nunc aliquam
                                    a. Purus eget eu est amet.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="footer-item">
                                <span className="inline-block mb-[20px] font-medium text-[24px]">
                                    Quick Links
                                </span>
                                <ul>
                                    <li className="overflow-hidden mb-[8px]">
                                        <Link className="text-white text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                                            Services
                                        </Link>
                                    </li>
                                    <li className="overflow-hidden mb-[8px]">
                                        <Link className="text-white text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li className="overflow-hidden mb-[8px]">
                                        <Link className="text-white text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="overflow-hidden mb-[8px]">
                                        <Link className="text-white text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="overflow-hidden mb-[8px]">
                                        <Link className="text-white text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="footer-item">
                                <ul className="flex items-center gap-[30px]">
                                    <li>
                                        <Link className="text-[40px] transition-all duration-500 hover:text-black">
                                            <FaFacebookF />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-[40px] transition-all duration-500 hover:text-black">
                                            <FaInstagram />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-[40px] transition-all duration-500 hover:text-black">
                                            <FaWhatsapp />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-[40px] transition-all duration-500 hover:text-black">
                                            <FaLinkedinIn />
                                        </Link>
                                    </li>
                                </ul>
                                <p className="text-[22px] mt-[15px] mb-[30px]">
                                    Subscribe to our Newsletter
                                </p>
                                <form action="#" className="relative">
                                    <input
                                        type="text"
                                        placeholder="E.mail"
                                        className="w-full h-[70px] text-[20px] text-black border-none bg-custbg !outline-none !ring-0 px-[20px] rounded"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute top-[50%] font-medium translate-y-[-50%] right-[10px] bg-c1 flex items-center justify-center text-white py-[10px] px-[20px] rounded transition-all duration-500 hover:bg-black"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="copyrights border-t border-white py-[20px] text-center mt-[30px]">
                                <p className="text-[18px]">Copyright 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}
