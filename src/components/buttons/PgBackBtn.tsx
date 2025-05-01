"use client";
import Link from "next/link";
import React from "react";

const PgBackBtn = () => {
    return (
        <Link
            href={"/"}
            className="inline-flex items-center gap-2 px-4 py-2 text-white/90 hover:text-white transition-colors duration-200 group"
        >
            <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
            </svg>
            Go Back
        </Link>
    );
};

export default PgBackBtn;
