import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import Prefriendly from "../../../../public/FrontendImages/pet.webp";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function PetFriendly() {
    return (
        <Fragment>
            <section className="py-20 pre-friendly">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h2 className="text-5xl font-semibold capitalize text-c5 md:text-5xl mb-7">
                            Pet-Friendly Accommodation Assistance
                        </h2>
                    </div>
                    <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
                        <div className="md:w-3/4 fre-con-main">
                            <p className="text-xl font-medium text-l md:text-2xl text-c3">
                                Finding a new home for your pets is as important
                                as finding one for yourself. PetPaws Cargo
                                assists in locating pet-friendly accommodations
                                at the destination, so your pets can settle into
                                their new environment with ease.
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
                        <div className="flex justify-center fre-con-img">
                            <img src={Prefriendly} alt="" className="w-4/5" />
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="mt-16 text-5xl font-semibold capitalize text-c5 md:text-5xl">
                            Why Choose Care Cargo?
                        </h2>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}