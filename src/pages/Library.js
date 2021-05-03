import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TrendingCard from '../components/TrendingCard';
import { fetchHistory, fetchLikedVideos } from '../store/actions'

export const StyledLibrary = styled.div`
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


class Library extends Component {
    componentDidMount() {
        this.props.fetchHistory()
        this.props.fetchLikedVideos()
    }

    render() {
        const { isFetching: isHistoryFetching, videos: historyVideos } = this.props.historyData
        const { isFetching: islikedVideosFetching, videos: likedVideos } = this.props.likedVideosData

        if (isHistoryFetching || islikedVideosFetching) {
            return <div>Loading</div>
        }

        return (
            <StyledLibrary>

                <h2>History</h2>
                {historyVideos.length === 0 &&
                    <p className='secondary'>Videos that you have seen will show up here</p>
                }
                <div>
                    {!isHistoryFetching &&
                        historyVideos.map((video) => (
                            <Link to={`/watch/${video.id}`} key={video.id}>
                                <TrendingCard video={video} />
                            </Link>
                        ))
                    }
                </div>


                <h2 style={{ marginTop: '5rem' }} >Liked Videos</h2>
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
            </StyledLibrary>
        )
    }
}

const mapStateToProps = (state) => ({
    historyData: state.history,
    likedVideosData: state.likedVideos,
})

const mapDispatchToProps = {
    fetchLikedVideos,
    fetchHistory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Library)
