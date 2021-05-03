import React, { Component } from 'react'
import { connect } from 'react-redux'
import { api } from '../api'
import styled, { css } from 'styled-components'
import Player from '../components/Player';
import { LikeIcon, DislikeIcon } from "../components/Icons";
import { timeSince } from "../utils";
import Button from "../styles/Button";
import { Link } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import {
    like,
    dislike,
    cancelLike,
    clearVideo,
    fetchVideo,
    cancelDislike,
    getRecommendation,
    handleSubscribeFromVideo,
} from '../store/actions'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 70% 1fr;
    gap: 2rem;
    padding: 1.3rem 1.3rem 7rem;

    .video-container .video-info {
        margin: 1rem 0
    }

    .video-info-stats {
        display: flex;
        align-items: center;
    }

    .video-info-stats div {
        margin-left: 6rem;
        position: relative;
        top: -2px;
    }
    .channel-info-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .channel-info-flex button {
        font-size: 0.9rem;
    }
    .channel-info-description {
        padding-top: 1rem;
        border-bottom: 1px solid ${(props) => props.theme.darkGrey};
        border-top: 1px solid ${(props) => props.theme.darkGrey};
    }
    
    .channel-info-description p {
        font-size: 0.9rem;
        padding: 1rem 0;
    }

    
    .related-videos div {
        margin-bottom: 1rem;
    }
    
    svg {
        fill: ${(props) => props.theme.darkGrey};
    }
    
    ${(props) =>
        props.filledLike &&
        css`
        .like svg {
            fill: ${(props) => props.theme.blue};
        }
    `}
    
    ${(props) =>
        props.filledDislike &&
        css`
        .dislike svg {
            fill: ${(props) => props.theme.blue};
        }
    `}
    
    @media screen and (max-width: 930px) {
        grid-template-columns: 90%;
        .related-videos {
            display: none;
        }
    }
    
    @media screen and (max-width: 930px) {
        grid-template-columns: 1fr;
    }
    
    @media screen and (max-width: 425px) {
        .video-info-stats div {
            margin-left: 1rem;
        }
    }
`;

class WatchVideo extends Component {
    videoId = this.props.match.params.id;

    componentDidMount() {
        this.props.fetchVideo(this.videoId)
        this.props.getRecommendation()
    }

    componentWillUnmount() {
        this.props.clearVideo()
    }

    componentDidUpdate(prevProps) {
        this.videoId = this.props.match.params.id
        if (prevProps.match.params.id !== this.videoId) {
            this.props.clearVideo()
            this.props.fetchVideo(this.videoId)
            this.props.getRecommendation()
        }
    }

    handleLike = async (video) => {
        if (video.isLiked) {
            this.props.cancelLike()
        }
        else {
            this.props.like()
        }

        if (video.isDisliked) {
            this.props.cancelDislike()
        }

        await api.get(`/videos/${video.id}/like`)
    }


    handleDislike = async (video) => {
        if (video.isDisliked) {
            this.props.cancelDislike()
        }
        else {
            this.props.dislike()
        }

        if (video.isLiked) {
            this.props.cancelLike()
        }

        await api.get(`/videos/${video.id}/dislike`)
    }

    handleSubscribe = async (channelId) => {
        this.props.handleSubscribeFromVideo()
        await api.get(`/users/${channelId}/togglesubscribe`)
    }


    render() {
        const { video, isFetching } = this.props.video
        const { videos: next, isFetching: recommendationFetching } = this.props.recommendation

        if (isFetching || recommendationFetching) return <div>Loading</div>

        return (
            <Wrapper
                filledLike={video && video.isLiked}
                filledDislike={video && video.isDisliked}
            >
                <div className='video-container'>
                    <div className='video'>{<Player poster={video.thumbnail} src={video.url} />}</div>
                    <div className='video-info'>
                        <h3>{video.title}</h3>

                        <div className="video-info-stats">
                            <p>
                                <span>{video.views} views</span> <span>•</span>{" "}
                                <span>{timeSince(video.createdAt)} ago</span>
                            </p>

                            <div className="likes-dislikes flex-row">
                                <p className="flex-row like">
                                    <LikeIcon onClick={() => this.handleLike(video)} />{" "}
                                    <span>{video.likesCount}</span>
                                </p>
                                <p className="flex-row dislike" style={{ marginLeft: "1rem" }}>
                                    <DislikeIcon onClick={() => this.handleDislike(video)} />{" "}
                                    <span>{video.dislikesCount}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="channel-info-description">
                        <div className="channel-info-flex">
                            <div className="channel-info flex-row">
                                <img
                                    className="avatar md"
                                    src={video.User?.avatar}
                                    alt="channel avatar"
                                />
                                <div className="channel-info-meta">
                                    <h4>
                                        <Link to={`/channel/${video.userId}`}>
                                            {video.User.username}
                                        </Link>
                                    </h4>
                                    <span className="secondary small">
                                        {video.subscribersCount} subscribers
                                    </span>
                                </div>
                            </div>
                            {!video.isVideoMine && !video.isSubscribed && (
                                <Button onClick={() => this.handleSubscribe(video.userId)}>
                                    Subscribe
                                </Button>
                            )}
                            {!video.isVideoMine && video.isSubscribed && (
                                <Button grey onClick={() => this.handleSubscribe(video.userId)}>
                                    Subscribed
                                </Button>
                            )}
                        </div>

                        <p>{video.description}</p>
                    </div>
                </div>
                <div className="related-videos">
                    <h3 style={{ marginBottom: "1rem" }}>Up Next</h3>
                    {next
                        .filter((vid) => vid.id !== video.id)
                        .slice(0, 4)
                        .map((video) => (
                            <Link key={video.id} to={`/watch/${video.id}`}>
                                <VideoCard key={video.id} hideAvatar={true} video={video} />
                            </Link>
                        ))}
                </div>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return { video: state.video, recommendation: state.recommendation }
}

const mapDispatchToProps = {
    like,
    dislike,
    cancelLike,
    clearVideo,
    fetchVideo,
    cancelDislike,
    getRecommendation,
    handleSubscribeFromVideo,
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchVideo)
