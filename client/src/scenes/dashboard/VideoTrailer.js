import React, { Component } from 'react';
import BackIcon from './../utilities/BackIcon';
// import videojs from 'video.js';
// import trailer from './../../images/trailer.mp4';
// import { Player, ControlBar } from 'video-react';
export class VideoTrailer extends Component {
    componentDidMount() {
        // this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
        //   console.log('Video.js Ready', this)
        // });
      }
      componentWillUnmount() {
        // if (this.player) {
        //   this.player.dispose()
        // }
      }
    render() {//
        return (
            <div className="video-trailer">
                {/* <a onClick={()=>this.props.change("process")} className="back">
                    <BackIcon />
                    <span>Go back</span>
                </a> */}
                {/* <iframe src='https://www.youtube.com/embed/XqOswz1bzL4'
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='video'
                        className="video-player"
                /> */}
                {/* <div className="wrapper" data-vjs-player> */}
                {/* <video className="video-player">
                    <source src={trailer} type="video/mp4" />
                </video> */}
                {/* </div> */}

                <video className="video-player" autoPlay>
                <source src={"https://res.cloudinary.com/thisisafrikan-com/video/upload/v1615215774/trailer_cybjk8.mp4"} type="video/mp4" />
                {/* <ControlBar autoHide={false}  /> */}
              </video>
            </div>
        )
    }
}

export default VideoTrailer
