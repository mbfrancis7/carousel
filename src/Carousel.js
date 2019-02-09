import React from "react";

class Carousel extends React.Component {
  state = {
    index: 0
  };
  handleIndexChange = index => {
    this.setState({
      index
    });
    this.startSlideShow();
  };
  intervalId;
  nextImage = () => {
    console.log("changed");
    if (this.state.index === this.props.pictureUrls.length - 1) {
      this.setState({
        index: 0
      });
    } else {
      this.setState({
        index: this.state.index + 1
      });
    }
    this.startSlideShow();
  };
  lastImage = () => {
    if (this.state.index === 0) {
      this.setState({
        index: this.props.pictureUrls.length - 1
      });
    } else {
      this.setState({
        index: this.state.index - 1
      });
    }
    this.startSlideShow();
  };
  startSlideShow = () => {
    console.log("starting slideshow");
    if (this.intervalId) {
      console.log("cleared interval");
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(this.nextImage, this.props.transition * 1000);
  };

  componentDidMount() {
    this.startSlideShow();
  }

  render() {
    const { index } = this.state;
    return (
      <div>
        <button onClick={this.lastImage}>Prev</button>
        <img
          key={this.props.pictureUrls[index]}
          src={this.props.pictureUrls[index]}
        />
        <button onClick={this.nextImage}>Next</button>
        {this.props.pictureUrls.map((_, index) => (
          <button
            key={index}
            id={index}
            onClick={() => this.handleIndexChange(index)}
          >
            {index}
          </button>
        ))}
      </div>
    );
  }
}

export default Carousel;
