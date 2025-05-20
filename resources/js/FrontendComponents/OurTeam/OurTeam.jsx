import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa6";
export default function OurTeam() {
    return (
        <Fragment>
            <section className="py-[50px] md:py-[60px] xl:py-[80px] 2xl:py-[100px] pre-friendly">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 2xl:px-[50px]">
                    <div className="text-center">
                        <h2 className="text-[#34495e] text-[24px] sm:text-[28px] lg:text-[34px] 2xl:text-[40px] 2xl:mb-[70px] lg:mb-[50px] md:mb-[40px] mb-[30px] font-semibold">
                            Our Team
                        </h2>
                    </div>
                    <div className="grid grid-cols-12 place-items-center">
                        <div className="col-span-12 lg:col-span-6 fre-con-main lg:pe-[60px]">
                            <div className="flex items-center gap-5 mb-[20px] xl:mb-8">
                                <img
                                    src="/FrontendImages/Ellipse 4_compressed.webp"
                                    alt=""
                                    className="w-[60px] xl:w-[80px] 2xl:w-24 h"
                                />
                                <div className="">
                                    <h6 className="mb-1 text-[18px] xl:text-[20px] 2xl:text-2xl font-bold text-c3">
                                        Philip Adam
                                    </h6>
                                    <span className="block text-[15px] xl:text-[16px] 2xl:text-xl font-medium text-c3">
                                        Owner
                                    </span>
                                </div>
                            </div>
                            <p className="sm:text-[18px] xl:text-[20px] 2xl:text-[22px] text-c3 sm:mb-[30px] mb-[20px] xl:mb-[40px]">
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
                                href={route("contact-us.index")}
                                className="border-2 border-c1 rounded-[50px] py-[10px] px-[20px] md:px-[30px] 2xl:px-[40px] flex items-center w-max text-[16px] md:text-[18px] 2xl:text-[22px] text-c1 transition-all duration-500 hover:bg-c1 hover:text-white font-medium"
                            >
                                Contact Us
                                <FaArrowRight className="ml-[10px] md:ml-[20px]" />
                            </Link>
                        </div>
                        <div className="col-span-12 lg:col-span-6 fre-con-img mt-[30px] lg:mt-[0px]">
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
