import React from 'react'
import VideoListItems from "./VideoListItem"
import "../Styles/VideoList.css";

const VideoList = (props) => {
    if(!props.videos){
        return(
            <div>Loading...</div>
        )
    }
    
    const videoItems = props.videos.map((video) => {
        return <VideoListItems onVideoSelect = {props.onVideoSelect} key={video.etag} video = {video}/>
    })

  return (
    
    <div>
    <ul className='all-videoItems'>
        {videoItems}
    </ul>
       
    </div>
  )
}

export default VideoList