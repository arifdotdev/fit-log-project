import { ILibrary } from '@/type/library.type';

const API_URL = 'https://api.api-store.workers.dev/api/fitlog';

export const getWorkouts = async (): Promise<ILibrary[]> => {
    const res = await fetch(API_URL, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch workouts (status ${res.status})`);
    }

    return res.json();
};
