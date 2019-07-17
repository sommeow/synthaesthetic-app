import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Sound.css";

class Sound extends React.Component {
    render() {
      let speakerStyle = 'fas fa-volume-off';
      if (this.props.sound.isPlaying && this.props.sound.soundName === this.props.audio.soundName && this.props.audio.currentlyPlaying) {
        speakerStyle += 'fas fa-volume-up';
      }
      return (
        <div className='sound-card'
          onClick={() => this.props.playSound(this.props.sound.id)}>
          <h3>{this.props.sound.soundName}</h3>
          <div>
            <div className="image-container">
            <FontAwesomeIcon icon={['fab', 'apple']} />
            </div>
            <div className="count">{this.props.sound.count}</div>
          </div>
        </div>
      );
    }
  }

  export default Sound;