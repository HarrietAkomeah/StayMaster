import React from "react";
import Ranger from "./home/Ranger";
import "./Header.css";
import "./home/Navbar.css";
class Header extends React.Component {
  state = {
    isclicked: false,
  };
  sel = () => {
    this.setState({
      isclicked: !this.state.isclicked,
    });
  };
  render() {
    return (
      <div className="header">
        {this.state.isclicked && (
          <div>
            <Ranger />
          </div>
        )}
        <span>
        <img src="/logo.png" alt="StayMaster" width ={80}/>
          <h2>StayMaster</h2> 
        </span>
      </div>
    );
  }
}
export default Header;
