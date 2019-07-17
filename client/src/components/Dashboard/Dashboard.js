import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./Dashboard.css"
import Board from "./Board";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: [
        { id: 1, soundName: 'Boots', soundURL: 'https://www.pacdv.com/sounds/people_sound_effects/footsteps-3.mp3', count: 0, isPlaying: false }, 
        { id: 2, soundName: 'Stumble', soundURL: 'http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/People/Pain/Oowh_Pai-Nathan_H-7830/Oowh_Pai-Nathan_H-7830_hifi.mp3', count: 0, isPlaying: false },
        { id: 3, soundName: 'Clank', soundURL: 'https://www.pacdv.com/sounds/mechanical_sound_effects/glass_breaking_2.wav', count: 0, isPlaying: false },
        { id: 4, soundName: 'Dragon', soundURL: 'http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Interfaces/Roars/Vwoooaaa-Public_D-344/Vwoooaaa-Public_D-344_hifi.mp3', count: 0, isPlaying: false },
        { id: 5, soundName: 'Market', soundURL: 'https://www.pacdv.com/sounds/people_sound_effects/hallway-crowd.mp3', count: 0, isPlaying: false },
        { id: 6, soundName: 'Secret', soundURL: 'https://www.pacdv.com/sounds/domestic_sound_effects/matches-1.wav', count: 0, isPlaying: false },
        { id: 7, soundName: 'Healing', soundURL: 'http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Interfaces/Energy-Mystery-8894/Energy-Mystery-8894_hifi.mp3', count: 0, isPlaying: false },
        { id: 8, soundName: 'Monster', soundURL: 'http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Creatures/Other/Predator-Hotfoot_-8607/Predator-Hotfoot_-8607_hifi.mp3', count: 0, isPlaying: false },
        { id: 9, soundName: 'Burgle', soundURL: 'https://www.pacdv.com/sounds/mechanical_sound_effects/coins_4.wav', count: 0, isPlaying: false },
        { id: 10, soundName: 'Mercenary', soundURL: 'https://www.pacdv.com/sounds/voices/over-here-1.wav', count: 0, isPlaying: false },
      ]
    }
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="appContainer">
          <div className="greet">
          <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
            </h4>
          </div>
            <div className="soundBoard">
            <Board sounds={this.state.sounds} audio={this.state.audio}/> 
            </div>
            <div className="button">
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable pink accent-1"
            >
              Logout
            </button>
            </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);