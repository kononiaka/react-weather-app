import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.city && this.props.country && (
          <p>
            City: {this.props.city}, {this.props.country}
          </p>
        )}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Condition: {this.props.description}</p>}
        {this.props.error && <p>Error: {this.props.error}</p>}
      </React.Fragment>
    );
  }
}

export default Weather;
