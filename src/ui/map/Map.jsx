import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

import classes from "./Map.module.css";
import "leaflet/dist/leaflet.css";
import RealEstate from "../components/RealEstate";
const Map = ({ data }) => {
  const position = [51.505, -0.09];
  const icon = new L.icon({
    iconUrl: "null",
    className: `${classes.icon}`,
    tooltipAnchor: "100px",
    popupAnchor: [35, -100],
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            //If granted then you can directly call your function here
          } else if (result.state === "prompt") {
            //If prompt then the user will be asked to give permission
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  function success(pos) {
    var crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  return (
    <MapContainer
      center={position}
      zoom={3}
      scrollWheelZoom={true}
      className={classes.map}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
