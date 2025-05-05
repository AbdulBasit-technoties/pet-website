import React, { Fragment } from 'react'

export default function WhatWeDo() {
  return (
    <Fragment>
        <section className='py-[80px] 2xl:py-[100px] about-content'>
            <div className="container mx-auto 2xl:px-[50px] px-[40px]">
                    <div className="text-center">
                        <h2 className="text-[#34495e] text-[34px] 2xl:text-[40px] 2xl:mb-[70px] mb-[50px]">
                            What We Do
                        </h2>
                    </div>
                    <div className="grid grid-cols-12 gap-10 items-center">
                        <div className="col-span-6">
                            <div className="fre-con-main pe-[50px]">
                                <p className="text-[18px] 2xl:text-[22px] text-c3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="flex justify-center fre-con-img">
                                <img className="w-full h-[450px] object-cover rounded-md" src="/FrontendImages/Rectangle 28_compressed.webp" />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </Fragment>
  )
}

