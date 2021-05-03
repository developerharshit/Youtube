import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components'

import {
    HomeIcon,
    TrendingIcon,
    SubIcon,
    LibIcon,
    HistoryIcon,
    VidIcon,
    LikeIcon,
} from "./Icons";

const SidebarWrapper = styled.div`
    position: fixed;
    top: 55px;
    left: 0px;
    height: 100vh;
    width: 240px;
    background: ${(props) => props.theme.grey};
    padding-top: 1rem;
    overflow: auto;
    padding-bottom: 1.5rem;
    transition: all 0.3s ease 0s;
    z-index: 2;

    .icon {
        display: flex;
        align-items: center;
        padding: 0.2rem 0px 0.2rem 1.5rem;
        margin-bottom: 0.4rem;
    }

    .icon span {
        padding-left: 1rem;
        position: relative;
        top: 1px;
    }

    .icon:not(.hover-disable):hover {
        background: ${(props) => props.theme.darkGrey};
        cursor: pointer;
    }

    .active div {
        background: ${(props) => props.theme.darkGrey};
        cursor: pointer;
    }

    @media screen and (max-width: 1093px) {
        transform: translateX(-100%);
    
        ${(props) =>
        props.open &&
        css`
                transform: translateX(0);
            `
    }
    }

`;

export default class Sidebar extends Component {
    render() {
        return (
            <SidebarWrapper>
                <NavLink exact to='/'>
                    <div className='icon'>
                        <HomeIcon />
                        <span>Home</span>
                    </div>
                </NavLink>

                <NavLink to='/feeds/trending'>
                    <div className='icon'>
                        <TrendingIcon />
                        <span>Trending</span>
                    </div>
                </NavLink>
                <NavLink to='/subs'>
                    <div className='icon'>
                        <SubIcon />
                        <span>Subscriptions</span>
                    </div>
                </NavLink>
                <div className='ruler'></div>
                <NavLink to='/feeds/library'>
                    <div className='icon'>
                        <LibIcon />
                        <span>Library</span>
                    </div>
                </NavLink>
                <NavLink to='/feeds/history'>
                    <div className='icon'>
                        <HistoryIcon />
                        <span>History</span>
                    </div>
                </NavLink>
                <NavLink to='/video'>
                    <div className='icon'>
                        <VidIcon />
                        <span>Your videos</span>
                    </div>
                </NavLink>
                <NavLink to='/feeds/likedVideos'>
                    <div className='icon'>
                        <LikeIcon />
                        <span>Liked videos</span>
                    </div>
                </NavLink>
                <div className="ruler"></div>

            </SidebarWrapper>
        )
    }
}
