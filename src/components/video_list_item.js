import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (

        <li  onClick={() => onVideoSelect(video)} className="list-group-item card-1">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" alt="imageUrl" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading"> {video.snippet.title} </div>
                </div>
            </div>

        </li>
    );
};

export default VideoListItem;