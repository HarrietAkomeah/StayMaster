import React from "react";
import Banner from "./home/Banner";
import Contents from "./home/Contents";
import { Link } from "react-router-dom";
import { Content } from "./Maincontents";
import "./home/contents.css";
class Home extends React.Component {
  state = {
    contents: Content,
  };
  render() {
    return (
      <div>
        <Banner />

        <div className="home__cont">
          {this.state.contents.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/result/${item.id}`} className="link">
                  <Contents
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    amount={item.price}
                    description={item.description}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Home;
