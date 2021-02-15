import "./Home.scss";
import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./../../components/Search";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <div className="home__header">
          <div className="home_headerLeft">
            <Link to="about">About</Link>
            <Link to="store">Store</Link>
          </div>
          <div className="home_headerRight">
            <Link to="gmail">Gmail</Link>
            <Link to="images">Images</Link>
            <AppsIcon />
            {/* <Avatar /> */}
          </div>
        </div>
        <div className="home__body">
          <img src="https://allinone.pk/wp-content/uploads/2020/09/all-in-one-logo.png" />
          <div className="home__inputContainer">
            <Search />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
