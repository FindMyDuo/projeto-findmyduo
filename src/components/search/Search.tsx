import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { FormSearch } from "./styles";
import { ChatContext } from "../../contexts/ChatContext/ChatContext";

const Search = () => {
  const { setSearchName, handleSubmitSearch, handleKey, user, handleSelect } =
    useContext(ChatContext);

  return (
    <FormSearch onSubmit={handleSubmitSearch}>
      <button title="SearchButton">
        <SearchIcon />
      </button>
      <input
        type="text"
        placeholder="Pesquisar"
        onKeyDown={handleKey}
        onChange={(e) => setSearchName(e.target.value)}
      />
      {user && (
        <div onClick={() => handleSelect}>
          <img src="" alt="" />
          <div>
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </FormSearch>
  );
};

export default Search;
