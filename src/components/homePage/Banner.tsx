import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/banner.png';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="my-6 flex w-full flex-col items-center gap-8 overflow-hidden rounded-xl border border-[#252830] bg-[#15171c] px-5 py-8 md:my-10 md:min-h-[420px] md:flex-row md:gap-4 md:px-12 lg:px-10">

                <div className="w-full text-center md:w-1/2 md:text-left">
                    <h4 className="mb-4 text-[11px] font-bold tracking-[0.12em] text-[#c8ff00]">
                        WORKOUT LIBRARY
                    </h4>

                    <h1 className="mx-auto max-w-[520px] text-3xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-white sm:text-4xl md:mx-0 md:text-5xl">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    <p className="mx-auto mt-5 max-w-[500px] text-sm leading-6 text-[#858994] md:mx-0">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
                    </p>

                    {/* Anchor link: scrolls down to the #library section on this page */}
                    <Link
                        href="#library"
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#c8ff00] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-black transition-all duration-200 hover:bg-[#b8ed00]"
                    >
                        Browse Workouts
                        
                    </Link>
                </div>

                <div className="flex w-full items-center justify-center md:w-1/2">
                    <Image
                        src={bannerImg}
                        width={100}
                        height={100}
                        alt=""
                        className="h-[180px] w-auto object-contain sm:h-[220px] md:h-[240px]"
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;
