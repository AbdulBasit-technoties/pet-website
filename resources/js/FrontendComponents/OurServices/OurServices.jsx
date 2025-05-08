import React, { Fragment } from 'react'

export default function OurServices({services}) {
  return (
    <Fragment>
      <section id="service" className='py-[50px] md:py-[60px] xl:py-[80px] 2xl:py-[100px]'>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 2xl:px-[50px]">
          <div className="text-center">
            <h2 className="text-[#34495e] text-[24px] sm:text-[28px] lg:text-[34px] 2xl:text-[40px] 2xl:mb-[70px] lg:mb-[50px] md:mb-[40px] mb-[30px] font-semibold">
              Our Services
            </h2>
          </div>
          <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 lg:gap-y-0 sm:gap-y-[24px] gap-y-[20px]">
            {services.map((item, index) => {
              return (
                <div className="service-main text-center" key={index}>
                  <div className="bg-c1 flex mx-auto justify-center w-max p-4 rounded before:rounded before:top-0 before:left-0 relative before:absolute before:w-full before:h-full before:bg-c2 before:-rotate-12 before:-z-10">
                    <img
                      src={item.image
                        ? `${window.location.origin}/storage/${item.image}`
                        : "/images/no-image.webp"}
                      alt="Service"
                      className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] object-contain"
                    />
                  </div>
                  <h3 className="text-[16px] xl:text-[18px] 2xl:text-xl font-medium text-c3 sm:px-8 mt-5">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  )
}
