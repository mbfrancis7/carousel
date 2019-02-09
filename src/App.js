import React from "react";
import { render } from "react-dom";
import UserSubmit from "./UserSubmit";
import Carousel from "./Carousel";

class App extends React.Component {
  state = {
    pictureUrls: [],
    transition: 5,
    submitted: false
  };
  handleTransitionChange = event => {
    this.setState({
      transition: event.target.value
    });
  };
  getImages = num => {
    let pictureUrls = new Array(num).fill(1);
    let urlPromise = pictureUrls.map((_, index) =>
      fetch(`https://source.unsplash.com/random/${index}`).then(res => res.url)
    );
    Promise.all(urlPromise).then(pictureUrls =>
      this.setState({ pictureUrls, submitted: true })
    );
  };
  render() {
    return (
      <div>
        <UserSubmit
          getImages={this.getImages}
          handleTransitionChange={this.handleTransitionChange}
          transition={this.state.transition}
        />
        {this.state.submitted ? (
          <Carousel
            pictureUrls={this.state.pictureUrls}
            transition={this.state.transition}
          />
        ) : null}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
