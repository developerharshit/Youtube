import React, { Component } from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import Router from './Router'
import GlobalStyle from './styles/GlobalStyle'
import { darkTheme } from './styles/theme'

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={darkTheme}>
                <GlobalStyle />
                <ToastContainer
                    autoClose={2500}
                    position="top-right"
                    closeButton={false}
                />
                <Router />
            </ThemeProvider>
        )
    }
}
