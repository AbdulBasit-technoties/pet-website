import React, { Fragment } from 'react'

export default function OurServices() {
  const card = [
    {
      image: "/FrontendImages/Vector_compressed.webp",
      title: "International Pet Shipping",
    },
    {
      image: "/FrontendImages/Group 199_compressed.webp",
      title: "VIP Handling for Pets",
    },
    {
      image: "/FrontendImages/Group_compressed.webp",
      title: "Door-to-Door Pet Transport Services",
    },
    {
      image: "/FrontendImages/Group 198_compressed.webp",
      title: "Climate Cont-rolled Travel Environments",
    },
    {
      image: "/FrontendImages/Group 197_compressed.webp",
      title: "24/7 Customer Support for Pet Owners",
    }
  ];
  return (
    <Fragment>
      <section id="service">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-5xl font-semibold capitalize text-c5 mb-14">
              Our Services
            </h2>
          </div>
          <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 lg:gap-y-0 gap-y-10 ">
            {card.map((item, index) => {
              return (
                <div className="service-main text-center" key={index}>
                  <div className="bg-c1 flex mx-auto justify-center w-max p-4 rounded before:rounded before:top-0 before:left-0 relative before:absolute before:w-full before:h-full before:bg-c2 before:-rotate-12 before:-z-10">
                    <img
                      src={item.image}
                      alt="Service"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-c3 xl:px-16 sm:px-8 mt-5">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  )
}
