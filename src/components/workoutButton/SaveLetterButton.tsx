'use client';
import { ILibrary } from '@/type/library.type';
import { FaBookmark } from 'react-icons/fa';

const SaveLetterButton = ({workout}: {workout: ILibrary}) => {
    return (
        <div>
            <button
                type="button"
                className="flex h-10 items-center gap-2 rounded-lg border cursor-pointer border-[#3a3e47] bg-transparent px-5 text-[11px] font-medium text-white transition hover:bg-[#1b1e24]"
            >
                <FaBookmark className="text-[10px]" />
                Save for later
            </button>
        </div>
    );
};

export default SaveLetterButton;