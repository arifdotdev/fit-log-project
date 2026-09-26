'use client';
import { ILibrary } from '@/type/library.type';
import { FaCalendarCheck } from 'react-icons/fa';

const AddToPlanButton = ({workout}: {workout: ILibrary}) => {
    return (
        <div>
            <button
                type="button"
                className="flex h-10 items-center cursor-pointer gap-2 rounded-lg bg-[#baff00] px-5 text-[11px] font-bold text-black transition hover:bg-[#ceff45]"
            >
                <FaCalendarCheck className="text-[11px]" />
                Add to today's plan
            </button>
        </div>
    );
};

export default AddToPlanButton;