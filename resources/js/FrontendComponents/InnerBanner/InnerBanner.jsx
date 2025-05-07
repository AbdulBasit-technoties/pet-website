import React, { Fragment } from 'react'

export default function InnerBanner({ title, image }) {
    return (
        <Fragment>
            <section
                className="bg-fixed inner-banner h-[400px] bg-cover bg-center relative before:content-[''] before:w-full before:h-full before:bg-black/60 before:absolute before:left-0 before:top-0"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="banner relative flex justify-center items-center h-full">
                    <div className="inner-banner-content">
                        <div className="container mx-auto 2xl:px-[50px] px-[40px]">
                            <div className="grid grid-cols-1 justify-center">
                                <div className="col-span-5">
                                    <div className=''>
                                        <h4 className='text-4xl font-semibold uppercase text-white'>{title}</h4>
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

