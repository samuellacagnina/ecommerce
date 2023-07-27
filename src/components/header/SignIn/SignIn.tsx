import Link from 'next/link';
import React from 'react';
import { useState, ChangeEvent } from 'react';
import { useAuthContext } from '../../../context/AuthContext';

const SignIn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const{handleUserName,userName} = useAuthContext()

  const handleSignIn = () => {
    setIsOpen(true);
  };

  const handleSignInLeave = () => {
    setIsOpen(false)
  }

  console.log('UserName in SignIn component:', userName);


  return (
    <div
      className="relative"
      onMouseEnter={handleSignIn}
      onMouseLeave={handleSignInLeave}
    >
      <p>Sign In</p>
      {isOpen && (
        <div className="absolute top-full left-0 z-10 border border-r-purple-800 flex flex-col p-4">
          <input
            type="text"
            placeholder="UserName"
            value={userName}
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
