import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Button from '../styles/Button'

const Wrapper = styled.div`
    background: ${(props) => props.theme.black};
    min-height: 100vh;
    padding-bottom: 7rem;

    .cover {
        height: 170px;
    }

    .cover img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .header-tabs {
        padding: 1.2rem 1rem;
        background: ${(props) => props.theme.bg};
    }

    .header {
        width: 80%;
        display: flex;
        margin: 0px auto;
        justify-content: space-between;
        align-items: center;
    }

    .flex-row {
        display: flex;
        align-items: center;
    }

    .tabs,
    .tab {
        margin: 1.5rem auto 0px;
        width: 80%;
    }

    ul {
        list-style: none;
        display: flex;
        align-items: center;
    }

    li {
        margin-right: 2rem;
        text-transform: uppercase;
        letter-spacing: 1.1px;
    }
`;

class Channel extends Component {
    profile = {
        cover: "https://res.cloudinary.com/douy56nkf/image/upload/v1595745714/youtubeclone/ftmnvvz4esddth6tiu0g.jpg",
        avatar: "https://res.cloudinary.com/douy56nkf/image/upload/v1595745720/youtubeclone/hzn0dfdzdc61d5o6tw9a.jpg",
        username: "johnwick",
        subscribersCount: 31
    }
    render() {
        return (
            <Wrapper>
                <div className='cover'>
                    <img src={this.profile.cover} alt="channel-cover" />
                </div>
                <div className='header-tabs'>
                    <div className='header'>
                        <div className='flex-row'>
                            <img className='avatar lg' src={this.profile.avatar} alt="channel-avatar" />
                            <div>
                                <h3>{this.profile.username}</h3>
                                <span className='secondary'>
                                    {this.profile.subscribersCount} subscribers
                                </span>
                            </div>
                        </div>
                        <Button>Subscribe</Button>
                    </div>
                    <div className='tabs'>
                        <ul className='secondary'>
                            <li>Videos</li>
                            <li>Channel</li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Channel)
