import React, { Fragment } from 'react'

export default function WhatWeDo() {
    return (
        <Fragment>
            <section className='py-[50px] md:py-[60px] xl:py-[80px] 2xl:py-[100px] about-content'>
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 2xl:px-[50px]">
                    <div className="text-center">
                        <h2 className="text-[#34495e] text-[24px] sm:text-[28px] lg:text-[34px] 2xl:text-[40px] 2xl:mb-[70px] lg:mb-[50px] md:mb-[40px] mb-[30px] font-semibold">
                            What We Do
                        </h2>
                    </div>
                    <div className="grid grid-cols-12 gap-[10px] lg:gap-10 items-center">
                        <div className="col-span-12 lg:col-span-6">
                            <div className="fre-con-main lg:pe-[50px]">
                                <p className="md:text-[18px] text-c3 mb-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <p className="md:text-[18px] text-c3 mb-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <p className="md:text-[18px] text-c3 mb-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <div className="flex justify-center fre-con-img">
                                <img className="w-full h-[250px] sm:h-[400px] object-cover rounded-md block" src="/FrontendImages/what.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

