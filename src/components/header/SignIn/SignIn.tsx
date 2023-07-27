import Link from 'next/link';
import React from 'react';
import { useState, ChangeEvent } from 'react';
import { useAuthContext } from '../../../context/AuthContext';

const SignIn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const{handleUserName} = useAuthContext()


  const handleSignIn = () => {
    setIsOpen(true);
  };

  const handleSignInLeave = () => {
    setIsOpen(false)
  }

 return (
    <div
      className="relative"
      onMouseEnter={handleSignIn}
      onMouseLeave={handleSignInLeave}
    >
      <p>Sign In</p>
      {isOpen && (
        <div className="absolute top-full right-2 z-10 border border-r-purple-800 flex flex-col p-4 gap-4 w-80 h-70 bg-[#fff]">
          <input
            type="text"
            placeholder="UserName"
            
            onChange={handleUserName}
          />
          <input
            type="password"
            placeholder="Insert Password"
          />
          <Link href="/login">Sign In</Link>
        </div>
      )}
    </div>
  );
};

export default SignIn;
