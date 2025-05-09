import React, { Fragment } from 'react'

export default function ServicesPage({services}) {
  return (
    <Fragment>
      <section id="service" className='py-[50px] md:py-[60px] xl:py-[80px] 2xl:py-[100px]'>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 2xl:px-[50px]">
          <div className="grid grid-cols-12 gap-[24px]">
            {services.map((item, index) => {
              return (
                <div className="service-main text-center border border-c1 py-8 px-5 rounded-md 2xl:col-span-4 md:col-span-6 col-span-12" key={index}>
                  <div className="bg-c1 flex mx-auto justify-center w-max p-4 rounded before:rounded before:top-0 before:left-0 relative before:absolute before:w-full before:h-full before:bg-c2 before:-rotate-12 before:-z-10">
                    <img
                      src={item.image
                        ? `${window.location.origin}/storage/${item.image}`
                        : "/images/no-image.webp"}
                      alt="Service"
                      className="lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] object-contain"
                    />
                  </div>
                  <h3 className="text-[18px] 2xl:text-xl font-medium text-c3 sm:px-8 mt-5">{item.title}</h3>
                  <p className='text-c3 mt-3'>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  )
}
