import React from 'react';
import { ILibrary } from '@/type/library.type';

interface workOutDetailsPageProps {
    params: Promise<{
        workoutId: string;
    }>;
}

const getWorkoutDetails = async (): Promise<ILibrary[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {cache: 'no-store'});
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};

const WorkOutDetailsPage = async ({params}: workOutDetailsPageProps) => {
    const { workoutId } = await params;

    const workoutDetails = await getWorkoutDetails();

    const workout = workoutDetails.find((workout) => workout.id === parseInt(workoutId));
    console.log('Workout details:', workoutId, workout);

    return (
        <div>
            <h1>{workout?.name}</h1>
            <p>{workout?.description}</p>
        </div>
    );
};

export default WorkOutDetailsPage;