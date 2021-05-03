import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Channel from './pages/Channel'
import Container from './styles/Container'
import WatchVideo from './pages/WatchVideo'
import Trending from './pages/Trending'
import Library from './pages/Library'
import History from './pages/History'
import LikedVideos from './pages/LikedVideos'
import Login from './components/Login'

const Router = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Sidebar />
            <Container>
                <Switch>
                    <Route path='/watch/:id' component={WatchVideo} />
                    <Route path='/channel/:id' component={Channel} />
                    <Route path='/feeds/trending' component={Trending} />
                    <Route path='/feeds/library' component={Library} />
                    <Route path='/feeds/history' component={History} />
                    <Route path='/feeds/likedVideos' component={LikedVideos} />
                    <Route path='/auth/login' component={Login} />
                    <Route exact path='/' component={Home} />
                    <Redirect to='/' />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default Router

