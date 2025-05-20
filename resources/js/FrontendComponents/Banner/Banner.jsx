import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Banner() {
    return (
        <Fragment>
            <section className="main-banner">
                <div className="banner relative">
                    <div className="banner-img">
                      <img src="/FrontendImages/banner-bg.webp" alt="Image" className="h-[700px] sm:h-[750px] md:h-[900px] lg:h-[600px] xl:h-[700px] w-full 2xl:h-[900px] object-cover" />
                    </div>
                    <div className="banner-content pt-[50px] lg:pt-[100px] 2xl:pt-[150px] absolute top-0 left-0 w-full h-full">
                        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 2xl:px-[50px]">
                            <div className="grid grid-cols-12 items-center">
                                <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                                    <div className="banner-title text-center lg:text-left">
                                        <h1 className="text-white text-[30px] md:text-[40px] xl:text-[46px] 2xl:text-[60px] leading-[1.3] sm:mb-[20px] mb-[15px]">
                                            Your{" "}
                                            <span className="text-c2">Trusted Pet Relocation</span>{" "}
                                            Partner
                                        </h1>
                                        <p className="text-white md:text-[18px] 2xl:text-[20px] mb-[20px] sm:mb-[30px] xl:mb-[40px]">
                                            Our dedicated team understands the
                                            unique bond you share with your
                                            furry companions, and we're
                                            committed to ensuring a seamless and
                                            stress-free experience for both you
                                            and your pets.
                                        </p>
                                        <Link href={route("contact-us.index")} className="border-2 border-white rounded-[50px] py-[10px] px-[20px] md:px-[30px] 2xl:px-[40px] flex items-center mx-auto lg:mx-0 w-max text-[16px] md:text-[18px] 2xl:text-[22px] text-white transition-all duration-500 hover:bg-white hover:text-c1 font-medium">
                                            Get a Quote
                                            <FaArrowRight className="ml-[10px] md:ml-[20px]" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-span-12 lg:col-span-6 2xl:col-span-7 px-[20px] sm:px-[50px] lg:px-[0px] mt-[30px] lg:mt-[0px]">
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
