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
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'right', width: '100%' }}>
  <span style={{ display: 'flex', alignItems: 'right' }}>
    <a href="https://stay-master-backend.vercel.app/" style={{ marginLeft: '1000px' }} class="book_btn">
      <h2 class="button">Book Hostel</h2>
    </a>
  </span>
</div>
      </div>
      
    );
  }
}
export default Header;
