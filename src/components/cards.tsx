import Image from 'next/image';
import React from 'react';

const Cards = () => {
  return (
    <div className='ml-20'>
      <h1 className='mt-20 text-[30px] font-bold text-[#084c84]'>All Courses</h1>
      <div className='space-x-8'>
      <button>
      <div className='mt-4 justify-items-center justify-self-start bg-white drop-shadow-2xl shadow-black rounded-md transition-transform transform hover:scale-105 duration-300'>
        <Image src={'/images/1.jpg'} alt='1st' width={220} height={220} />
        <p className='mt-2 font-bold text-gray-600 pb-2'>
          Programming
          Fundamentals
        </p>
      </div>
      </button>
      <button>
      <div className='mt-4 justify-items-center justify-self-start bg-white drop-shadow-2xl shadow-black rounded-md transition-transform transform hover:scale-105 duration-300'>
        <Image src={'/images/2.jpg'} alt='1st' width={220} height={220} />
        <p className='mt-2 font-bold text-gray-600 pb-2'>
          Web2 Using NextJS
        </p>
      </div>
      </button>
      </div>
      <div className='space-x-8 space-y-5'>
      <button>
      <div className='mt-4 justify-items-center justify-self-start bg-white drop-shadow-2xl shadow-black rounded-md transition-transform transform hover:scale-105 duration-300'>
        <Image src={'/images/3.jpg'} alt='1st' width={220} height={220} />
        <p className='mt-2 font-bold text-gray-600 pb-2'>
          Earn as You Learn
        </p>
      </div>
      </button>
      <button>
      <div className='mt-4 justify-items-center justify-self-start bg-white drop-shadow-2xl shadow-black rounded-md transition-transform transform hover:scale-105 duration-300'>
        <Image src={'/images/4.jpg'} alt='1st' width={220} height={220} />
        <p className='mt-2 font-bold text-gray-600 pb-2'>
          Artificial Intelligence
        </p>
      </div>
      </button>
      <button>
      <div className='mt-4 justify-items-center justify-self-start bg-white drop-shadow-2xl shadow-black rounded-md transition-transform transform hover:scale-105 duration-300'>
        <Image src={'/images/5.jpg'} alt='1st' width={220} height={220} />
        <p className='mt-2 font-bold text-gray-600 pb-2'>
          Web 3 and Metaverse
        </p>
      </div>
      </button>
      </div>
    </div>
  );
};

export default Cards;
