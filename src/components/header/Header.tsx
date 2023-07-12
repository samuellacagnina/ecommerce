import Logo from './logo/Logo';
import Menu from './menu/Menu';
import SearchBar from './searchBar/SearchBar';
import Profile from './profile/Profile';

function Header() {
  return (
    <>
      <div className="flex p-8 justify-between items-center w-full">
        <Menu />
        <Logo />
        <div className="flex space-x-6 items-center">
          <SearchBar />
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Header;
