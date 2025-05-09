import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
    return (
        <Fragment>
            <footer className="footer bg-c1 text-white 2xl:pt-[100px] xl:pt-[80px] lg:pt-[60px] pt-[50px]">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 2xl:px-[50px]">
                    <div className="grid grid-cols-12 gap-y-[30px] lg:gap-y-0">
                        <div className="col-span-12 md:col-span-6 lg:col-span-5">
                            <div className="footer-logo-main pe-[50px] xl:pe-[150px]">
                                <Link className="block w-[100px] 2xl:w-[120px]">
                                    <img
                                        src="/FrontendImages/logo.png"
                                        alt="Logo"
                                    />
                                </Link>
                                <p className="md:text-[18px] mt-[20px]">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Nullam molestie a eu sapien sapien egestas.
                                    Ultrices faucibus sit convallis gravida. Et
                                    gravida risus volutpat.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3">
                            <div className="footer-item">
                                <span className="inline-block mb-[20px] font-medium text-[20px] xl:text-[24px]">
                                    Quick Links
                                </span>
                                <ul>
                                    <li className="overflow-hidden mb-[8px]">
                                        <Link href={route('home')} className="text-white xl:text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="overflow-hidden mb-[8px]">
                                        <Link href={route('about-us.index')} className="text-white xl:text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="overflow-hidden mb-[8px]">
                                        <Link href={route('services.front')} className="text-white xl:text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                                            Services
                                        </Link>
                                    </li>
                                    <li className="overflow-hidden mb-[8px]">
                                        <Link href={route('testimonials.front')} className="text-white xl:text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                                            Testimonial
                                        </Link>
                                    </li>
                                    <li className="overflow-hidden mb-[8px]">
                                        <Link href={route('contact-us.index')} className="text-white xl:text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li className="overflow-hidden mb-[8px]">
                                        <Link href={route('galleries.front')} className="text-white xl:text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                                            Gallery
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="footer-item">
                                <ul className="flex items-center gap-[20px] 2xl:gap-[30px]">
                                    <li>
                                        <Link className="text-[25px] 2xl:text-[40px] transition-all duration-500 hover:text-black">
                                            <FaFacebookF />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-[25px] 2xl:text-[40px] transition-all duration-500 hover:text-black">
                                            <FaInstagram />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-[25px] 2xl:text-[40px] transition-all duration-500 hover:text-black">
                                            <FaWhatsapp />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-[25px] 2xl:text-[40px] transition-all duration-500 hover:text-black">
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
                                        className="w-full h-[55px] 2xl:h-[70px] text-[15px] text-black border-none bg-custbg !outline-none !ring-0 px-[20px] rounded"
                                    />
                                    <button
                                        type="submit"
                                        className="text-[14px] xl:text-[16px] absolute top-[50%] font-medium translate-y-[-50%] right-[10px] bg-c1 flex items-center justify-center text-white py-[10px] px-[20px] rounded transition-all duration-500 hover:bg-black"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="copyrights border-t border-white py-[10px] xl:py-[20px] text-center mt-[30px]">
                                <p className="md:text-[18px]">Copyright 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}
