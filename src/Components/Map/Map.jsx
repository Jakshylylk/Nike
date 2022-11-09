import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 42.882004,
      lng: 74.582748,
    },
    zoom: 11,
  };

  return (
    <div className="main-map">
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}>
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
}
