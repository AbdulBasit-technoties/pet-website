import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";

export default function Navbar() {
    return (
        <Fragment>
            <div className="nav-bar">
                <ul className="flex items-center justify-center gap-[45px]">
                    <li className="overflow-hidden">
                        <Link href={route('home')} className="text-[#4d5267] text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                            Home
                        </Link>
                    </li>
                    <li className="overflow-hidden">
                        <Link href={route('about-us.index')} className="text-[#4d5267] text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                            About Us
                        </Link>
                    </li>
                    <li className="overflow-hidden">
                        <Link href={route('services.index')} className="text-[#4d5267] text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                            Services
                        </Link>
                    </li>
                    <li className="overflow-hidden">
                        <Link href={route('testimonials.index')} className="text-[#4d5267] text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                            Testimonials
                        </Link>
                    </li>
                    <li className="overflow-hidden">
                        <Link href={route('contact-us.index')} className="text-[#4d5267] text-[18px] transition-all duration-500 hover:text-black relative before:absolute before:bottom-0 before:left-[-100%] before:w-full before:h-[2px] before:bg-black before:transition-all before:duration-500 overflow-hidden hover:before:left-0">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}
