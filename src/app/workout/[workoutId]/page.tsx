import React from 'react';
import { ILibrary } from '@/type/library.type';
import Image from 'next/image';
import {
    FaStopwatch,
    FaFire,
    FaStar,
    FaDumbbell,
    FaChartBar,
    FaLayerGroup,
    FaRepeat,
    FaCalendarCheck,
    FaBookmark,
} from 'react-icons/fa6';
import AddToPlanButton from '@/components/workoutButton/AddToPlanButton';
import SaveLetterButton from '@/components/workoutButton/SaveLetterButton';

interface workOutDetailsPageProps {
    params: Promise<{
        workoutId: string;
    }>;
}

const getWorkoutDetails = async (): Promise<ILibrary[]> => {
    const res = await fetch(
        'https://api.abcz.workers.dev/api/fitlog',
        {
            cache: 'no-store',
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
};

const WorkOutDetailsPage = async ({
    params,
}: workOutDetailsPageProps) => {
    const { workoutId } = await params;

    const workoutDetails = await getWorkoutDetails();

    const workout = workoutDetails.find(
        (workout) => workout.id === parseInt(workoutId)
    );

    console.log('Workout details:', workoutId, workout);

    if (!workout) {
        return (
            <section className="min-h-screen bg-[#0c0e11] px-4 py-10 text-white">
                <div className="mx-auto max-w-7xl">
                    <div className="rounded-2xl border border-[#292d35] bg-[#15171c] px-6 py-20 text-center">
                        <h1 className="text-2xl font-bold">
                            Workout Not Found
                        </h1>

                        <p className="mt-2 text-sm text-[#9297a2]">
                            The workout you are looking for does not exist.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-[#0c0e11] px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-12">
            <div className="mx-auto max-w-7xl">

                {/* Main Workout Container */}
                <div className="grid overflow-hidden rounded-[20px] border border-[#292d35] bg-[#111317] lg:grid-cols-[1fr_1fr]">

                    {/* =====================================================
                        LEFT - IMAGE
                    ====================================================== */}
                    <div className="relative min-h-[400px] lg:min-h-[650px]">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                        {/* Workout ID */}
                        <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                            Workout #{workout.id}
                        </div>
                    </div>

                    {/* =====================================================
                        RIGHT - CONTENT
                    ====================================================== */}
                    <div className="flex flex-col p-6 sm:p-8 lg:p-10">

                        {/* Small Label */}
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8e949f]">
                            Workout Library
                        </p>

                        {/* Workout Name */}
                        <h1 className="text-[30px] font-black uppercase leading-[1.05] tracking-tight text-white sm:text-[36px]">
                            {workout.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-3 max-w-xl text-[13px] leading-6 text-[#9297a2]">
                            {workout.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscleGroup) => (
                                <span
                                    key={muscleGroup}
                                    className="rounded-full bg-[#baff00] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black"
                                >
                                    {muscleGroup}
                                </span>
                            ))}
                        </div>

                        {/* =================================================
                            DETAILS BOX
                        ================================================== */}
                        <div className="mt-5 overflow-hidden rounded-xl border border-[#292d35] bg-[#171a20]">

                            {/* Equipment */}
                            <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <FaDumbbell className="text-[11px] text-[#8e949f]" />

                                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#8e949f]">
                                        Equipment
                                    </span>
                                </div>

                                <span className="text-[11px] font-medium text-white">
                                    {workout.equipment}
                                </span>
                            </div>

                            {/* Difficulty */}
                            <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <FaChartBar className="text-[11px] text-[#8e949f]" />

                                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#8e949f]">
                                        Difficulty
                                    </span>
                                </div>

                                <span className="text-[11px] font-medium text-white">
                                    Intermediate
                                </span>
                            </div>

                            {/* Sets */}
                            <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <FaLayerGroup className="text-[11px] text-[#8e949f]" />

                                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#8e949f]">
                                        Sets
                                    </span>
                                </div>

                                <span className="text-[11px] font-medium text-white">
                                    4
                                </span>
                            </div>

                            {/* Reps */}
                            <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <FaRepeat className="text-[11px] text-[#8e949f]" />

                                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#8e949f]">
                                        Reps
                                    </span>
                                </div>

                                <span className="text-[11px] font-medium text-white">
                                    6-8
                                </span>
                            </div>

                            {/* Duration */}
                            <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <FaStopwatch className="text-[11px] text-[#8e949f]" />

                                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#8e949f]">
                                        Duration
                                    </span>
                                </div>

                                <span className="text-[11px] font-medium text-white">
                                    {workout.duration}
                                </span>
                            </div>

                            {/* Calories */}
                            <div className="flex items-center justify-between border-b border-[#292d35] px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <FaFire className="text-[11px] text-[#8e949f]" />

                                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#8e949f]">
                                        Calories
                                    </span>
                                </div>

                                <span className="text-[11px] font-medium text-white">
                                    180 kcal
                                </span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center justify-between px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <FaStar className="text-[11px] text-[#8e949f]" />

                                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#8e949f]">
                                        Rating
                                    </span>
                                </div>

                                <span className="text-[11px] font-medium text-white">
                                    4.8
                                </span>
                            </div>

                        </div>

                        {/* =================================================
                            INSTRUCTIONS
                        ================================================== */}
                        <div className="mt-6">

                            <h2 className="mb-4 text-[11px] font-black uppercase tracking-wide text-white">
                                Instructions
                            </h2>

                            <div className="space-y-3">

                                <div className="flex gap-3">
                                    <span className="text-[10px] text-[#8e949f]">
                                        1.
                                    </span>

                                    <p className="text-[11px] leading-5 text-[#a0a5ae]">
                                        Lie on the bench with eyes under the bar and feet planted.
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    <span className="text-[10px] text-[#8e949f]">
                                        2.
                                    </span>

                                    <p className="text-[11px] leading-5 text-[#a0a5ae]">
                                        Unrack with locked elbows and lower the bar to mid-chest.
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    <span className="text-[10px] text-[#8e949f]">
                                        3.
                                    </span>

                                    <p className="text-[11px] leading-5 text-[#a0a5ae]">
                                        Press up in a slight arc until elbows lock without bouncing.
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    <span className="text-[10px] text-[#8e949f]">
                                        4.
                                    </span>

                                    <p className="text-[11px] leading-5 text-[#a0a5ae]">
                                        Keep shoulder blades pinched and maintain a natural arch in the back.
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* =================================================
                            ACTION BUTTONS
                        ================================================== */}
                        <div className="mt-7 flex flex-wrap gap-3">

                            <AddToPlanButton workout={workout}></AddToPlanButton>
                            <SaveLetterButton workout={workout}></SaveLetterButton>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkOutDetailsPage;