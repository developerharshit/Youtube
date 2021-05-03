import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import VideoCard from '../components/VideoCard';
import { getRecommendation } from '../store/actions'
import VideoGrid from '../styles/VideoGrid';

export const StyledHome = styled.div`
  padding: 1.3rem;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 7rem;

  h2 {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1093px) {
    width: 95%;
  }

  @media screen and (max-width: 1090px) {
    width: 99%;
  }

  @media screen and (max-width: 870px) {
    width: 90%;
  }

  @media screen and (max-width: 670px) {
    width: 99%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  @media screen and (max-width: 530px) {
    width: 100%;
  }
`;

export class Home extends Component {

  componentDidMount() {
    this.props.getRecommendation()
  }

  render() {
    const { isFetching, videos } = this.props.videos

    if (isFetching) {
      return <div>Loading</div>
    }

    return (
      <StyledHome>
        <h2>Recommended</h2>
        <VideoGrid>
          {!isFetching &&
            videos.map((video) => {
              return (
                <Link key={video.id} to={`/watch/${video.id}`}>
                  <VideoCard video={video} />
                </Link>
              )
            })
          }
        </VideoGrid>
      </StyledHome>
    )
  }
}

const mapStateToProps = (state) => {
  return { videos: state.recommendation }
}

const mapDispatchToProps = {
  getRecommendation
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
