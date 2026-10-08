// import { GeoJSON } from "react-leaflet";
// import L from "leaflet";
// import { useDispatch } from "react-redux";
// import { setSelectedFeature } from "@/features/gis/gisSlice";

// import diTichData from "@/assets/data/diTich.json";

// function DiTichLayer() {
//   const dispatch = useDispatch();

//   const onEachFeature = (feature, layer) => {
//     layer.on({
//       click: () => {
//         dispatch(setSelectedFeature(feature.properties));
//       },
//     });
//   };

//   return (
//     <GeoJSON
//       data={diTichData}
//       onEachFeature={onEachFeature}
//       pointToLayer={(feature, latlng) =>
//         L.circleMarker(latlng, {
//           radius: 10,
//           color: "red",
//           fillColor: "red",
//           fillOpacity: 1,
//         })
//       }
//     />
//   );
// }

// export default DiTichLayer; mặc định lấy data mẫu

import { GeoJSON } from "react-leaflet";
import L from "leaflet";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFeature } from "@/features/gis/gisSlice";

function DiTichLayer() {
  const dispatch = useDispatch();

  const diTichData = useSelector(
  (state) => state.gis.diTichData
);

  const geoJsonData = useMemo(() => {
    if (!diTichData?.length) return null;

    return {
      type: "FeatureCollection",
      features: diTichData.map((item) => ({
        type: "Feature",
        properties: {
          ...item,
        },
        geometry: {
          type: "Point",
          coordinates: [item.lng, item.lat],
        },
      })),
    };
  }, [diTichData]);

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: () => {
        dispatch(setSelectedFeature(feature.properties));
      },
    });
  };

  if (!geoJsonData) return null;

  return (
    <GeoJSON
      data={geoJsonData}
      onEachFeature={onEachFeature}
      pointToLayer={(feature, latlng) =>
        L.circleMarker(latlng, {
          radius: 10,
          color: "red",
          fillColor: "red",
          fillOpacity: 1,
        })
      }
    />
  );
}

export default DiTichLayer;