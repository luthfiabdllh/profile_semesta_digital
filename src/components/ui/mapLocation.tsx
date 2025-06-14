import { LatLngTuple } from "leaflet";
import { useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

const customIcon = new L.Icon({
    iconUrl: "/pin.svg", 
    iconSize: [24, 24], 
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32], 
  });

export default function MapLocation() {
  const position = useMemo<LatLngTuple>(() => [-7.826272729570481, 110.3626546964112], []);


  return (
        <MapContainer
        className="rounded-lg mt-8 shadow-lg border border-gray-300"
        center={position}
        zoom={13}
        zoomAnimation={true}
        zoomAnimationThreshold={5}
        style={{ height: "220px", width: "100%" }}
        >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={customIcon}>
                <Popup className="text-center font-semibold text-gray-700 hover:text-gray-900">
                📍 We are here
                </Popup>
            </Marker>
        </MapContainer>
  );
}