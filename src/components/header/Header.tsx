import Logo from './logo/Logo';
import Menu from './menu/Menu';
import Profile from './profile/Profile';
import SearchBar from './searchBar/SearchBar';

function Header() {
  return (
    <div className="flex p-8 justify-between items-center w-full">
      <Menu />
      <Logo />
      <div className="flex space-x-6 items-center">
        <SearchBar />
        <Profile />
      </div>
    </div>
  );
}

export default Header;
