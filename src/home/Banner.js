import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";
import Navbar from "./Navbar";
class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <Navbar />
        <div className="banner__content">
          <h2>Go ahead and Explore </h2>
          <h5>
            Settle in somewhere new. Discover new Hostels to stay for an academic year.
      
          </h5>
          <Link to="/result">
            <button>Explore Nearby Hostels</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Banner;
