import Link from 'next/link';
import React from 'react';

const EmptyPlan = () => {
    return (
        <div className="flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-[#292d35] bg-[#15171c] px-6 text-center">

            <h3 className="text-xl font-extrabold uppercase tracking-wide text-white">
                NOTHING HERE YET
            </h3>

            <p className="mt-2 text-sm text-[#9297a2]">
                Browse the library and add a lift to get today moving.
            </p>

            <Link
                href="/"
                className="mt-6 rounded-lg bg-[#baff00] px-5 py-2.5 text-[11px] font-bold text-black transition hover:bg-[#ceff45]"
            >
                Go to workouts
            </Link>

        </div>
    );
};

export default EmptyPlan;
