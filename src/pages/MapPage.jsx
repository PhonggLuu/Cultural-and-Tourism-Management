// import MapView from "@/components/map/MapView";

// function MapPage() {
//   return <MapView />;
// }

// export default MapPage;

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import MapView from "@/components/map/MapView";

import { fetchDiTichs } from "@/features/gis/gisSlice";

function MapPage() {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchDiTichs());
}, [dispatch]);

  return (
    <>
      <MapView />
    </>
  );
}

export default MapPage;