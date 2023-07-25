import React from 'react';
import { useState, ChangeEvent } from 'react';

const SignIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    setIsOpen(true);
  };

  const handleSignInLeave = () => {
    setIsOpen(false)
  }

  const handleUserName = (e: ChangeEvent<HTMLInputElement>) => {
    const user = e.target.value;
    setUserName(user);
    
  };
  console.log("username:", userName);
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const psw = e.target.value;
    setPassword(psw);
    console.log(password);
  };

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
            onChange={handleUserName}
          />
          <input
            type="password"
            placeholder="Insert Password"
            onChange={handlePassword}
          />
          <button>Sign in</button>
        </div>
      )}
    </div>
  );
};

export default SignIn;
