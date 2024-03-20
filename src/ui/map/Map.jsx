import React from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import L from "leaflet";

import classes from "./Map.module.css";
import "leaflet/dist/leaflet.css";
import RealEstate from "../components/RealEstate";
const Map = ({ data }) => {
  const position = [51.505, -0.09];
  const icon = new L.icon({
    iconUrl: "http://localhost:3000/airbnb/assets/svgs/map/marker.svg",
    iconSize:[35,35],
    popupAnchor: [0, -110],
  });

  return (
    <MapContainer
      center={position}
      zoom={3}
      scrollWheelZoom={true}
      className={classes.map}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((elem) => {
        return (
          <Marker
            position={[
              elem.location.coordinates.latitude,
              elem.location.coordinates.longitude,
            ]}
            icon={icon}
            key={elem.objectId}
          >
            <Popup autoPan={true} className={classes.popup}>
              <RealEstate data={elem} />
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
