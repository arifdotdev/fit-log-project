import { ILibrary } from '@/type/library.type';
import React from 'react';

const getLibrariesData = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {cache: 'no-store'});
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data;
}

const Libraries = async() => {
    const librariesData = await getLibrariesData();
    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className='text-3xl font-bold'>The Library</h2>
            <p>Twelve lifts covering every major muscle group.</p>
            <div>
                {
                    librariesData.map((library: ILibrary) => <li key={library.id}>{library.name}</li>)
                }
            </div>
        </div>
    );
};

const getLibraries = async () => {
    const res = await fetch('https://fit-log.vercel.app/api/libraries')
}

export default Libraries;