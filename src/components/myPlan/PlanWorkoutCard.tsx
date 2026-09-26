import { ILibrary } from '@/type/library.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
    FaCheck,
    FaFire,
    FaStar,
    FaStopwatch,
    FaTimes,
} from 'react-icons/fa';

interface PlanWorkoutCardProps {
    workout: ILibrary;
    onMarkAsDone?: (workout: ILibrary) => void;
    onRemove: (id: number) => void;
}

const PlanWorkoutCard = ({
    workout,
    onMarkAsDone,
    onRemove,
}: PlanWorkoutCardProps) => {
    return (
        <div className="flex flex-col gap-4 rounded-xl border border-[#292d35] bg-[#15171c] p-4 transition hover:border-[#3a3e47] sm:flex-row sm:items-center">

            <div className="relative h-[70px] w-[110px] shrink-0 overflow-hidden rounded-lg">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                    sizes="110px"
                />
            </div>

            <div className="min-w-0 flex-1">

                <h3 className="truncate text-[16px] font-extrabold uppercase tracking-wide text-white">
                    {workout.name}
                </h3>

                <p className="mt-0.5 text-[12px] font-medium text-[#9297a2]">
                    {workout.equipment}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-4 text-[12px] font-medium text-[#9297a2]">

                    <span className="flex items-center gap-1.5">
                        <FaStopwatch className="text-[#baff00]" />
                        {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1.5">
                        <FaFire className="text-[#baff00]" />
                        {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1.5">
                        <FaStar className="text-[#baff00]" />
                        {workout.rating}
                    </span>

                </div>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-2 sm:ml-auto">

                <Link
                    href={`/workout/${workout.id}`}
                    className="rounded-lg border border-[#3a3e47] px-4 py-2 text-[11px] font-medium text-white transition hover:bg-[#1b1e24]"
                >
                    View Details
                </Link>

                {onMarkAsDone && (
                    <button
                        type="button"
                        onClick={() => onMarkAsDone(workout)}
                        className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#baff00] px-4 py-2 text-[11px] font-bold text-black transition hover:bg-[#ceff45]"
                    >
                        <FaCheck className="text-[10px]" />
                        Mark as Done
                    </button>
                )}

                <button
                    type="button"
                    onClick={() => onRemove(workout.id)}
                    aria-label={`Remove ${workout.name}`}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-[#9297a2] transition hover:bg-[#1b1e24] hover:text-white"
                >
                    <FaTimes className="text-[12px]" />
                </button>

            </div>
        </div>
    );
};

export default PlanWorkoutCard;
