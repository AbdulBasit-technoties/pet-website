import React, { Fragment } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

export default function TestimonialPage({ testimonials }) {
    return (
        <Fragment>
            <section className="testimonial relative py-[50px] md:py-[60px] xl:py-[80px] 2xl:py-[100px]">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 2xl:px-[50px]">
                    <div className="grid grid-cols-12 gap-5">
                        {testimonials.map((item, index) => {
                            return (
                                <div className="col-span-12 md:col-span-6">
                                    <div className="testi-item-box py-[30px] lg:px-[30px] px-[25px] relative h-full bg-white border border-c1 rounded-md">
                                        <ul className="flex items-center gap-[5px]">
                                            {[...Array(5)].map((_, index) => (
                                                <li
                                                    key={index}
                                                    className={`text-[20px] ${
                                                        index < item.rating
                                                            ? "text-yellow-400"
                                                            : "text-c2"
                                                    }`}
                                                >
                                                    {index < item.rating ? (
                                                        <FaStar />
                                                    ) : (
                                                        <FaRegStar />
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="sm:text-[18px] mt-[20px] mb-[30px]">
                                            {item.comment || "N/A"}
                                        </p>
                                        <div className="author-main flex items-center gap-[20px]">
                                            <img
                                                src={
                                                    item.image
                                                        ? `${window.location.origin}/storage/${item.image}`
                                                        : "/images/no-image.webp"
                                                }
                                                alt="Image"
                                                className="w-[60px] h-[60px] xl:h-[70px] rounded-full object-cover xl:w-[70px]"
                                            />
                                            <div className="author-name">
                                                <h4 className="text-[#151515] font-medium text-[16px] xl:text-lg">
                                                    {item.name || "N/A"}
                                                </h4>
                                                <span className="text-c3 text-[14px] xl:text-lg">
                                                    {item.country.name || "N/A"}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="testi-icon absolute bottom-[20px] right-[20px] w-[30px] xl:w-[50px]">
                                            <img
                                                src="/FrontendImages/quote.png"
                                                alt="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        {/* <div className="col-span-6">
                            <div className="testi-item-box py-[30px] px-[30px] relative h-full bg-white border border-c1 rounded-md">
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
                                <p className="text-[18px] mt-[20px] mb-[30px]">
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
                                        className="w-[70px]"
                                    />
                                    <div className="author-name">
                                        <h4 className="text-[#151515] font-medium text-lg">July Benjamin</h4>
                                        <span className="text-c3 text-lg">Canada</span>
                                    </div>
                                </div>
                                <div className="testi-icon absolute bottom-[20px] right-[20px] w-[50px]">
                                    <img src="/FrontendImages/quote.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="testi-item-box py-[30px] px-[30px] relative h-full bg-white border border-c1 rounded-md">
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
                                <p className="text-[18px] mt-[20px] mb-[30px]">
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
                                        className="w-[70px]"
                                    />
                                    <div className="author-name">
                                        <h4 className="text-[#151515] font-medium text-lg">July Benjamin</h4>
                                        <span className="text-c3 text-lg">Canada</span>
                                    </div>
                                </div>
                                <div className="testi-icon absolute bottom-[20px] right-[20px] w-[50px]">
                                    <img src="/FrontendImages/quote.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="testi-item-box py-[30px] px-[30px] relative h-full bg-white border border-c1 rounded-md">
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
                                <p className="text-[18px] mt-[20px] mb-[30px]">
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
                                        className="w-[70px]"
                                    />
                                    <div className="author-name">
                                        <h4 className="text-[#151515] font-medium text-lg">July Benjamin</h4>
                                        <span className="text-c3 text-lg">Canada</span>
                                    </div>
                                </div>
                                <div className="testi-icon absolute bottom-[20px] right-[20px] w-[50px]">
                                    <img src="/FrontendImages/quote.png" alt="Image" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
