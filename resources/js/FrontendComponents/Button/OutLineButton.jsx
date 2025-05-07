import { Link } from "@inertiajs/react";
import React from "react";

const colorMap = {
    fill: "bg-c1 text-white hover:bg-transparent hover:text-c1 border-c1",
    transparent: "bg-black text-white hover:bg-transparent hover:text-black border-black",
};

export default function OutLineButton({ title, link = "", css = "fill" }) {
    const classes = `px-4 py-2 border rounded transition duration-300 ${colorMap[css] || css}`;

    return (
        <Link href={link} className={classes}>
            {title}
        </Link>
    );
}
