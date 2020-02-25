import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <button>Get Weather</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
