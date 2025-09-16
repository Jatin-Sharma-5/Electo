"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Render server-safe placeholder
        return <div className="min-h-screen bg-white" />;
    }

    // Client-side final render
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 px-6 text-center">

            {/* Main 404 */}
            <h1 className="text-[6rem] font-bold tracking-tight text-gray-900">
                404
            </h1>
            

            {/* Subheading */}
            <p className="mt-2 text-lg text-gray-600">
                Page not found
            </p>

            {/* Action */}
            <Link 
                href="/"
                className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
            >
                Back to Home
            </Link>

        </div>
    );


}
