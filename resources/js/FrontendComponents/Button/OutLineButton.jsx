import { Link } from "@inertiajs/react";
import React from "react";

const colorMap = {
    fill: "bg-green-500 hover:text-green-500 hover:bg-transparent border-green-500",
    transparet: "bg-black hover:text-black hover:bg-transparent border-black",
};

export default function OutLineButton({ link, title, css }) {
    const classes = colorMap[css] || "bg-c1 text-white p-[10px] px-5 rounded hover:bg-transparent hover:text-c1 border border-c1 transition-all duration-500 font-medium";

    return (
        <Link
            href={link}
            className={`inline-block ${classes}`}
        >
            {title}
        </Link>
    );
}
