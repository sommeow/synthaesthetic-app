import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper black">
            <Link
              to="/"
              className="col s5 brand-logo center green-text"
            >
              <img src='https://i.imgur.com/dwkfl3Y.png' length="1498" width="500" alt="Synth aesthetic Logo" />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;