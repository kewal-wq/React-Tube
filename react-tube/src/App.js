import './App.css';
import YTSearch from "youtube-api-search"
import SearchBar from "./components/SearchBar";


const API_KEY = 'AIzaSyD_mL19wIimowe8coeimXHYmi6snFXNMMY';

YTSearch({key: API_KEY, term: "Surfing"}, function(data) {
  console.log(data)
})

function App() {
  return (
    <div>
    <SearchBar/>
    </div>
  );
}

export default App;
