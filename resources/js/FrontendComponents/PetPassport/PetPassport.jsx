import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa6";
export default function PetPassport() {
    return (
        <Fragment>
            <section className="py-[80px] 2xl:py-[100px] pre-friendly">
                <div className="container mx-auto 2xl:px-[50px] px-[40px]">
                    <div className="text-center">
                        <h2 className="text-[#34495e] text-[34px] 2xl:text-[40px] 2xl:mb-[70px] mb-[50px]">
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
                            <p className="text-[18px] 2xl:text-[22px] text-c3 mb-[40px]">
                                Navigate international regulations effortlessly
                                with our comprehensive pet passport and
                                microchipping services, ensuring your pets are
                                compliant with destination country requirements.
                            </p>
                            <Link
                                href="/"
                                className="border-2 border-c1 rounded-[50px] py-[10px] px-[30px] 2xl:px-[40px] flex items-center w-max text-[18px] 2xl:text-[22px] text-c1 transition-all duration-500 hover:bg-c1 hover:text-white font-medium"
                            >
                                Get a Quote
                                <FaArrowRight className="ml-[20px]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}