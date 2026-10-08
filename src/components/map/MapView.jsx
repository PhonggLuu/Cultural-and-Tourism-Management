import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import DiTichLayer from "@/components/map/layers/DiTichLayer";
import DiTichInfo from "./DiTichInfo";

export default function MapView() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <MapContainer
        center={[12.6797, 108.0449]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png"
        />

        <DiTichLayer />
      </MapContainer>

      <DiTichInfo />
    </div>
  );
}