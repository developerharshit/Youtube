import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TrendingCard from '../components/TrendingCard';
import { fetchTrending } from '../store/actions'

export const StyledTrending = styled.div`
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

class Trending extends Component {

    componentDidMount() {
        this.props.fetchTrending()
    }

    render() {
        const { isFetching, videos } = this.props.videosData
        if (isFetching) {
            return <div>Loading</div>
        }
        return (
            <StyledTrending>
                <h2>Trending</h2>
                <div className='trending'>
                    {!isFetching &&
                        videos.map((video) => (
                            <Link to={`/watch/${video.id}`} key={video.id}>
                                <TrendingCard video={video} />
                            </Link>
                        ))
                    }
                </div>
            </StyledTrending>
        )
    }
}

const mapStateToProps = (state) => ({
    videosData: state.trending
})

const mapDispatchToProps = {
    fetchTrending
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending)

