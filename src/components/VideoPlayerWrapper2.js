import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { Image, ScrollView, Text } from 'react-native';

import VideoPlayer from 'react-native-video-player';

//unrecognized font family issue - fixed by react-native link then pod install

export default class VideoPlayerWrapper2 extends Component {

    state = { playPressed: false };

    render() {
        return (

            <View>
                <VideoPlayer
                    video={{ uri: this.props.videoUrl }}
                    ref={r => this.player = r}
                    onStart={() => {
                        this.setState({ playPressed: true });
                    }}
                    pauseOnPress={this.props.pauseOnPress}
                    fullScreenOnLongPress={this.props.fullScreenOnLongPress}
                />

                {this.renderStopButton()}
                <Button
                    onPress={() => this.player.pause()}
                    title="Pause"
                />
                <Button
                    onPress={() => this.player.resume()}
                    title="Resume"
                />


            </View>
        );

    }

    renderStopButton() {
        if(this.state.playPressed) {
            return (
                <Button
                    onPress={() => {
                        //stop() does not work and video plays again
                        //trick below is a dirty alternative but works
                        setTimeout(() => this.player.seek(0), 0);
                        this.player.pause();
                    }}
                    title="Stop"
                />
            );
        }
    }
}
