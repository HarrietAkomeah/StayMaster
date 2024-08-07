import React from "react";
import Nav from "./Nav";
import { Resultcontent } from "./Maincontents";
import { Link } from "react-router-dom";
import "./App.css";
class Result extends React.Component {
  state = {
    resultcontent: Resultcontent,
    clicked: false,
  };
  fav = (item) => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <div>
        <Nav />
        <div className="result">
          <h4>{this.state.resultcontent.length} Hostels</h4>
          <h2>Hostels Around</h2>
        </div>
        {this.state.resultcontent.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/result/${item.id}`} className="link">
                <div className="resultcont">
                  <img src={item.img} width="35%" alt="home" />
                  <div className="resultcont__info">
                    <h4>
                      {item.type} in {item.location}
                    </h4>
                    <h3>{item.title}</h3>
                    <div className="resultcont__body">
                      <br />
                      <i style={{ opacity: "0.2" }}> ———— </i>
                      <br />
                      <br />
                      <h4 style={{ paddingBottom: "10px" }}>
                        {item.smalldescription}
                      </h4>
                      <h4>{item.amenities}</h4>
                    </div>
                  </div>
                  <button
                    className={`resultcont__heart ${
                      this.state.clicked && "heart"
                    }`}
                    onClick={() => {
                      this.fav(item);
                    }}
                  ></button>
                  <div className="resultcont__price">
                    <span>{item.price}</span> / academic year
                  </div>
                  <div className="resultcont__star">
                    ★
                    <span
                      style={{
                        fontSize: "15px",
                        color: "black",
                        fontWeight: "normal",
                      }}
                    >
                      {item.rating}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Result;
