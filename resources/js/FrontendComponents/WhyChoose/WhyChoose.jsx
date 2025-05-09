import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import React, { Fragment, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
export default function WhyChoose() {
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
            <section className="py-[50px] md:py-[60px] xl:py-[80px] 2xl:py-[100px] work bg-custbg">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 2xl:px-[50px]">
                    <div className="grid items-center grid-cols-12 md:gap-x-[50px] xl:gap-x-[100px]">
                        <div className="col-span-12 lg:col-span-6">
                            <h6 className="mb-4 text-[20px] 2xl:text-[24px] font-medium text-c1">
                                How it work?
                            </h6>
                            <h2 className="text-[#404040] capitalize text-[24px] sm:text-[28px] lg:text-[34px] 2xl:text-[40px] 2xl:mb-[70px] lg:mb-[50px] md:mb-[40px] mb-[30px] font-semibold">
                                the amazing steps of our Services
                            </h2>
                            <div className="flex gap-[20px] xl:gap-10 item-center mb-[40px] sm:mb-[70px]">
                                <span className='relative flex items-center justify-center h-16 text-2xl font-semibold w-44 rounded-xl text-c4 bg-c1 before:content-[""] before:absolute before:bottom-[-90px]  before:left-1/2 before:transfrom before:-translate-x-1/2 before:w-1 before:h-16 before:bg-c1'>
                                    1
                                </span>
                                <div className="mt-5">
                                    <span className="block mb-1 text-xl text-black xl:text-2xl">
                                        Lorem ipsum{" "}
                                    </span>
                                    <p className="text-md text-c3">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Cursus volutpat aliquet mauris mauris
                                        fringilla bibendum lorem sed. Nec amet
                                        neque phasellus nec sollicitudin sit. Et
                                        ege
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-[20px] xl:gap-10 item-center mb-[40px] sm:mb-[70px]">
                                <span className='relative flex items-center justify-center w-44  text-2xl font-semibold h-16 rounded-xl text-c4 bg-c1 before:content-[""] before:absolute before:bottom-[-90px] before:left-1/2 before:transfrom before:-translate-x-1/2 before:w-1 before:h-16 before:bg-c1'>
                                    2
                                </span>
                                <div className="mt-5">
                                    <span className="block mb-1 text-xl text-black xl:text-2xl">
                                        Lorem ipsum{" "}
                                    </span>
                                    <p className="text-md text-c3">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Cursus volutpat aliquet mauris mauris
                                        fringilla bibendum lorem sed. Nec amet
                                        neque phasellus nec sollicitudin sit. Et
                                        ege
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-[20px] xl:gap-10 item-center mb-[40px] lg:mb-[70px]">
                                <span className="relative flex items-center justify-center h-16 text-2xl font-semibold w-44 rounded-xl text-c4 bg-c1 ">
                                    3
                                </span>
                                <div className="mt-5">
                                    <span className="block mb-1 text-xl text-black xl:text-2xl ">
                                        Lorem ipsum{" "}
                                    </span>
                                    <p className="text-md text-c3">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Cursus volutpat aliquet mauris mauris
                                        fringilla bibendum lorem sed. Nec amet
                                        neque phasellus nec sollicitudin sit. Et
                                        ege
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 py-10 xl:px-10 xl:py-16 rounded-2xl bg-c1 col-span-12 lg:col-span-6">
                            <h5 className="mb-6 text-[30px] xl:text-[36px] font-semibold capitalize text-center sm:text-left text-c4">
                                Get In touch
                            </h5>
                            <form
                                onSubmit={Datasubmit}
                                className="grid grid-cols-12 items-center gap-5"
                            >
                                <div className="col-span-12">
                                    <InputLabel 
                                        htmlFor="name"
                                        value="Name" 
                                        className="text-white"
                                    />
                                    <TextInput
                                        id="name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                        className="mt-1 block w-full"
                                    />
                                    <InputError message={errors.name} />
                                </div>
                                <div className="col-span-12">
                                    <InputLabel 
                                        htmlFor="email"
                                        value="Email"
                                        className="text-white"
                                    />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                        className="mt-1 block w-full"
                                    />
                                    <InputError message={errors.email} />
                                </div>
                                <div className="col-span-12">
                                    <InputLabel 
                                        htmlFor="phone" 
                                        value="Phone"
                                        className="text-white" 
                                    />
                                    <TextInput
                                        id="phone"
                                        type="number"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        required
                                        className="mt-1 block w-full"
                                    />
                                    <InputError message={errors.phone} />
                                </div>
                                <div className="col-span-12">
                                    <InputLabel
                                        htmlFor="message"
                                        value="Message*"
                                        className="text-white"
                                    />
                                    <TextArea
                                        id="message"
                                        type="text"
                                        value={data.message}
                                        onChange={(e) =>
                                            setData("message", e.target.value)
                                        }
                                        required
                                        className="mt-1 block w-full"
                                    />
                                    <InputError message={errors.message} />
                                </div>
                                <div className="flex items-center gap-4">
                                    {progress && (
                                        <progress
                                            value={progress.percentage}
                                            max="100"
                                        >
                                            {progress.percentage}%
                                        </progress>
                                    )}
                                    <button type="submit" className="xl:text-[18px] font-medium transition-all border border-c2 mt-[10px] duration-500 rounded-md cursor-pointer py-[12px] px-[30px] bg-c2 hover:bg-c1 hover:text-white text-black">Submit</button>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-gray-600">
                                            Add Brand
                                        </p>
                                    </Transition>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
