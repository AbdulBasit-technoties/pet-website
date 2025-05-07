import React, { Fragment, useEffect, useRef } from "react";
import "cally";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import SelectComponent from "@/Components/SelectComponent";
import TextArea from "@/Components/TextArea";

export default function BookForm() {
    const { data, setData, post, errors } = useForm({
        name: null,
        email: null,
        phone: null,
        pet_name: null,
        address: null,
        service_id: null,
        date: null,
        message: null,
    });

    const calendarRef = useRef();

      useEffect(() => {
        const calendar = calendarRef.current;

        const handleChange = (e) => {
            const selectedDate = e.target.value;
            setData("date", selectedDate);
            setOpen(false); // close dropdown
        };

        if (calendar) {
            calendar.addEventListener("change", handleChange);
        }

        return () => {
            if (calendar) {
                calendar.removeEventListener("change", handleChange);
            }
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("bookings.index"));
    };
    const services = [
        { label: "Select Service", value: "" },
        { label: "International Pet Shipping", value: "international_pet_shipping" },
        { label: "VIP Handling for Pets", value: "vip_handling" },
        { label: "Door-to-Door Pet Transport Services", value: "door_to_door" },
        { label: "Climate Controlled Travel Environments", value: "climate_controlled" }
    ];


    return (
        <Fragment>
            <section className="py-16">
                <form onSubmit={submit} className="max-w-6xl mx-auto p-6 bg-white rounded-2xl space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextInput
                            placeholder="Enter Your Name"
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name || ""}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            required
                            isFocused
                            autoComplete="name"
                            type="text"
                        />
                        <InputError className="mt-2" message={errors.name} />
                        <TextInput
                            placeholder="Email"
                            id="email"
                            className="mt-1 block w-full"
                            value={data.email || ""}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            required
                            isFocused
                            autoComplete="email"
                            type="email"
                        />
                        <InputError className="mt-2" message={errors.email} />
                        <TextInput
                            placeholder="Phone"
                            id="phone"
                            className="mt-1 block w-full"
                            value={data.phone || ""}
                            onChange={(e) => setData({ ...data, phone: e.target.value })}
                            required
                            isFocused
                            autoComplete="phone"
                            type="tel"
                        />
                        <InputError className="mt-2" message={errors.phone} />
                        <TextInput
                            placeholder="Pet name"
                            id="pet_name"
                            className="mt-1 block w-full"
                            value={data.pet_name || ""}
                            onChange={(e) => setData({ ...data, pet_name: e.target.value })}
                            required
                            isFocused
                            autoComplete="pet_name"
                            type="tel"
                        />
                        <InputError className="mt-2" message={errors.pet_name} />
                        {/* <input type="text" placeholder="Your Name" className="w-full border px-3 py-2 rounded focus:outline-none focus:border-c1 text-c3 !ring-0" />
                        <input type="email" placeholder="Email" className="w-full border px-3 py-2 rounded focus:outline-none focus:border-c1 text-c3 !ring-0" />
                        <input type="tel" placeholder="Phone Number" className="w-full border px-3 py-2 rounded focus:outline-none focus:border-c1 text-c3 !ring-0" />
                        <input type="text" placeholder="Pet's Name" className="w-full border px-3 py-2 rounded focus:outline-none focus:border-c1 text-c3 !ring-0" /> */}
                        <SelectComponent
                            id="service_id"
                            value={data.service_id}
                            options={services}
                            onChange={(e) => setData('service_id', e)}
                            className="mt-1 block w-full"
                        />
                        <InputError className="mt-2" message={errors.service_id} />

                        {/* <select className="w-full border px-3 py-2 rounded focus:outline-none focus:border-c1 text-c3 !ring-0">
                            <option>Select Service</option>
                            <option>International Pet Shipping</option>
                            <option>VIP Handling for Pets</option>
                            <option>Door-to-Door Pet Transport Services</option>
                            <option>Climate Controlled Travel Environments</option>
                        </select> */}

                        <input
                            type="date"
                            className="w-full border px-3 py-2 rounded focus:outline-none focus:border-c1 text-c3 !ring-0"
                        />
                    </div>
                    <TextArea
                        placeholder="Message"
                        id="message"
                        value={data.message || ''}
                        onChange={(e) => setData('message', e.target.value)}
                        className="mt-1 block w-full "
                    />
                    <InputError className="mt-2" message={errors.message} />

                    {/* <textarea placeholder="Message" className="w-full h-28 border px-3 py-2 rounded focus:outline-none focus:border-c1 text-c3 resize-none !ring-0"></textarea> */}

                    <input
                        type="submit"
                        value="Confirm Booking"
                        className="cursor-pointer bg-c1 text-white px-6 py-2 rounded hover:bg-c3 transition"
                    />
                </form>
            </section>
        </Fragment>
    );
}
