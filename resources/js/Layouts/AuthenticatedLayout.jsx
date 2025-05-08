import { useEffect, useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import { Link, usePage } from "@inertiajs/react";
import { MdMenu } from "react-icons/md";
import usePermissions from "@/Hooks/usePermissions";
import { IoSettings } from "react-icons/io5";
import { FaTachometerAlt } from "react-icons/fa";
import SidebarLink from "@/Components/SidebarLink";
import { FaCriticalRole } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
export default function Authenticated({ auth, header, children }) {
    const { flash } = usePage().props;
    useEffect(() => {
        if (flash && flash.message) {
            toast.success(flash.message); // Show success toast
        }
        if (flash && flash.error) {
            toast.error(flash.error); // Show success toast
        }
    }, [flash]);
    const { can } = usePermissions();
    const roles = auth.user.roles.map((role) => role.name);
    const [isDrawerOpen, setIsDrawerOpen] = useState(window.innerWidth >= 1280);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setIsDrawerOpen(true);
            } else {
                setIsDrawerOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="min-h-screen bg-[#f8f8fb]">
            <nav className="bg-white w-full left-0 z-50">
                <div className="px-[10px] lg:px-[20px] py-[10px]">
                    <div className="flex items-center justify-between flex-col lg:flex-row gap-y-4 sm:gap-y-0">
                        <div className="flex items-center lg:gap-[70px] w-full lg:w-auto justify-between lg:justify-auto">
                            <Link href="/">
                                <ApplicationLogo />
                            </Link>
                            <div className="flex">
                                <button
                                    onClick={() =>
                                        setIsDrawerOpen(!isDrawerOpen)
                                    }
                                >
                                    <MdMenu className="text-[30px] text-primary" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center w-full lg:w-auto justify-end lg:justify-auto">
                            <div className="flex items-center w-full sm:w-auto justify-center sm:justify-auto">
                                <div className="flex items-center">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <button className="w-[40px] h-[40px] flex items-center justify-center border border-c1 hover:bg-transparent hover:text-c1 font-medium rounded bg-c1 text-white transition-all duration-500">
                                                <IoSettings />
                                            </button>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>

                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <ToastContainer />
                <div className="grid grid-cols-12 transition-all duration-500">
                    {isDrawerOpen && (
                        <div
                            className={`${isDrawerOpen
                                ? "fixed z-10 left-0 top-[82px] xl:w-full sm:w-1/2 w-[80%]"
                                : ""
                                } cust-navs-sidebar overflow-y-auto xl:col-span-2 xl:block px-[20px] py-[20px] bg-white h-screen xl:sticky`}
                        >
                            <ul>
                                <h6 className="uppercase text-[14px] text-c3 mb-[10px]">
                                    Data
                                </h6>
                                <li>
                                    <SidebarLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        <span
                                            className={`flex items-center gap-1 text-[15px] sm:text-[16px] font-medium transition-all duration-500 mb-[10px]
            ${route().current("dashboard")
                                                    ? "text-c1"
                                                    : "dark:text-secondary text-primary group-hover:text-c1"
                                                }`}
                                        >
                                            <FaTachometerAlt className="w-[26px] h-[26px] inline-block p-[5px] bg-custbg rounded me-[8px] dark:text-primary" />{" "}
                                            Dashboard
                                        </span>
                                    </SidebarLink>
                                </li>
                                {can("roles.index") && (
                                    <li>
                                        <SidebarLink
                                            href={route("roles.index")}
                                            active={route().current("roles.index")}
                                        >
                                            <span
                                                className={`flex items-center gap-1 text-[15px] sm:text-[16px] font-medium transition-all duration-500 mb-[10px]
                ${route().current("roles.index")
                                                        ? "text-c1"
                                                        : "dark:text-secondary text-primary group-hover:text-c1"
                                                    }`}
                                            >
                                                <FaCriticalRole className="w-[26px] h-[26px] inline-block p-[5px] bg-custbg rounded me-[8px] dark:text-primary" />
                                                Roles
                                            </span>
                                        </SidebarLink>
                                    </li>
                                )}

                                {can("services.index") && (
                                    <li>
                                        <SidebarLink
                                            href={route("services.index")}
                                            active={route().current("services.index")}
                                        >
                                            <span
                                                className={`flex items-center gap-1 text-[15px] sm:text-[16px] font-medium transition-all duration-500 mb-[10px]
                ${route().current("services.index")
                                                        ? "text-c1"
                                                        : "dark:text-secondary text-primary group-hover:text-c1"
                                                    }`}
                                            >
                                                <FaCriticalRole className="w-[26px] h-[26px] inline-block p-[5px] bg-custbg rounded me-[8px] dark:text-primary" />
                                                Services
                                            </span>
                                        </SidebarLink>
                                    </li>
                                )}

                                {can("testimonials.index") && (
                                    <li>
                                        <SidebarLink
                                            href={route("testimonials.index")}
                                            active={route().current("testimonials.index")}
                                        >
                                            <span
                                                className={`flex items-center gap-1 text-[15px] sm:text-[16px] font-medium transition-all duration-500 mb-[10px]
                ${route().current("testimonials.index")
                                                        ? "text-c1"
                                                        : "dark:text-secondary text-primary group-hover:text-c1"
                                                    }`}
                                            >
                                                <FaCriticalRole className="w-[26px] h-[26px] inline-block p-[5px] bg-custbg rounded me-[8px] dark:text-primary" />
                                                Testimonial
                                            </span>
                                        </SidebarLink>
                                    </li>
                                )}
                                {can("countries.index") && (
                                    <li>
                                        <SidebarLink
                                            href={route("countries.index")}
                                            active={route().current("countries.index")}
                                        >
                                            <span
                                                className={`flex items-center gap-1 text-[15px] sm:text-[16px] font-medium transition-all duration-500 mb-[10px]
                ${route().current("countries.index")
                                                        ? "text-c1"
                                                        : "dark:text-secondary text-primary group-hover:text-c1"
                                                    }`}
                                            >
                                                <FaCriticalRole className="w-[26px] h-[26px] inline-block p-[5px] bg-custbg rounded me-[8px] dark:text-primary" />
                                                Countries
                                            </span>
                                        </SidebarLink>
                                    </li>
                                )}
                                {can("queries.index") && (
                                    <li>
                                        <SidebarLink
                                            href={route("queries.index")}
                                            active={route().current("queries.index")}
                                        >
                                            <span
                                                className={`flex items-center gap-1 text-[15px] sm:text-[16px] font-medium transition-all duration-500 mb-[10px]
                ${route().current("queries.index")
                                                        ? "text-c1"
                                                        : "dark:text-secondary text-primary group-hover:text-c1"
                                                    }`}
                                            >
                                                <FaCriticalRole className="w-[26px] h-[26px] inline-block p-[5px] bg-custbg rounded me-[8px] dark:text-primary" />
                                                Queries
                                            </span>
                                        </SidebarLink>
                                    </li>
                                )}

                            </ul>
                        </div>
                    )}
                    <div
                        className={`${isDrawerOpen
                            ? "xl:col-span-10 col-span-12 "
                            : "col-span-12"
                            } text-primary transition-all duration-500 pt-10 px-10`}
                    >
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
