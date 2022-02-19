import searchIcon from "../../SvgFiles/searchIcon.svg";
import { SearchBox,InputText } from "./searchInputStyles";

const SearchInput = () => {
  return (
    <SearchBox>
      <img
        src={searchIcon}
        alt="search"
        style={{ padding: "8px", height: "33px" }}
      />
      <InputText
        placeholder="Search"
      />
    </SearchBox>
  );
};

export default SearchInput;
