import React, { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./map.css";
import { icon } from "./icon.js";

const blackOptions = { color: "black" };
const MapSection = ({ latitude, longitude, schoolData, boundaries }) => {
  const [lat, setLat] = useState(latitude);
  const [lon, setLon] = useState(longitude);
  const [sec, setSec] = useState(boundaries);


  return (
    <MapContainer
      center={[lat, lon]}
      zoom={12}
      scrollWheelZoom={false}
      closePopupOnClick
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
 
      <Marker position={[lat, lon]} icon={icon}>
      <Polyline pathOptions={blackOptions} positions={boundaries} />
        <Popup>
          <h6>{schoolData.name}</h6>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapSection;
