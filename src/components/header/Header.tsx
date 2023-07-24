import Logo from './Logo/Logo';
import Menu from '../Header/Menu/Menu';
import SearchBar from '../Header/SearchBar/SearchBar';
import Profile from '../Header/Profile/Profile';
import SignIn from '../SignIn/SignIn';

function Header() {
  return (
    <>
      <div className="flex p-8 justify-between items-center w-full">
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
