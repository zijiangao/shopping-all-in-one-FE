import "./Search.scss";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      hideButtons: false,
    };
    this.state = {
      input: "",
    };
  }
  componentDidMount() {}
  search = (e) => {
    e.preventDefault();
    if (this.state.input !== "") {
      console.log("clicked" + this.state.input);

      this.props.history.push("/product/" + this.state.input);
    }
  };

  render() {
    //console.log(this.state.input);
    return (
      <form className="search">
        <div className="search__input">
          <SearchIcon className="search__inputIcon" />
          <input
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
          />
          <MicIcon />
        </div>
        {!this.props.hideButtons ? (
          <div className="search__buttons">
            <Button type="submit" onClick={this.search} variant="outlined">
              Search
            </Button>
          </div>
        ) : (
          <div className="search__button">
            <Button
              className="search__buttonsHidden"
              type="submit"
              onClick={this.search}
              variant="outlined"
            >
              Search
            </Button>
          </div>
        )}
      </form>
    );
  }
}
export default withRouter(Search);
