import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/banner.png';

const Banner = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex min-h-[420px] my-10 w-full items-center overflow-hidden rounded-xl border border-[#252830] bg-[#15171c] px-10 py-8 md:px-12 lg:px-10">

                {/* Left Content */}
                <div className="w-1/2">
                    <h4 className="mb-4 text-[11px] font-bold tracking-[0.12em] text-[#c8ff00]">
                        WORKOUT LIBRARY
                    </h4>

                    <h1 className="max-w-[520px] text-4xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-white md:text-5xl">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    <p className="mt-5 max-w-[500px] text-sm leading-6 text-[#858994]">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
                    </p>

                    <button className="mt-5 rounded-md bg-[#c8ff00] px-5 py-2.5 text-[10px] cursor-pointer font-bold uppercase text-black transition-all duration-200 hover:bg-[#b8ed00]">
                        Brows Workout
                    </button>
                </div>

                {/* Right Image */}
                <div className="flex w-1/2 items-center justify-center">
                    <Image
                        src={bannerImg}
                        width={100}
                        height={100}
                        alt=""
                        className="h-[240px] w-auto object-contain"
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;