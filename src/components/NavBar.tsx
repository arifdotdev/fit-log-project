'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';
import logoImg from '@/assets/logo.png';
import { WorkoutContext } from '@/context/WorkOutContext';

const NavBar = () => {
    const workoutContext = useContext(WorkoutContext);

    if (!workoutContext) {
        throw new Error('WorkoutContext is not available');
    }

    const { addToWorkout, saveForLater } = workoutContext;

    const planCount = addToWorkout.length;
    const savedCount = saveForLater.length;

    const pathname = usePathname();

    const isWorkoutsActive = pathname === '/' || pathname.startsWith('/workout');
    const isMyPlanActive = pathname.startsWith('/my-plan');

    const activeClass =
        'rounded-full bg-[#C2F800] px-4 py-2 text-sm font-medium text-[#1A2312]';
    const inactiveClass =
        'px-4 py-2 text-sm font-medium opacity-70 transition hover:opacity-100';

    const links = (
        <>
            <Link
                href="/"
                className={isWorkoutsActive ? activeClass : inactiveClass}
            >
                Workouts
            </Link>

            <Link
                href="/my-plan"
                className={isMyPlanActive ? activeClass : inactiveClass}
            >
                My Plan
            </Link>
        </>
    );

    return (
        <div className='bg-base-10 border border-base-300 bg-base-100 px-5 shadow-sm'>
            <div className="container mx-auto 0 px-1 py-1">
                <nav className="navbar min-h-[70px] ">

                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-sm lg:hidden"
                            >
                                <svg
                                    aria-label="Menu"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>

                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg"
                            >
                                {links}
                            </ul>
                        </div>

                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src={logoImg}
                                width={32}
                                height={32}
                                alt="Fitlog"
                            />

                            <span className="text-lg font-bold tracking-wide">
                                FITLOG
                            </span>
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <div className="flex items-center gap-1">
                            {links}
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="flex items-center gap-2">

                            {/* Plan badge: filled pill with accent background */}
                            <Link
                                href="/my-plan"
                                className="inline-flex items-center gap-1.5 rounded-full bg-[#C2F800] px-3 py-1 text-xs font-semibold text-[#1A2312] transition hover:brightness-95"
                            >
                                <span>Plan</span>
                                <span className="font-bold">{planCount}</span>
                            </Link>

                            {/* Saved badge: outline pill */}
                            <Link
                                href="/my-plan?tab=saved"
                                className="inline-flex items-center gap-1.5 rounded-full border border-base-content/30 px-3 py-1 text-xs font-semibold transition hover:border-base-content/60"
                            >
                                <span>Saved</span>
                                <span className="font-bold">{savedCount}</span>
                            </Link>

                        </div>
                    </div>

                </nav>
            </div>
        </div>
    );
};

export default NavBar;