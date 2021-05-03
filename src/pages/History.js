import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TrendingCard from '../components/TrendingCard';
import { fetchHistory } from '../store/actions'

export const StyledHistory = styled.div`
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


class History extends Component {
    componentDidMount() {
        this.props.fetchHistory()
    }

    render() {
        const { isFetching: isHistoryFetching, videos: historyVideos } = this.props.historyData

        if (isHistoryFetching) {
            return <div>Loading</div>
        }

        return (
            <StyledHistory>

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
            </StyledHistory>
        )
    }
}

const mapStateToProps = (state) => ({
    historyData: state.history,
})

const mapDispatchToProps = {
    fetchHistory,
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
