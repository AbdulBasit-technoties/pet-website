import React, { Fragment } from 'react'

export default function ServicesPage({services}) {
  return (
    <Fragment>
      <section id="service" className='py-[80px] 2xl:py-[100px]'>
        <div className="container mx-auto 2xl:px-[50px] px-[40px]">
          <div className="grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 lg:gap-y-0 gap-y-10">
            {services.map((item, index) => {
              return (
                <div className="service-main text-center border border-c1 py-8 px-5 m-3 rounded-md" key={index}>
                  <div className="bg-c1 flex mx-auto justify-center w-max p-4 rounded before:rounded before:top-0 before:left-0 relative before:absolute before:w-full before:h-full before:bg-c2 before:-rotate-12 before:-z-10">
                    <img
                      src={item.image
                        ? `${window.location.origin}/storage/${item.image}`
                        : "/images/no-image.webp"}
                      alt="Service"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-[18px] 2xl:text-xl font-medium text-c3 px-8 mt-5">{item.title}</h3>
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
