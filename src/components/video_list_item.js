import React from 'react';

const VideoListItem =({video, onVideoSelect}) => {
  // const VideoListItem =(props) => {
  // const video =props.video; <=> {video}=the first object in the argument array has a property video and pls grab it a declare in a new variable called video.
  //console.log(video);
  const  imageUrl= video.snippet.thumbnails.default.url;

    return (
    <li onClick ={()=> onVideoSelect(video)} className="list-group-item">
     <div className="video-list media">
       <div className="media-left">
           <img className ="media-object" src={imageUrl}/>
       </div>
       <div className="media-body">
          <div className="media-heading"> {video.snippet.title}
           </div>
       </div>
     </div>
    </li>
  );
};

export default VideoListItem;
