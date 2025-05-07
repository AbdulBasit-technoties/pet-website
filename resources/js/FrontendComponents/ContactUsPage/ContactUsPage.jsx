
import { Link } from '@inertiajs/react';
import React, { Fragment } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";


export default function ContactUsPage() {
  return (
    <Fragment>
        <section className='py-[80px] 2xl:py-[100px] bg-custbg'>
            <div className="container mx-auto 2xl:px-[50px] px-[40px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-3">
                        <div className="grid grid-cols-1 gap-y-5">
                           <div className="contact-info-box bg-white text-center py-8 shadow">
                                <div className="contact-icon ">
                                    <MdOutlineEmail className='text-c1 border border-c1 w-[50px] h-[50px] p-3 rounded-md mx-auto' />
                                </div>
                                <div className="contact-content">
                                    <h4 className='font-medium mt-3 text-black text-md'>
                                        Email
                                    </h4>
                                    <Link
                                        className='text-sm'
                                        href="mailto:Abbeyfarmbusiness@outlook.com">
                                        Abbeyfarmbusiness@outlook.com
                                    </Link>
                                </div>
                           </div>
                           <div className="contact-info-box bg-white text-center py-8 shadow-md">
                                <div className="contact-icon ">
                                    <CiPhone className='text-c1 border border-c1 w-[50px] h-[50px] p-3 rounded-md mx-auto' />
                                </div>
                                <div className="contact-content">
                                    <h4 className='font-medium mt-3 text-black text-md'>
                                        Phone
                                    </h4>
                                    <Link
                                        className='text-sm'
                                        href="telto:07791043791">
                                        07791043791
                                    </Link>
                                </div>
                           </div>
                           <div className="contact-info-box bg-white text-center py-8 shadow-md">
                                <div className="contact-icon ">
                                    <TfiLocationPin  className='text-c1 border border-c1 w-[50px] h-[50px] p-3 rounded-md mx-auto' />
                                </div>
                                <div className="contact-content">
                                    <h4 className='font-medium mt-3 text-black text-md'>
                                        Location
                                    </h4>
                                    <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div className="col-span-9">
                        <div className="px-6 xl:px-10">
                            <h5 className="mb-6 text-4xl font-semibold capitalize text-c1">
                                Get In touch
                            </h5>
                            <form>
                                <div className="grid grid-cols-12 gap-x-4 gap-y-2">
                                    <div className="col-span-6">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full px-8 mb-3 font-medium text-black border-0 outline-none xl:py-6 lg:py-4 placeholder:text-lg placeholder:font-medium focus:outline-1 focus:ring-2 focus:ring-c1"
                                        />
                                    </div>
                                    <div className="col-span-6">
                                        <input
                                            type="email"
                                            placeholder="Your E.mail"
                                            className="w-full px-8 mb-3 font-medium text-black border-0 outline-none xl:py-6 lg:py-4 placeholder:text-lg placeholder:font-medium focus:outline-1 focus:ring-2 focus:ring-c1"
                                        />
                                    </div>
                                    <div className="col-span-12">
                                        <input
                                            type="number"
                                            placeholder="123-456-7890"
                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            className="w-full px-8 mb-3 font-medium text-black border-0 outline-none xl:py-6 lg:py-4 placeholder:text-lg placeholder:font-medium focus:outline-1 focus:ring-2 focus:ring-c1"
                                        />
                                    </div>
                                    <div className="col-span-12">
                                        <textarea
                                            name=""
                                            id=""
                                            placeholder="Your Message"
                                            className="w-full px-8 py-4 mb-3 font-medium border-0 outline-none resize-none h-44 placeholder:text-lg placeholder:font-medium focus:outline-1 focus:ring-2 focus:ring-c1"
                                        ></textarea>
                                    </div>
                                </div>
                                <input
                                    className="text-xl font-medium transition-all duration-700 ease-in border-2 rounded-md cursor-pointer lg:mt-5 xl:mt-8 lg:px-12 xl:px-16 lg:py-2 xl:py-4 border-c2 bg-c2 hover:bg-c1 hover:text-white"
                                    value="Send Message"
                                    type="submit"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}
