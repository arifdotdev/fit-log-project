import React from 'react';
import { ILibrary } from '@/type/library.type';
import Image from 'next/image';
import {
    FaStopwatch,
    FaFire,
    FaStar,
} from 'react-icons/fa';
import Link from 'next/link';

interface workOutDetailsPageProps {
    params: Promise<{
        workoutId: string;
    }>;
}

const getWorkoutDetails = async (): Promise<ILibrary[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
};

const WorkOutCard = async ({
    params,
}: workOutDetailsPageProps) => {
    const { workoutId } = await params;

    const workoutDetails = await getWorkoutDetails();

    const workout = workoutDetails.find(
        (workout) => workout.id === parseInt(workoutId)
    );

    console.log('Workout details:', workoutId, workout);

    return (
        <Link href={`/workout/${workoutId}`} className="group">
            <section className="px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto  overflow-hidden rounded-[22px] border border-[#292d35] bg-[#15171c] shadow-2xl">

                    <div className="relative h-[240px] w-full overflow-hidden sm:h-[270px]">
                        {workout && (
                            <Image
                                src={workout.image}
                                alt={workout.name}
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, 494px"
                            />
                        )}
                    </div>

                    <div className="px-7 pb-7 pt-7">

                        <div className="mb-5 flex flex-wrap gap-2">
                            {workout?.muscleGroups.map((muscleGroup) => (
                                <span
                                    key={muscleGroup}
                                    className="rounded-full bg-[#b6ff00] px-3.5 py-1 text-[14px] font-bold uppercase tracking-wide text-black"
                                >
                                    {muscleGroup}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-[24px] font-extrabold uppercase leading-tight tracking-wide text-white">
                            {workout?.name}
                        </h1>

                        <p className="mt-2 text-[15px] font-medium text-[#9297a2]">
                            {workout?.equipment}
                        </p>

                        <div className="my-5 h-px w-full bg-[#292d35]" />

                        <div className="flex items-center gap-5 text-[#9297a2]">

                            <div className="flex items-center gap-2">
                                <FaStopwatch className="text-[16px] text-[#a6abb5]" />
                                <span className="text-[14px] font-medium">
                                    {workout?.duration}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FaFire className="text-[16px] text-[#a6abb5]" />
                                <span className="text-[14px] font-medium">
                                    180 kcal
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FaStar className="text-[16px] text-[#a6abb5]" />
                                <span className="text-[14px] font-medium">
                                    4.8
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Link>
    );
};

export default WorkOutCard;