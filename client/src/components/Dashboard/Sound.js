import React, { Component } from "react";

class Sound extends React.Component {
    render() {
      let speakerStyle = 'fa fa-volume-off fa-3x';
      if (this.props.sound.isPlaying && this.props.sound.soundName === this.props.audio.soundName && this.props.audio.currentlyPlaying) {
        speakerStyle += 'fa fa-volume-up fa-3x';
      }
      return (
        <div className='sound-card'
          onClick={() => this.props.playSound(this.props.sound.id)}>
          <h3>{this.props.sound.soundName}</h3>
          <div>
            <div className="image-container">
              <i className={speakerStyle} aria-hidden="true"></i>
            </div>
            <div className="count">{this.props.sound.count}</div>
          </div>
        </div>
      );
    }
  }

  export default Sound;