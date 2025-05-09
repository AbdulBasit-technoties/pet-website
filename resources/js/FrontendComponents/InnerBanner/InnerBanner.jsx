import React, { Fragment } from 'react'

export default function InnerBanner({ title, image }) {
    return (
        <Fragment>
            <section
                className="bg-fixed inner-banner h-[200px] sm:h-[250px] lg:h-[300px] 2xl:h-[400px] bg-cover bg-center relative before:content-[''] before:w-full before:h-full before:bg-black/60 before:absolute before:left-0 before:top-0"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="banner relative flex justify-center items-center h-full">
                    <div className="inner-banner-content">
                        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 2xl:px-[50px]">
                            <div className="grid grid-cols-1 justify-center">
                                <div className="col-span-5">
                                    <div className=''>
                                        <h4 className='text-[24px] sm:text-[28px] lg:text-4xl font-semibold uppercase text-white'>{title}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

