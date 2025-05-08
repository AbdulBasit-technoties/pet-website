import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaRegStar } from "react-icons/fa6";

export default function Testimonial() {
    return (
        <Fragment>
            <section className="testimonial mt-[-60px] 2xl:mt-[-100px] relative 2xl:mb-[100px] xl:mb-[80px] md:mb-[60px] mb-[50px]">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 2xl:px-[50px]">
                    <div className="grid grid-cols-12 shadow-md 2xl:mx-[150px]">
                        <div className="col-span-12 lg:col-span-6">
                            <div className="testi-item bg-c1 text-white py-[30px] sm:px-[30px] px-[20px] h-full">
                                <h3 className="text-[20px] sm:text-[24px] xl:text-[28px] capitalize md:mb-[20px] mb-[15px] font-medium">
                                    What they say?
                                </h3>
                                <p className="xl:pe-[150px] 2xl:pe-[200px] sm:text-[18px] md:mb-[30px] mb-[20px]">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Cursus volutpat aliquet mauris mauris
                                    fringilla bibendum lorem sed. Nec amet neque
                                    phasellus nec sollicitudin sit. Et ege
                                </p>
                                <Link className="inline-block bg-white text-c1 p-[10px] px-[30px] md:px-[40px] text-[16px] md:text-[18px] rounded-[50px] hover:bg-black hover:text-white transition-all duration-500 font-medium">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                onSlideChange={() =>
                                    console.log("slide change")
                                }
                                onSwiper={(swiper) => console.log(swiper)}
                                className="h-full"
                            >
                                <SwiperSlide className="h-full">
                                    <div className="testi-item-box py-[30px] sm:px-[30px] px-[20px] relative h-full bg-white">
                                        <ul className="flex items-center gap-[5px]">
                                            <li className="text-c2 text-[20px]">
                                                <FaRegStar />
                                            </li>
                                            <li className="text-c2 text-[20px]">
                                                <FaRegStar />
                                            </li>
                                            <li className="text-c2 text-[20px]">
                                                <FaRegStar />
                                            </li>
                                            <li className="text-c2 text-[20px]">
                                                <FaRegStar />
                                            </li>
                                            <li className="text-c2 text-[20px]">
                                                <FaRegStar />
                                            </li>
                                        </ul>
                                        <p className="sm:text-[18px] mt-[20px] mb-[30px]">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Cursus volutpat aliquet
                                            mauris mauris fringilla bibendum
                                            lorem sed. Nec amet neque phasellus
                                            nec sollicitudin sit. Et egeLorem
                                            ipsum dolor sit amet consectetur.
                                            Cursus volutpat aliquet mauris
                                            mauris fringilla bibendum lorem s
                                        </p>
                                        <div className="author-main flex items-center gap-[20px]">
                                            <img
                                                src="/FrontendImages/Ellipse8.webp"
                                                alt="Image"
                                                className="w-[60px] xl:w-[70px]"
                                            />
                                            <div className="author-name">
                                                <h4 className="text-[#151515] font-medium text-[15px] xl:text-lg">July Benjamin</h4>
                                                <span className="text-c3 text-[13px] xl:text-lg">Canada</span>
                                            </div>
                                        </div>
                                        <div className="testi-icon absolute bottom-[20px] right-[20px] w-[30px] xl:w-[50px]">
                                          <img src="/FrontendImages/quote.png" alt="Image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="h-full">
                                    <div className="testi-item-box py-[30px] sm:px-[30px] px-[20px] relative h-full bg-white">
                                        <ul className="flex items-center gap-[5px]">
                                            <li className="text-c2 text-[20px]">
                                                <FaRegStar />
                                            </li>
                                            <li className="text-c2 text-[20px]">
                                                <FaRegStar />
                                            </li>
                                            <li className="text-c2 text-[20px]">
                                                <FaRegStar />
                                            </li>
                                            <li className="text-c2 text-[20px]">
                                                <FaRegStar />
                                            </li>
                                            <li className="text-c2 text-[20px]">
                                                <FaRegStar />
                                            </li>
                                        </ul>
                                        <p className="sm:text-[18px] mt-[20px] mb-[30px]">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Cursus volutpat aliquet
                                            mauris mauris fringilla bibendum
                                            lorem sed. Nec amet neque phasellus
                                            nec sollicitudin sit. Et egeLorem
                                            ipsum dolor sit amet consectetur.
                                            Cursus volutpat aliquet mauris
                                            mauris fringilla bibendum lorem s
                                        </p>
                                        <div className="author-main flex items-center gap-[20px]">
                                            <img
                                                src="/FrontendImages/Ellipse8.webp"
                                                alt="Image"
                                                className="w-[60px] xl:w-[70px]"
                                            />
                                            <div className="author-name">
                                                <h4 className="text-[#151515] font-medium text-[15px] xl:text-lg">July Benjamin</h4>
                                                <span className="text-c3 text-[13px] xl:text-lg">Canada</span>
                                            </div>
                                        </div>
                                        <div className="testi-icon absolute bottom-[20px] right-[20px] w-[30px] xl:w-[50px]">
                                          <img src="/FrontendImages/quote.png" alt="Image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="h-full">
                                    <div className="testi-item-box py-[30px] sm:px-[30px] px-[20px] relative h-full bg-white">
                                        <ul className="flex items-center gap-[5px]">
                                            <li className="text-c2 text-[20px]">
                                                <FaRegStar />
                                            </li>
                                            <li className="text-c2 text-[20px]">
                                                <FaRegStar />
                                            </li>
                                            <li className="text-c2 text-[20px]">
                                                <FaRegStar />
                                            </li>
                                            <li className="text-c2 text-[20px]">
                                                <FaRegStar />
                                            </li>
                                            <li className="text-c2 text-[20px]">
                                                <FaRegStar />
                                            </li>
                                        </ul>
                                        <p className="sm:text-[18px] mt-[20px] mb-[30px]">
                                            Lorem ipsum dolor sit amet
                                            consectetur. Cursus volutpat aliquet
                                            mauris mauris fringilla bibendum
                                            lorem sed. Nec amet neque phasellus
                                            nec sollicitudin sit. Et egeLorem
                                            ipsum dolor sit amet consectetur.
                                            Cursus volutpat aliquet mauris
                                            mauris fringilla bibendum lorem s
                                        </p>
                                        <div className="author-main flex items-center gap-[20px]">
                                            <img
                                                src="/FrontendImages/Ellipse8.webp"
                                                alt="Image"
                                                className="w-[60px] xl:w-[70px]"
                                            />
                                            <div className="author-name">
                                                <h4 className="text-[#151515] font-medium text-[15px] xl:text-lg">July Benjamin</h4>
                                                <span className="text-c3 text-[13px] xl:text-lg">Canada</span>
                                            </div>
                                        </div>
                                        <div className="testi-icon absolute bottom-[20px] right-[20px] w-[30px] xl:w-[50px]">
                                          <img src="/FrontendImages/quote.png" alt="Image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
