import { ILibrary } from '@/type/library.type';
import React from 'react';
import WorkOutCard from '../shared/WorkOutCard';

const getLibrariesData = async (): Promise<ILibrary[]> => {
    try {
        const res = await fetch('https://api.api-store.workers.dev/api/fitlog', {
            cache: 'no-store',
        });

        if (!res.ok) {
            console.error(
                `Failed to fetch libraries: ${res.status} ${res.statusText}`
            );
            return [];
        }

        const data = await res.json();

        // Make sure the API response is an array
        if (!Array.isArray(data)) {
            console.error('API response is not an array:', data);
            return [];
        }

        return data;
    } catch (error) {
        console.error('Error fetching libraries:', error);
        return [];
    }
};

const Libraries = async () => {
    const librariesData = await getLibrariesData();

    return (
        <div className="container mx-auto px-4 py-10" id="library">
            <h2 className="text-3xl font-bold">The Library</h2>

            <p className="mt-2 text-gray-400">
                Twelve lifts covering every major muscle group.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {librariesData.length > 0 ? (
                    librariesData.map((library: ILibrary) => (
                        <WorkOutCard
                            key={library.id}
                            library={library}
                        />
                    ))
                ) : (
                    <p className="col-span-full py-10 text-center text-gray-400">
                        No workouts available.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Libraries;