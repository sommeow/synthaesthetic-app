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
        { id: 1, soundName: 'Stumble', soundURL: 'https://dl.dropboxusercontent.com/s/52wovsx7v2xrsyg/oh-hi-there.m4a', count: 0, isPlaying: false }, 
        { id: 2, soundName: '2', soundURL: 'https://dl.dropboxusercontent.com/s/bciko68hn6vxfi5/munchdew.m4a', count: 0, isPlaying: false },
        { id: 3, soundName: '3', soundURL: 'https://dl.dropboxusercontent.com/s/uah7h53h85iewgz/uh-oops.m4a', count: 0, isPlaying: false },
        { id: 4, soundName: '4', soundURL: 'https://dl.dropboxusercontent.com/s/uxh2dg6u5feqwcc/hufflepuff.m4a', count: 0, isPlaying: false },
        { id: 5, soundName: '5', soundURL: 'https://dl.dropboxusercontent.com/s/323rhnwp9bnglmj/struck-by-lightning.m4a', count: 0, isPlaying: false },
        { id: 6, soundName: '6', soundURL: 'https://dl.dropboxusercontent.com/s/mh53hc4v5vfil2r/primal-noises.m4a', count: 0, isPlaying: false },
        { id: 7, soundName: '7', soundURL: 'https://dl.dropboxusercontent.com/s/44wlc2ifqf20qzt/family.m4a', count: 0, isPlaying: false },
        { id: 8, soundName: '8', soundURL: 'https://dl.dropboxusercontent.com/s/s70hruqm15jd7qc/lazer.m4a', count: 0, isPlaying: false },
        { id: 9, soundName: '9', soundURL: 'https://dl.dropboxusercontent.com/s/tpdoeh03q26soil/stay-as-little-as-possible.m4a', count: 0, isPlaying: false },
        { id: 10, soundName: '10', soundURL: 'https://dl.dropboxusercontent.com/s/ep463jwi2y99gfw/terrible.m4a', count: 0, isPlaying: false },
        { id: 11, soundName: '11', soundURL: 'https://dl.dropboxusercontent.com/s/8tmikmnhr0k59bx/win-an-award.m4a', count: 0, isPlaying: false }
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