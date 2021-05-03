import React from 'react'
import styled from 'styled-components'
import Avatar from '../styles/Avatar'
import { timeSince } from '../utils';

const VideoStyle = styled.div`

    .thumb {
        width: 100%;
        height: 180px;
        object-fit: cover;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px;
        border-radius: 4px;
    }

    .video-info-container {
        display: flex;
        margin-top: 0.3rem;
    }

    .video-info span {
        font-size: 0.9rem;
        padding-right: 0.1rem;
    }

    .channel-avatar img {
        margin-right: 0.8rem;
        position: relative;
        top: 5px;
    }

    @media screen and (max-width: 600px) {
        .thumb {
          height: 250px;
        }
      }
    
      @media screen and (max-width: 420px) {
        .thumb {
          height: 200px;
        }
      }
`;

const VideoCard = ({ video, hideAvatar, noUserName }) => {
    return (
        <VideoStyle>
            <img className='thumb' src={video.thumbnail} alt="" />
            <div className='video-info-container'>
                <div className='channel-avatar'>
                    {!hideAvatar && <Avatar src={video.User.avatar} />}
                </div>
                <div className='video-info'>
                    <h4>
                        {video.title.length > 40
                            ? video.title.substring(0, 40) + "..."
                            : video.title}
                    </h4>
                    <span className='secondary'>
                        {video.User.username}
                    </span>
                    <p className='secondary'>
                        <span>{video.views} views</span>
                        <span> • </span>
                        <span>{timeSince(video.createdAt)} ago</span>
                    </p>
                </div>
            </div>
        </VideoStyle>
    )
}

export default VideoCard
