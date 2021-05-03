import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../styles/Button'
import { auth } from '../utils'

const StyleAuth = styled.div`
    width: 385px;
    padding: 3rem 1.5rem;
    background: ${(props) => props.theme.grey};
    border-radius: 4px;
    margin: 8% auto;

    h2 {
        margin-bottom: 1.3rem;
    }

    input {
        overflow: hidden;
        border-radius: 3px;
        width: 100%;
        padding: 0.6rem 1.2rem;
        background: ${(props) => props.theme.black};
        border: 1px solid ${(props) => props.theme.black};
        margin-bottom: 1.5rem;
        color: rgb(255, 255, 255);
    }

    .input-group {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .input-group input:last-child {
        margin-left: 0.7rem;
    }

    span {
        letter-spacing: 0.8px;
        color: ${(props) => props.theme.secondaryColor};
    }
    
    @media screen and (max-width: 430px) {
        margin: 20% auto;
        width: 90%;
    }
`

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleLogin = async (e) => {
        e.preventDefault()

        const { email, password } = this.state

        if (!email || !password) {
            return alert('Please fill in all the fields')
        }

        const token = await auth.login(email, password)
        console.log(token);

    }

    render() {
        return (
            <StyleAuth>
                <h2>Login to your account</h2>
                <form onSubmit={this.handleLogin}>
                    <input
                        type="email"
                        placeholder='email'
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })} />
                    <input
                        type="password"
                        placeholder='password'
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })} />
                    <div className='action input-group'>
                        <span className='pointer'>Signup instead</span>
                        <Button>LOGIN</Button>
                    </div>
                </form>
            </StyleAuth>
        )
    }
}
