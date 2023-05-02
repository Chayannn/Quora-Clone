import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <div className=" Search-Icon border py-1.5 rounded ">
    <SearchIcon />
    <input
      className="px-1 outline-none"
      type="text"
      placeholder="Search Quora"
    />
  </div>
  )
}

export default SearchBar