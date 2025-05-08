import React, { Fragment } from "react";
import { FaPlay } from "react-icons/fa";

export default function WeCare() {
    return (
        <Fragment>
            <section className="wecare">
                <div className="we-care-banner relative">
                    <div className="we-care-img">
                        <img src="/FrontendImages/wecare-bg.webp" alt="Image" className="h-[400px] sm:h-[450px] md:h-[500px] 2xl:h-auto object-cover" />
                    </div>
                    <div className="we-care-content absolute top-0 left-0 w-full h-full flex items-center">
                        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 2xl:px-[50px]">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12">
                                    <div className="we-care-title text-center">
                                        <button className="w-[70px] h-[70px] xl:w-[80px] xl:h-[80px] bg-c1 rounded-[50%] flex items-center justify-center mx-auto text-white xl:text-[30px] text-[20px] hover:bg-black transition-all duration-500">
                                            <FaPlay />
                                        </button>
                                        <h2 className="text-white capitalize mt-[10px] mb-[10px] sm:mt-[20px] sm:mb-[15px] text-[24px] sm:text-[28px] lg:text-[34px] 2xl:text-[40px] font-semibold">
                                            We Care with compasssion
                                        </h2>
                                        <p className="text-white sm:text-[18px] lg:w-[600px] mx-auto">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Cursus volutpat aliquet
                                            mauris mauris fringilla bibendum
                                            lorem sed. Nec amet neque{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
