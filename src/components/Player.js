import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Player as VideoPlayer, BigPlayButton } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";

class Player extends Component {
    componentDidMount() {
        // subscribe state change
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    handleStateChange(state) {
        // copy player state to this component's state
        this.setState({
            player: state
        });
    }


    render() {
        const { thumbnail, url } = this.props.video
        return (
            <VideoPlayer
                ref={player => {
                    this.player = player;
                }}
                fluid
                playsInline
                poster={thumbnail}
                src={url}
            ><BigPlayButton position="center" /></VideoPlayer>
        );
    }
}

const mapStateToProps = (state) => {
    return { video: state.video.video }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
