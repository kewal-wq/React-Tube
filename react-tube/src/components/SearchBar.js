import React, {useState} from 'react';
import "../Styles/SearchBar.css"

const Search_Bar = (props) => {
const searchChange = props.term;
  const [term, setTerm] = useState("");

  const handleChange = (term) => {
    setTerm(term);
    searchChange(term);
  }

  return (
    <div className='search-input-flex'>
        <input className='search-input' type="text" value={term} onChange={event => handleChange(event.target.value)} />
      
    </div>
  )
}

export default Search_Bar