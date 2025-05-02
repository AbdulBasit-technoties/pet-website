import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Banner() {
    return (
        <Fragment>
            <section className="main-banner">
                <div className="banner relative">
                    <div className="banner-img">
                      <img src="/FrontendImages/banner-bg.webp" alt="Image" />
                    </div>
                    <div className="banner-content pt-[150px] absolute top-0 left-0 w-full h-full">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-12 items-center">
                                <div className="col-span-5">
                                    <div className="banner-title">
                                        <h1 className="text-white text-[60px] leading-[1.3] mb-[20px]">
                                            Your{" "}
                                            <span className="text-c2">Trusted Pet Relocation</span>{" "}
                                            Partner
                                        </h1>
                                        <p className="text-white text-[20px] mb-[40px]">
                                            Our dedicated team understands the
                                            unique bond you share with your
                                            furry companions, and we're
                                            committed to ensuring a seamless and
                                            stress-free experience for both you
                                            and your pets.
                                        </p>
                                        <Link className="border-2 border-white rounded-[50px] py-[10px] px-[40px] flex items-center w-max text-[22px] text-white transition-all duration-500 hover:bg-white hover:text-c1 font-medium">
                                            Get a Quote
                                            <FaArrowRight className="ml-[20px]" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-span-7">
                                  <img src="/FrontendImages/banner.webp" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
