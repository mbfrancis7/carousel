import React from "react";

class UserSubmit extends React.Component {
  state = {
    number: 0
  };
  handleNumberChange = event => {
    this.setState({
      number: +event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.getImages(this.state.number);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label value="number">
            Number of Images
            <input
              id="number"
              value={this.state.number}
              onChange={this.handleNumberChange}
            />
          </label>
          <label value="transtion">
            Transition Time
            <input
              id="transition"
              value={this.props.transition}
              onChange={this.props.handleTransitionChange}
            />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserSubmit;
