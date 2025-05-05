import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa6";
export default function OurTeam() {
    return (
        <Fragment>
            <section className="py-[80px] 2xl:py-[100px] pre-friendly">
                <div className="container mx-auto 2xl:px-[50px] px-[40px]">
                    <div className="text-center">
                        <h2 className="text-[#34495e] text-[34px] 2xl:text-[40px] 2xl:mb-[70px] mb-[50px]">
                            Our Team
                        </h2>
                    </div>
                    <div className="grid items-center justify-between grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
                        <div className="md:w-4/5 fre-con-main">
                            <div className="flex items-center gap-5 mb-8">
                                <img
                                    src="/FrontendImages/Ellipse 4_compressed.webp"
                                    alt=""
                                    className="w-[80px] 2xl:w-24 h"
                                />
                                <div className="">
                                    <h6 className="mb-1 text-[18px] 2xl:text-2xl font-bold text-c5">
                                        Philip Adam
                                    </h6>
                                    <span className="block text-[16px] 2xl:text-xl font-medium text-c3">
                                        Owner
                                    </span>
                                </div>
                            </div>
                            <p className="text-[18px] 2xl:text-[22px] text-c3 mb-[40px]">
                                [Name of author] is a writer and expert on
                                dating and relationships. He has helped
                                thousands of men find love and happiness through
                                his books, articles, and coaching programs. He
                                is passionate about helping men to become the
                                best versions of themselves and to attract the
                                women of their dreams. [Name of author] has a
                                deep understanding of the challenges that men
                                face in dating and relationships
                            </p>
                            <Link
                                href="/"
                                className="border-2 border-c1 rounded-[50px] py-[10px] px-[30px] 2xl:px-[40px] flex items-center w-max text-[18px] 2xl:text-[22px] text-c1 transition-all duration-500 hover:bg-c1 hover:text-white font-medium"
                            >
                                Contact Us
                                <FaArrowRight className="ml-[20px]" />
                            </Link>
                        </div>
                        <div className="flex justify-center fre-con-img">
                            <img
                                src="/FrontendImages/Rectangle 28_compressed.webp"
                                alt=""
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
