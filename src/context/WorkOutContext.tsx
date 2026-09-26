'use client';

import { ILibrary } from '@/type/library.type';
import {
    createContext,
    ReactNode,
    useEffect,
    useState,
} from 'react';
import { toast } from 'react-toastify';

const PLAN_LIMIT = 5;

interface WorkoutContextType {
    addToWorkout: ILibrary[];
    setAddToWorkout: React.Dispatch<React.SetStateAction<ILibrary[]>>;
    saveForLater: ILibrary[];
    setSaveForLater: React.Dispatch<React.SetStateAction<ILibrary[]>>;
    isLoading: boolean;
    addToPlan: (workout: ILibrary) => void;
    saveWorkout: (workout: ILibrary) => void;
}

export const WorkoutContext = createContext<WorkoutContextType | null>(null);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
    const [addToWorkout, setAddToWorkout] = useState<ILibrary[]>([]);
    const [saveForLater, setSaveForLater] = useState<ILibrary[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    /* eslint-disable react-hooks/set-state-in-effect */
    useEffect(() => {
        const storedPlan = localStorage.getItem('fitlog-plan');
        const storedSaved = localStorage.getItem('fitlog-saved');

        if (storedPlan) {
            setAddToWorkout(JSON.parse(storedPlan));
        }

        if (storedSaved) {
            setSaveForLater(JSON.parse(storedSaved));
        }

        setIsLoading(false);
    }, []);
    /* eslint-enable react-hooks/set-state-in-effect */

    useEffect(() => {
        if (isLoading) return;

        localStorage.setItem('fitlog-plan', JSON.stringify(addToWorkout));
        localStorage.setItem('fitlog-saved', JSON.stringify(saveForLater));
    }, [addToWorkout, saveForLater, isLoading]);

    const addToPlan = (workout: ILibrary) => {
        if (addToWorkout.some((item) => item.id === workout.id)) {
            toast.info('Workout is already in your plan!');
            return;
        }

        if (addToWorkout.length >= PLAN_LIMIT) {
            toast.warn("Today's plan is full. Finish a lift, then load more!");
            return;
        }

        setAddToWorkout([...addToWorkout, workout]);
        toast.success("Workout added to today's plan!");
    };

    const saveWorkout = (workout: ILibrary) => {
        if (saveForLater.some((item) => item.id === workout.id)) {
            toast.info('Workout is already saved!');
            return;
        }

        setSaveForLater([...saveForLater, workout]);
        toast.success('Workout saved for later!');
    };

    return (
        <WorkoutContext.Provider
            value={{
                addToWorkout,
                setAddToWorkout,
                saveForLater,
                setSaveForLater,
                isLoading,
                addToPlan,
                saveWorkout,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;
