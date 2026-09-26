'use client';

import { WorkoutContext } from '@/context/WorkOutContext';
import { ILibrary } from '@/type/library.type';
import { useContext } from 'react';
import { FaBookmark } from 'react-icons/fa';

const SaveLetterButton = ({ workout }: { workout: ILibrary }) => {
    const workoutContext = useContext(WorkoutContext);

    if (!workoutContext) {
        throw new Error('WorkoutContext is not available');
    }

    const { saveWorkout } = workoutContext;

    return (
        <button
            type="button"
            onClick={() => saveWorkout(workout)}
            className="flex h-10 cursor-pointer items-center gap-2 rounded-lg border border-[#3a3e47] bg-transparent px-5 text-[11px] font-medium text-white transition hover:bg-[#1b1e24]"
        >
            <FaBookmark className="text-[10px]" />
            Save for later
        </button>
    );
};

export default SaveLetterButton;
