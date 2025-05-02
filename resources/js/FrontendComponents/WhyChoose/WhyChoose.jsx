import React, { Fragment } from "react";
export default function WhyChoose() {
    return (
        <Fragment>
            <section className="xl:py-20 lg:py-14 md:py-10 work bg-custbg">
                <div className="container mx-auto xl:px-14 lg:px-10 md:px-14">
                    <div className="grid items-center lg:grid-cols-2 xl:gap-14 lg:gap-8">
                        <div className="">
                            <h6 className="mb-4 text-2xl font-medium xl:text-3xl text-c1">
                                How it work?
                            </h6>
                            <h2 className="mb-10 text-4xl font-semibold capitalize xl:text-5xl xl:mb-16 text-c5">
                                the amazing steps of our Services
                            </h2>
                            <div className="flex gap-4 xl:gap-8 item-center">
                                <span className='relative flex items-center justify-center h-16 text-2xl font-semibold w-44 rounded-xl text-c4 bg-c1 before:content-[""] before:absolute before:bottom-[-80px]  before:left-1/2 before:transfrom before:-translate-x-1/2 before:w-1 before:h-16 before:bg-c1'>
                                    1
                                </span>
                                <div className="mt-6">
                                    <span className="block mb-1 text-xl text-black xl:text-2xl">
                                        Lorem ipsum{" "}
                                    </span>
                                    <p className="text-md text-c3">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Cursus volutpat aliquet mauris mauris
                                        fringilla bibendum lorem sed. Nec amet
                                        neque phasellus nec sollicitudin sit. Et
                                        ege
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 mt-10 xl:gap-8 2xl:mt-16 item-center">
                                <span className='relative flex items-center justify-center w-44  text-2xl font-semibold h-16 rounded-xl text-c4 bg-c1 before:content-[""] before:absolute before:bottom-[-80px] before:left-1/2 before:transfrom before:-translate-x-1/2 before:w-1 before:h-16 before:bg-c1'>
                                    2
                                </span>
                                <div className="mt-6">
                                    <span className="block mb-1 text-xl text-black xl:text-2xl">
                                        Lorem ipsum{" "}
                                    </span>
                                    <p className="text-md text-c3">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Cursus volutpat aliquet mauris mauris
                                        fringilla bibendum lorem sed. Nec amet
                                        neque phasellus nec sollicitudin sit. Et
                                        ege
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 xl:gap-8 2xl:mt-16 xl:mt-10 item-center">
                                <span className="relative flex items-center justify-center h-16 text-2xl font-semibold w-44 rounded-xl text-c4 bg-c1 ">
                                    3
                                </span>
                                <div className="mt-6">
                                    <span className="block mb-1 text-xl text-black xl:text-2xl ">
                                        Lorem ipsum{" "}
                                    </span>
                                    <p className="text-md text-c3">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Cursus volutpat aliquet mauris mauris
                                        fringilla bibendum lorem sed. Nec amet
                                        neque phasellus nec sollicitudin sit. Et
                                        ege
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 py-10 xl:px-10 xl:py-16 rounded-2xl bg-c1">
                            <h5 className="mb-6 text-4xl font-semibold capitalize text-c4">
                                Get In touch
                            </h5>
                            <form>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-8 mb-3 font-medium text-black border-0 outline-none xl:py-6 lg:py-4 placeholder:text-lg placeholder:font-medium focus:outline-1 focus:ring-2 focus:ring-black"
                                />
                                <input
                                    type="email"
                                    placeholder="Your E.mail"
                                    className="w-full px-8 mb-3 font-medium text-black border-0 outline-none xl:py-6 lg:py-4 placeholder:text-lg placeholder:font-medium focus:outline-1 focus:ring-2 focus:ring-black"
                                />
                                <input
                                    type="number"
                                    placeholder="123-456-7890"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    className="w-full px-8 mb-3 font-medium text-black border-0 outline-none xl:py-6 lg:py-4 placeholder:text-lg placeholder:font-medium focus:outline-1 focus:ring-2 focus:ring-black"
                                />
                                <textarea
                                    name=""
                                    id=""
                                    placeholder="Your Message"
                                    className="w-full px-8 py-4 mb-3 font-medium border-0 outline-none resize-none h-44 placeholder:text-lg placeholder:font-medium focus:outline-1 focus:ring-2 focus:ring-black"
                                ></textarea>
                                <input
                                    className="text-xl font-medium transition-all duration-700 ease-in border-2 rounded-md cursor-pointer lg:mt-5 xl:mt-8 lg:px-12 xl:px-16 lg:py-2 xl:py-4 border-c2 bg-c2 hover:bg-c1 hover:text-white"
                                    value="Send Message"
                                    type="submit"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}