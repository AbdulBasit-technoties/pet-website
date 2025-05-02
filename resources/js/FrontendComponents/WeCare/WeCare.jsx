import React, { Fragment } from "react";
import { FaPlay } from "react-icons/fa";

export default function WeCare() {
    return (
        <Fragment>
            <section className="wecare">
                <div className="we-care-banner relative">
                    <div className="we-care-img">
                        <img src="/FrontendImages/wecare-bg.webp" alt="Image" />
                    </div>
                    <div className="we-care-content absolute top-0 left-0 w-full h-full flex items-center">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12">
                                    <div className="we-care-title text-center">
                                        <button className="w-[80px] h-[80px] bg-c1 rounded-[50%] flex items-center justify-center mx-auto text-white text-[30px] hover:bg-black transition-all duration-500">
                                            <FaPlay />
                                        </button>
                                        <h2 className="text-[40px] text-white capitalize mt-[20px] mb-[15px]">
                                            We Care with compasssion
                                        </h2>
                                        <p className="text-white text-[18px] w-[600px] mx-auto">
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
