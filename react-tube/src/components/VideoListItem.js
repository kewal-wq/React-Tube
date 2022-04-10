import React from 'react';
import "../Styles/VideoListItem.css";

const VideoListItem = (props) => {
    const selectedVideo = props.onVideoSelect;
    const video = props.video;
    const imageUrl = props.video.snippet.thumbnails.default.url;

  return (
    
    <li onClick={() => selectedVideo(video)} className='listOfVideos'>
        <div className='video-image'>
            <img src={imageUrl} alt="Video" />
        </div>
        <div className='video-titlee'>
            {props.video.snippet.title}
        </div>
    </li>

  )
}

export default VideoListItem