import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <section className="flex min-h-screen items-center justify-center bg-[#0c0e11] px-4 py-10 text-white">
            <div className="w-full max-w-xl rounded-2xl border border-[#292d35] bg-[#15171c] px-6 py-16 text-center">
                <p className="mb-3 text-[11px] font-bold tracking-[0.12em] text-[#c8ff00]">
                    ERROR 404
                </p>

                <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl">
                    Page Not Found
                </h1>

                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#9297a2]">
                    The page you are looking for does not exist or has been moved.
                    Check the URL or head back to the workout library.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-md bg-[#c8ff00] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-black transition-all duration-200 hover:bg-[#b8ed00]"
                    >
                        Back to Home
                    </Link>

                    <Link
                        href="/my-plan"
                        className="inline-flex items-center rounded-md border border-[#292d35] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:border-[#c8ff00] hover:text-[#c8ff00]"
                    >
                        View My Plan
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
