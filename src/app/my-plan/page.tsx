'use client';

import EmptyPlan from '@/components/myPlan/EmptyPlan';
import PlanStats from '@/components/myPlan/PlanStats';
import PlanWorkoutCard from '@/components/myPlan/PlanWorkoutCard';
import { WorkoutContext } from '@/context/WorkOutContext';
import { ILibrary } from '@/type/library.type';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

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
        addToPlan,
    } = workoutContext;

    const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');

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

    // The list shown under the active tab
    const workouts = activeTab === 'plan' ? addToWorkout : saveForLater;

    return (
        <section className="min-h-screen bg-[#0c0e11] text-white">
            <div className="container mx-auto px-4 py-10">

                {/* Header */}
                <h1 className="text-3xl font-bold uppercase">MY PLAN</h1>

                <p className="mt-1 text-sm text-[#9297a2]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

                {/* Metrics Summary */}
                <div className="mt-6">
                    <PlanStats workouts={workouts}></PlanStats>
                </div>

                {/* Tabs */}
                <div className="mt-8 inline-flex rounded-full border border-[#292d35] bg-[#15171c] p-1">
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

                {/* Workout List */}
                <div className="mt-5">

                    {/* Loading State */}
                    {isLoading && (
                        <p className="py-10 text-center text-sm text-[#9297a2]">
                            Loading workouts…
                        </p>
                    )}

                    {/* Empty State */}
                    {!isLoading && workouts.length === 0 && (
                        <EmptyPlan></EmptyPlan>
                    )}

                    {/* Today's Plan */}
                    {!isLoading && activeTab === 'plan' && addToWorkout.length > 0 && (
                        <div className="space-y-3">
                            {addToWorkout.map((workout) => (
                                <PlanWorkoutCard
                                    key={workout.id}
                                    workout={workout}
                                    onMarkAsDone={handleMarkAsDone}
                                    onRemove={handleRemoveFromPlan}
                                ></PlanWorkoutCard>
                            ))}
                        </div>
                    )}

                    {/* Saved */}
                    {!isLoading && activeTab === 'saved' && saveForLater.length > 0 && (
                        <div className="space-y-3">
                            {saveForLater.map((workout) => (
                                <PlanWorkoutCard
                                    key={workout.id}
                                    workout={workout}
                                    onAddToPlan={addToPlan}
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

export default MyPlanPage;
