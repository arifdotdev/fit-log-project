'use client';

import EmptyPlan from '@/components/myPlan/EmptyPlan';
import PlanStats from '@/components/myPlan/PlanStats';
import PlanWorkoutCard from '@/components/myPlan/PlanWorkoutCard';
import { WorkoutContext } from '@/context/WorkOutContext';
import { ILibrary } from '@/type/library.type';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useContext, useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { toast } from 'react-toastify';

type SortOption = 'duration' | 'calories' | 'rating';

const MyPlanPage = () => {
    const workoutContext = useContext(WorkoutContext);

    if (!workoutContext) {
        throw new Error('WorkoutContext is not available');
    }

    const {
        addToWorkout,
        setAddToWorkout,
        saveForLater,
        setSaveForLater,
        isLoading,
    } = workoutContext;

    const searchParams = useSearchParams();
    const startTab = searchParams.get('tab') === 'saved' ? 'saved' : 'plan';

    const [activeTab, setActiveTab] = useState<'plan' | 'saved'>(startTab);

    useEffect(() => {
        setActiveTab(startTab);
    }, [startTab]);
    const [sortBy, setSortBy] = useState<SortOption>('duration');

    const handleMarkAsDone = (workout: ILibrary) => {
        setAddToWorkout((prev) =>
            prev.filter((item) => item.id !== workout.id)
        );

        toast.success(`${workout.name} completed. Nice work!`);
    };

    const handleRemoveFromPlan = (id: number) => {
        setAddToWorkout((prev) => prev.filter((item) => item.id !== id));
    };

    const handleRemoveFromSaved = (id: number) => {
        setSaveForLater((prev) => prev.filter((item) => item.id !== id));
    };

    const workouts = activeTab === 'plan' ? addToWorkout : saveForLater;

    const sortedWorkouts = [...workouts].sort((a, b) => {
        if (sortBy === 'duration') return a.duration - b.duration;
        if (sortBy === 'calories') return b.caloriesBurned - a.caloriesBurned;
        return b.rating - a.rating;
    });

    return (
        <section className="min-h-screen bg-[#0c0e11] text-white">
            <div className="container mx-auto px-4 py-10">

                <h1 className="text-3xl font-bold uppercase">MY PLAN</h1>

                <p className="mt-1 text-sm text-[#9297a2]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

                <div className="mt-6">
                    <PlanStats workouts={workouts}></PlanStats>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">

                <div className="inline-flex rounded-full border border-[#292d35] bg-[#15171c] p-1">
                    <button
                        type="button"
                        onClick={() => setActiveTab('plan')}
                        className={`cursor-pointer rounded-full px-5 py-2 text-[11px] font-bold transition ${
                            activeTab === 'plan'
                                ? 'bg-[#baff00] text-black'
                                : 'text-[#9297a2] hover:text-white'
                        }`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab('saved')}
                        className={`cursor-pointer rounded-full px-5 py-2 text-[11px] font-bold transition ${
                            activeTab === 'saved'
                                ? 'bg-[#baff00] text-black'
                                : 'text-[#9297a2] hover:text-white'
                        }`}
                    >
                        Saved
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase text-[#9297a2]">
                        Sort By
                    </span>

                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="cursor-pointer appearance-none rounded-full border border-[#292d35] bg-[#15171c] py-2 pl-4 pr-9 text-[11px] font-bold text-white outline-none focus:border-[#baff00]"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>

                        <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#9297a2]" />
                    </div>
                </div>

                </div>

                <div className="mt-5">

                    {isLoading && (
                        <p className="py-10 text-center text-sm text-[#9297a2]">
                            Loading workouts…
                        </p>
                    )}

                    {!isLoading && workouts.length === 0 && (
                        <EmptyPlan></EmptyPlan>
                    )}

                    {!isLoading && activeTab === 'plan' && addToWorkout.length > 0 && (
                        <div className="space-y-3">
                            {sortedWorkouts.map((workout) => (
                                <PlanWorkoutCard
                                    key={workout.id}
                                    workout={workout}
                                    onMarkAsDone={handleMarkAsDone}
                                    onRemove={handleRemoveFromPlan}
                                ></PlanWorkoutCard>
                            ))}
                        </div>
                    )}

                    {!isLoading && activeTab === 'saved' && saveForLater.length > 0 && (
                        <div className="space-y-3">
                            {sortedWorkouts.map((workout) => (
                                <PlanWorkoutCard
                                    key={workout.id}
                                    workout={workout}
                                    onRemove={handleRemoveFromSaved}
                                ></PlanWorkoutCard>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

const MyPlanPageWithSuspense = () => (
    <Suspense>
        <MyPlanPage />
    </Suspense>
);

export default MyPlanPageWithSuspense;
