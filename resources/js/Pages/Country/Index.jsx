import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { MdDelete, MdOutlineClose } from "react-icons/md";
import { FaEdit, FaEye } from "react-icons/fa";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";
import { IoEyeOutline, IoPencilOutline } from "react-icons/io5";
import { RiDeleteBin7Line } from "react-icons/ri";
import TextArea from "@/Components/TextArea";

export default function Index({ auth, countries, editData, isEditMode }) {
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("countries.destroy", id), {
                    onSuccess: () =>
                        Swal.fire(
                            "Deleted!",
                            "Your role has been deleted.",
                            "success"
                        ),
                    onError: () =>
                        Swal.fire(
                            "Error!",
                            "There was an issue deleting your role.",
                            "error"
                        ),
                });
            }
        });
    };

    const [editClick, setEditClick] = useState(isEditMode);
    const {
        data,
        setData,
        post,
        patch,
        progress,
        recentlySuccessful,
        errors,
        reset,
    } = useForm({
        id: "",
        name: "",
        code: "",
    });

    useEffect(() => {
        if (editClick) {
            setData({
                id: editData?.id || "",
                name: editData?.name || "",
                code: editData?.code || "",
            });
        } else {
            reset(); // for add new
        }
    }, [editData, editClick]);

    const handleEditClick = (item) => {
        setEditClick(true);
        router.visit(route("countries.index", { id: item.id }), {
            preserveState: true,
            only: ["editData", "isEditMode"],
        });
    };

    // Submit handler
    const Datasubmit = (e) => {
        e.preventDefault();
        editData
            ? patch(route("countries.update", editData?.id), {
                onSuccess: () => {
                    reset();
                    setSidebarState(false);
                },
            })
            : post(route("countries.store"), {
                onSuccess: () => {
                    reset();
                    setSidebarState(false);
                },
            });
    };

    const [sidebarState, setSidebarState] = useState(false);
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Countries" />
            <div className="bg-white p-[20px] rounded">
                <div className="flex font-semibold items-center leading-tight text-primary justify-between mb-4">
                    <h2 className="text-[18px] text-[#000]">All Countries</h2>
                    <div className="text-primary dark:text-secondary md:text-sm text-xs">
                        Per page {countries.total}/{countries.to || countries.length}
                        <label
                            onClick={(e) => {
                                setEditClick(false);
                                setSidebarState(true);
                            }}
                            className="inline-flex items-center ml-4 px-4 py-2 font-medium bg-c1 border border-transparent rounded text-[14px] text-white capitalize hover:border-c1 hover:bg-transparent hover:text-c1 transition-all duration-500"
                        >
                            Add Country
                        </label>
                    </div>
                </div>
                <div className="rounded overflow-x-auto">
                    <table className="table table-xs w-full table-main border border-[#E8E8E8]">
                        <thead className="bg-[#f8f8fb] border-t border-b border-[#E8E8E8]">
                            <tr className="border-none">
                                <th className="py-3 font-medium">#</th>
                                <th className="py-3 font-medium">Name</th>
                                <th className="py-3 font-medium">Code</th>
                                <th className="py-3 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {countries.data.map((item, index) => (
                                <tr
                                    className="space-y-3 font-medium border-y border-[#E8E8E8] text-center"
                                    key={item.id}
                                >
                                    <td className="text-sm py-4 font-normal">
                                        {index + 1}
                                    </td>
                                    <td className="text-sm py-4 font-normal">
                                        {item.name}
                                    </td>
                                    <td className="text-sm py-4 font-normal">
                                        {item.code}
                                    </td>
                                    <td className="text-sm py-4 font-normal">
                                        <div className="flex gap-2 justify-center">
                                            <label
                                                onClick={(e) => {
                                                    handleEditClick(item);
                                                    setSidebarState(true);
                                                }}
                                                className=" hover:bg-c1 transition-all duration-500 hover:text-white text-[18px] w-[30px] h-[30px] bg-[#f8f8fb] flex items-center justify-center rounded cursor-pointer"
                                            >
                                                <IoPencilOutline />
                                            </label>
                                            <Link
                                                href={route(
                                                    "countries.show",
                                                    item.id
                                                )}
                                                className=" hover:bg-c1 transition-all duration-500 hover:text-white text-[18px] w-[30px] h-[30px] bg-[#f8f8fb] flex items-center justify-center rounded cursor-pointer"
                                            >
                                                <IoEyeOutline />
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                                className=" hover:bg-c1 transition-all duration-500 hover:text-white text-[18px] w-[30px] h-[30px] bg-[#f8f8fb] flex items-center justify-center rounded cursor-pointer"
                                            >
                                                <RiDeleteBin7Line />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {countries && countries.last_page > 1 && (
                    <div className="join flex justify-center mt-6 w-full">
                        <Link
                            href={countries.prev_page_url || "#"}
                            className={`join-item btn ${countries.prev_page_url ? "" : "btn-disabled"
                                }`}
                        >
                            «
                        </Link>
                        <button className="join-item btn cursor-default bg-primary text-white">
                            Page {countries.current_page}
                        </button>
                        <Link
                            href={countries.next_page_url || "#"}
                            className={`join-item btn ${countries.next_page_url ? "" : "btn-disabled"
                                }`}
                        >
                            »
                        </Link>
                    </div>
                )}
            </div>

            <div
                className={`${sidebarState === true
                    ? "visible opacity-1"
                    : "hidden opacity-0"
                    } z-[50] fixed left-0 top-0 w-[100%] transition-all duration-500 ease overlay-box h-full bg-[#0000006b]`}
            ></div>
            <div
                onClick={(e) => setSidebarState(false)}
                className={`${sidebarState === true ? "right-0" : "-right-full"
                    } fixed top-0 w-[100%] transition-all duration-500 ease z-50 h-full overflow-y-auto`}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="side-inner w-[35%] ml-auto h-full"
                >
                    <ul className="bg-white min-h-full p-0 dark:bg-primary">
                        <div className="flex justify-between border-b px-[15px] py-[10px]">
                            <h2 className="text-[18px] text-[#000]">
                                {editClick === true ? "Edit" : "Add New"} Country
                            </h2>
                            <label
                                onClick={(e) => setSidebarState(false)}
                                className="w-[30px] text-c1 h-[30px] border hover:text-white border-c1 transition-all duration-500 hover:bg-c1 rounded-full flex justify-center items-center cursor-pointer"
                            >
                                <MdOutlineClose className="w-4 h-4" />
                            </label>
                        </div>
                        <form
                            onSubmit={Datasubmit}
                            className="grid grid-cols-12 items-center gap-5 px-[15px] py-[20px]"
                        >
                            <div className="col-span-12">
                                <InputLabel
                                    htmlFor="name"
                                    value={`Name${editClick === true ? "" : "*"
                                        }`}
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
                                    htmlFor="code"
                                    value={`Code${editClick === true ? "" : "*"
                                        }`}
                                />
                                <TextInput
                                    id="code"
                                    type="text"
                                    value={data.code}
                                    onChange={(e) =>
                                        setData("code", e.target.value)
                                    }
                                    required
                                    className="mt-1 block w-full"
                                />
                                <InputError message={errors.code} />
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
                                <PrimaryButton disabled={progress}>
                                    Save
                                </PrimaryButton>

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
                    </ul>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
