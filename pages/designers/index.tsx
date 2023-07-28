import Link from 'next/link';
import React from 'react';

export const Designers = () => {
  return (
    <div className="grid grid-cols-2 mt-36 w-4/5 mx-auto">
      <div className="flex flex-col gap-8">
        <h3>For Designers</h3>
        <h1 className="text-2xl">Join the world’s best creative community</h1>
        <p>
          Build your brand, grow your skills, and land your dream projects all
          on Dribbble.
        </p>
        <div className="flex gap-8">
          <button>Try Pro For Free</button>
          <Link href="/">Hire Designers</Link>
        </div>
      </div>
      <div>
        <img
          src="https://framerusercontent.com/images/oHWBQ3m2oZWMapz6XUB87ec4bnQ.jpeg?scale-down-to=1024"
          alt="Scale-down-image"
        />
      </div>
    </div>
  );
};

export default Designers;
