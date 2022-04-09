import React, {useState} from 'react'

const Search_Bar = (props) => {

  const [term, setTerm] = useState("Search");
  return (
    <div>
        <input type="text" value={term} onChange={event => setTerm(event.target.value)} />
      
    </div>
  )
}

export default Search_Bar