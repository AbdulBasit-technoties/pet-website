import { Link, useForm, usePage } from "@inertiajs/react";
import React, { Fragment, useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import TextArea from "@/Components/TextArea";
import { ToastContainer, toast } from "react-toastify";
export default function ContactUsPage() {
    const { data, setData, post, progress, recentlySuccessful, errors, reset } =
        useForm({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    const Datasubmit = (e) => {
        e.preventDefault();
        post(route("queries.add"), {
            onSuccess: () => {
                reset();
                setSidebarState(false);
            },
        });
    };
    const { flash } = usePage().props;
    useEffect(() => {
        if (flash && flash.message) {
            toast.success(flash.message);
        }
        if (flash && flash.error) {
            toast.error(flash.error);
        }
    }, [flash]);
    return (
        <Fragment>
            <ToastContainer />
            <section className="py-[80px] 2xl:py-[100px] bg-custbg">
                <div className="container mx-auto 2xl:px-[50px] px-[40px]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3">
                            <div className="grid grid-cols-1 gap-y-5">
                                <div className="contact-info-box bg-white text-center py-8 shadow">
                                    <div className="contact-icon ">
                                        <MdOutlineEmail className="text-c1 border border-c1 w-[50px] h-[50px] p-3 rounded-md mx-auto" />
                                    </div>
                                    <div className="contact-content">
                                        <h4 className="font-medium mt-3 text-black text-md">
                                            Email
                                        </h4>
                                        <Link
                                            className="text-sm"
                                            href="mailto:Abbeyfarmbusiness@outlook.com"
                                        >
                                            Abbeyfarmbusiness@outlook.com
                                        </Link>
                                    </div>
                                </div>
                                <div className="contact-info-box bg-white text-center py-8 shadow-md">
                                    <div className="contact-icon ">
                                        <CiPhone className="text-c1 border border-c1 w-[50px] h-[50px] p-3 rounded-md mx-auto" />
                                    </div>
                                    <div className="contact-content">
                                        <h4 className="font-medium mt-3 text-black text-md">
                                            Phone
                                        </h4>
                                        <Link
                                            className="text-sm"
                                            href="telto:07791043791"
                                        >
                                            07791043791
                                        </Link>
                                    </div>
                                </div>
                                <div className="contact-info-box bg-white text-center py-8 shadow-md">
                                    <div className="contact-icon ">
                                        <TfiLocationPin className="text-c1 border border-c1 w-[50px] h-[50px] p-3 rounded-md mx-auto" />
                                    </div>
                                    <div className="contact-content">
                                        <h4 className="font-medium mt-3 text-black text-md">
                                            Location
                                        </h4>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-9">
                            <div className="px-6 xl:px-10">
                                <h5 className="mb-6 text-4xl font-semibold capitalize text-c1">
                                    Get In touch
                                </h5>
                                <form onSubmit={Datasubmit}>
                                    <div className="grid grid-cols-12 gap-x-4 gap-y-2">
                                        <div className="col-span-6">
                                            <InputLabel
                                                htmlFor="name"
                                                value="Name"
                                            />
                                            <TextInput
                                                id="name"
                                                type="text"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                className="mt-1 block w-full"
                                            />
                                            <InputError message={errors.name} />
                                        </div>
                                        <div className="col-span-6">
                                            <InputLabel
                                                htmlFor="email"
                                                value="Email"
                                            />
                                            <TextInput
                                                id="email"
                                                type="email"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                className="mt-1 block w-full"
                                            />
                                            <InputError
                                                message={errors.email}
                                            />
                                        </div>
                                        <div className="col-span-12">
                                            <InputLabel
                                                htmlFor="phone"
                                                value="Phone"
                                            />
                                            <TextInput
                                                id="phone"
                                                type="number"
                                                value={data.phone}
                                                onChange={(e) =>
                                                    setData(
                                                        "phone",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                className="mt-1 block w-full"
                                            />
                                            <InputError
                                                message={errors.phone}
                                            />
                                        </div>
                                        <div className="col-span-12">
                                            <InputLabel
                                                htmlFor="message"
                                                value="Message*"
                                            />
                                            <TextArea
                                                id="message"
                                                type="text"
                                                value={data.message}
                                                onChange={(e) =>
                                                    setData(
                                                        "message",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                className="mt-1 block w-full"
                                            />
                                            <InputError
                                                message={errors.message}
                                            />
                                        </div>
                                    </div>
                                    <input
                                        className="text-xl font-medium transition-all duration-700 ease-in border-2 rounded-md cursor-pointer lg:mt-5 xl:mt-8 lg:px-12 xl:px-16 lg:py-2 xl:py-4 border-c2 bg-c2 hover:bg-c1 hover:text-white"
                                        value="Send Message"
                                        type="submit"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
