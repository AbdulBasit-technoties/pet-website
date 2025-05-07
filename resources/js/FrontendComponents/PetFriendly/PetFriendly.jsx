import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import Prefriendly from "../../../../public/FrontendImages/pet.webp";
import { FaArrowRight } from "react-icons/fa6";

export default function PetFriendly() {
    return (
        <Fragment>
            <section className="py-[80px] 2xl:py-[100px] pre-friendly">
                <div className="container mx-auto 2xl:px-[50px] px-[40px]">
                    <div className="text-center">
                        <h2 className="text-[#34495e] text-[34px] 2xl:text-[40px] 2xl:mb-[70px] mb-[50px] font-semibold">
                            Pet-Friendly Accommodation Assistance
                        </h2>
                    </div>
                    <div className="grid grid-cols-12 place-items-center">
                        <div className="col-span-5">
                            <div className="fre-con-main pe-[50px]">
                                <p className="text-[18px] 2xl:text-[22px] text-c3 mb-[40px]">
                                    Finding a new home for your pets is as
                                    important as finding one for yourself.
                                    PetPaws Cargo assists in locating
                                    pet-friendly accommodations at the
                                    destination, so your pets can settle into
                                    their new environment with ease.
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
                        <div className="col-span-7">
                            <div className="flex justify-center fre-con-img">
                                <img
                                    src={Prefriendly}
                                    alt=""
                                    className="w-4/5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
