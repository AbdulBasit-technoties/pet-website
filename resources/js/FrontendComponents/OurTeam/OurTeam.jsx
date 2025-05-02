import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
export default function OurTeam() {
    return (
        <Fragment>
            <section className="pb-20 pre-friendly">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h2 className="mb-20 text-5xl font-semibold capitalize text-c5 md:text-5xl">
                            Our Team
                        </h2>
                    </div>
                    <div className="grid items-center justify-between grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
                        <div className=" md:w-4/5 fre-con-main">
                            <div className="flex items-center gap-5 mb-8">
                                <img
                                    src="/FrontendImages/Ellipse 4_compressed.webp"
                                    alt=""
                                    className="w-24 h"
                                />
                                <div className="">
                                    <h6 className="mb-1 text-2xl font-bold text-c5">
                                        Philip Adam
                                    </h6>
                                    <span className="block text-xl font-medium text-c3">
                                        Owner
                                    </span>
                                </div>
                            </div>
                            <p className="text-xl font-medium text-l md:text-2xl text-c3 ">
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
                                className="block px-8 py-3 mt-8 text-xl font-semibold border-2 rounded-full md:border-4 md:text-2xl md:px-12 md:mt-10 border-c1 w-max text-c1 "
                            >
                                Get a Quote
                                <span className="">
                                    <IoMdArrowRoundForward className="inline-block text-2xl md:text-3xl ms-2" />
                                </span>
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
