import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/banner.png'

const Banner = () => {
    return (
        <div className='container mx-auto flex '>
            <div className='w-6/12 '>
                <h4>WORKOUT LIBRARY</h4>
                <h1>TRAIN WITH INTENT. LOG EVERY SET.</h1>
                <p>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                <button>Brows Workout</button>
            </div>
            <div className='w-6/12'><Image src={bannerImg} width={100} height={100} alt=''></Image></div>
        </div>
    );
};

export default Banner;