import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
export default function PetPassport() {
    return (
        <Fragment>
            <section className="py-20 pre-friendly">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h2 className="text-5xl font-semibold capitalize text-c5 mb-14 md:text-5xl">
                            Pet Passport and Microchipping Services
                        </h2>
                    </div>
                    <div className="grid items-center justify-between grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
                        <div className="flex justify-center fre-con-img">
                            <img
                                src="/FrontendImages/pet2.webp"
                                alt=""
                                className=""
                            />
                        </div>
                        <div className="ml-auto md:w-3/4 fre-con-main">
                            <p className="text-xl font-medium text-l md:text-2xl text-c3 ">
                                Navigate international regulations effortlessly
                                with our comprehensive pet passport and
                                microchipping services, ensuring your pets are
                                compliant with destination country requirements.
                            </p>
                            <Link
                                href="/"
                                className="block px-8 py-3 mt-8 text-xl font-semibold border-2 rounded-full md:border-4 md:text-2xl md:px-12 md:mt-10 border-c1 w-max text-c1 "
                            >
                                Get a Quote
                                <span className="">
                                    <IoMdArrowRoundForward className="inline-block text-2xl md:text-3xl ms-2" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}