'use client';

import { WorkoutContext } from '@/context/WorkOutContext';
import { ILibrary } from '@/type/library.type';
import { useContext } from 'react';
import { FaCalendarCheck } from 'react-icons/fa';

const AddToPlanButton = ({ workout }: { workout: ILibrary }) => {
    const workoutContext = useContext(WorkoutContext);

    if (!workoutContext) {
        throw new Error('WorkoutContext is not available');
    }

    const { addToPlan } = workoutContext;

    return (
        <button
            type="button"
            onClick={() => addToPlan(workout)}
            className="flex h-10 cursor-pointer items-center gap-2 rounded-lg bg-[#baff00] px-5 text-[11px] font-bold text-black transition hover:bg-[#ceff45]"
        >
            <FaCalendarCheck className="text-[11px]" />
            Add to today&apos;s plan
        </button>
    );
};

export default AddToPlanButton;
