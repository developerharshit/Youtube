import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    input.search {
        background: rgb(18, 18, 18);
        padding: 0.4rem 1rem;
        border: 1px solid rgb(56, 56, 56);
        height: 31px;
        color: rgb(255, 255, 255);
    }

    @media screen and (max-width: 700px) {
        input.search {
            display: none;
        }
    }
`;

export default class Search extends Component {
    render() {
        return (
            <Wrapper>
                <input
                    className='search'
                    type='text'
                    placeholder='Search'
                />
            </Wrapper>
        )
    }
}
