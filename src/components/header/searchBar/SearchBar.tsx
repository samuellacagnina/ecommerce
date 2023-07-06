import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBar() {
  return (
    <div className="relative">
      <form action="">
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="p-4 rounded-3xl border-y-gray-300"
        />
      </form>
    </div>
  );
}

export default SearchBar;
