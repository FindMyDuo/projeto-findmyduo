import SearchIcon from "@mui/icons-material/Search";
import { FormSearch } from "./styles";

const Search = () => {
  return (
    <FormSearch>
      <button title="SearchButton">
        <SearchIcon />
      </button>
      <input type="text" placeholder="Pesquisar" />
    </FormSearch>
  );
};

export default Search;
