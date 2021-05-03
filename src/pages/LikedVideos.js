import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TrendingCard from '../components/TrendingCard';
import { fetchLikedVideos } from '../store/actions'

export const StyledLikedVideos = styled.div`
  padding: 1rem 1.3rem;
  width: 85%;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 7rem;
  padding-bottom: ${(props) => (props.nopad ? "0.5rem" : "7rem")};

  @media screen and (max-width: 930px) {
    width: 95%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;


class LikedVideos extends Component {
    componentDidMount() {
        this.props.fetchLikedVideos()
    }

    render() {
        const { isFetching: islikedVideosFetching, videos: likedVideos } = this.props.likedVideosData

        if (islikedVideosFetching) {
            return (
                <div>Loading</div>
            )
        }
        return (
            <StyledLikedVideos>
                <h2>Liked Videos</h2>
                {likedVideos.length === 0 &&
                    <p className='secondary'>Videos that you have liked will show up here</p>
                }
                <div >
                    {!islikedVideosFetching &&
                        likedVideos.map((video) => (
                            <Link to={`/watch/${video.id}`} key={video.id}>
                                <TrendingCard video={video} />
                            </Link>
                        ))
                    }
                </div>
            </StyledLikedVideos>
        )
    }
}

const mapStateToProps = (state) => ({
    likedVideosData: state.likedVideos,
})

const mapDispatchToProps = {
    fetchLikedVideos,
}

export default connect(mapStateToProps, mapDispatchToProps)(LikedVideos)
