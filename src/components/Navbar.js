import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Avatar from '../styles/Avatar';
import { HamburgerIcon, NotificationIcon, UploadIcon } from './Icons'
import Search from './Search';

const Wrapper = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: ${(props) => props.theme.grey};
    z-index: 100;
    padding: 0.7rem 1.5rem;

    input {
        width: 500px;
    }

    .toogle-navhandler {
        display: none;
    }

    .logo {
        position: relative;
        top: 1px;
    }

    ul {
        list-style: none;
        display: flex;
        position: relative;
        top: 2px;
    }

    li svg {
        margin-right: 1.7rem;
        position: relative;
        top: 3px;
    }

    img {
        position: relative;
        top: 3px;
    }

    @media screen and (max-width: 1093px) {
        .toggle-navhandler {
        display: block;
        }
    }
    
    @media screen and (max-width: 1000px) {
        input {
            width: 400px;
        }
    }
    
    @media screen and (max-width: 850px) {
        input {
            width: 280px;
        }
    }
    
    @media screen and (max-width: 500px) {
        .toggle-navhandler {
            display: none;
        }
    
        li svg {
            width: 30px;
            height: 30px;
            margin-right: 1.7rem;
            position: relative;
            top: 0px;
        }
    }
`;

export default class Navbar extends Component {
    render() {
        return (
            <Wrapper>
                <div className='logo flex-row'>
                    <HamburgerIcon className='toogle-navhandler' />
                    <span>
                        <Link to='/'>Youtube</Link>
                    </span>
                </div>

                <Search />

                <ul>
                    <li>
                        <UploadIcon />
                    </li>

                    <li>
                        <NotificationIcon />
                    </li>
                    <li>
                        <Link to='/channel/:id'>
                            <Avatar className='pointer' src='https://res.cloudinary.com/tylerdurden/image/upload/v1602657481/random/pngfind.com-default-image-png-6764065_krremh.png' />
                        </Link>
                    </li>

                </ul>
            </Wrapper>
        )
    }
}
