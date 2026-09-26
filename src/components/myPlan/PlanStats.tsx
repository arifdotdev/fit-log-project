import { ILibrary } from '@/type/library.type';
import React from 'react';

const PlanStats = ({ workouts }: { workouts: ILibrary[] }) => {
    const totalMinutes = workouts.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = workouts.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

            <div className="rounded-xl border border-[#292d35] bg-[#15171c] px-6 py-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#9297a2]">
                    Exercises
                </p>

                <p className="mt-2 text-4xl font-black leading-none text-[#baff00]">
                    {workouts.length}
                </p>
            </div>

            <div className="rounded-xl border border-[#292d35] bg-[#15171c] px-6 py-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#9297a2]">
                    Minutes
                </p>

                <p className="mt-2 text-4xl font-black leading-none text-white">
                    {totalMinutes}
                </p>
            </div>

            <div className="rounded-xl border border-[#292d35] bg-[#15171c] px-6 py-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#9297a2]">
                    Calories
                </p>

                <p className="mt-2 text-4xl font-black leading-none text-white">
                    {totalCalories}
                </p>
            </div>

        </div>
    );
};

export default PlanStats;
