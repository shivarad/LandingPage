import searchIcon from "../../SvgFiles/searchIcon.svg";
import { SearchBox } from "./searchInputStyles";

const SearchInput = () => {
  return (
    <SearchBox>
      <img
        src={searchIcon}
        alt="search"
        style={{ padding: "8px", height: "33px" }}
      />
      <input
        style={{
          border: "none",
          background: "transparent",
          height: "100%",
          color: "rgba(255, 255, 255, 0.5)",
          width: "90%",
          outline: "none",
        }}
        placeholder="Search"
      />
    </SearchBox>
  );
};

export default SearchInput;
