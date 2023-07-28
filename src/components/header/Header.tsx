import Logo from './Logo/Logo';
import Menu from '../Header/Menu/Menu';
import SearchBar from '../Header/SearchBar/SearchBar';
import Profile from '../Header/Profile/Profile';
import SignIn from './SignIn/SignIn';
import { Banner } from '../Banner/Banner';

function Header() {
  return (
    <>
      <div className="flex p-8 justify-between items-center w-full border border-red-500">
        <Menu />
        <Logo />

        <div className="flex space-x-6 items-center">
          <SearchBar />
          <SignIn />
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Header;
