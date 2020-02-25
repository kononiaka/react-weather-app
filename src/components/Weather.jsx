import React from "react";

const Weather = props => (
  <React.Fragment>
    {props.city && props.country && (
      <p>
        City: {props.city}, {props.country}
      </p>
    )}
    {props.temperature && <p>Temperature: {props.temperature}</p>}
    {props.humidity && <p>Humidity: {props.humidity}</p>}
    {props.description && <p>Condition: {props.description}</p>}
    {props.error && <p>Error: {props.error}</p>}
  </React.Fragment>
);

export default Weather;
