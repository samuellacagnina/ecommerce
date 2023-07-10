import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBar() {
  return (
    <div className="relative">
      <form action="">
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-7">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="p-4 rounded-3xl bg-[#f4f5fb] indent-9 h-12 focus:outline-none"
        />
      </form>
    </div>
  );
}

export default SearchBar;
