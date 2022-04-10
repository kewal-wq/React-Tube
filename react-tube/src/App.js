import {useState, useEffect} from "react";
import './App.css';
import _ from "lodash";
import YTSearch from "youtube-api-search"
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";


const API_KEY = 'AIzaSyBQBoumxCef_NNyIrpwy6GV3RSTiWFTXI8';



function App() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  const [term, setTerm] = useState("");

  useEffect(() => {
    
      YTSearch({key: API_KEY, term: term},(data) => {
    setVideos(data);
    console.log(data)
  })

  console.log(term)

  }, [term])
  
const videoSearch = _.debounce((term) => setTerm(term), 300)

  
  return (
    <div>
    <SearchBar term = {videoSearch}/>
    <VideoDetail video = {!selectedVideo ? videos[0] : selectedVideo}/>
    <VideoList onVideoSelect = {video => setSelectedVideo(video)} videos = {videos}/>
    </div>
  );
}

export default App;
