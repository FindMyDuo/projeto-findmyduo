import React from 'react'
import { FormSearch } from './styles'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <FormSearch>
        <button title='SearchButton'>
            <SearchIcon />
        </button>
        <input type="text" placeholder='Pesquisar'/>
    </FormSearch>
  )
}

export default Search
