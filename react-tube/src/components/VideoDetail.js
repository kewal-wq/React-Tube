import React from 'react';
import '../Styles/VideoDetail.css'

const VideoDetail = (props) => {
    console.log(props)
if(!props.video)
{
    return(
        <div>Loading...</div>
        
    )
}
    const videoId = props.video.id.videoId;
    const YTurl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div>
        <div className='iframe-flex'>
            <iframe className='iframe' src={YTurl} title={props.video.snippet.title}></iframe>
        </div>
        <div className='video-title-flex'>
            <div className='video-title'>{props.video.snippet.title}</div>
        </div>
        <div className='video-description-flex'>
           <div className='video-description'> {props.video.snippet.description}  </div>
        </div>
    </div>
  )
}

export default VideoDetail