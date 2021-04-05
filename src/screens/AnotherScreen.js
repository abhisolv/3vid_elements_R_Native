import React, { Component } from 'react';

import VideoPlayerWrapper from '../components/VideoPlayerWrapper';
import VideoPlayerWrapper1 from '../components/VideoPlayerWrapper1';
import VideoPlayerWrapper2 from '../components/VideoPlayerWrapper2';
import Constants from '../common/Constants';
import Constants1 from '../common/Constants1';
import Constants2 from '../common/Constants2';
import { Image, ScrollView, Text } from 'react-native';
export default class AnotherScreen extends Component {


    static navigationOptions = {
        title: '3 Live Streams from DVR'
    };

    render() {
        return (
          <ScrollView>
            <VideoPlayerWrapper
                videoUrl={Constants.VIDEO_URL}
                pauseOnPress
                fullScreenOnLongPress
            />

            <VideoPlayerWrapper1
                videoUrl={Constants1.VIDEO_URL}
                pauseOnPress
                fullScreenOnLongPress
            />

            <VideoPlayerWrapper2
                videoUrl={Constants2.VIDEO_URL}
                pauseOnPress
                fullScreenOnLongPress
            />
          </ScrollView>
        );
      }
    }
