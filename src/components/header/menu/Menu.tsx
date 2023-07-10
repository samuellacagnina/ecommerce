import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-h-6">
      <button
        onClick={handleMenu}
        className="md:hidden"
      >
        <FontAwesomeIcon icon={faBurger} />
      </button>
      <nav className="w-full">
        <ul
          className={`md:flex w-full absolute space-x-2 font-bold text-sm ${
            isOpen ? 'block ' : 'hidden md:flex'
          }`}
        >
          <li>
            <Link href="/">Find Talent</Link>
          </li>
          <li>
            <Link href="/about">For Designers</Link>
          </li>
          <li>
            <Link href="/">Inspiration</Link>
          </li>
          <li>
            <Link href="/">Learn Design</Link>
          </li>
          <li className="text-pink-400">
            <Link href="/">Go Pro</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
