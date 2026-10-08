import { useSelector } from "react-redux";

function DiTichInfo() {
  const selectedFeature = useSelector(
    (state) => state.gis.selectedFeature
  );

  if (!selectedFeature) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        width: 300,
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      <h3>{selectedFeature.ten}</h3>

      <hr />

      <p>
        <strong>ID:</strong> {selectedFeature.id}
      </p>

      {selectedFeature.diaChi && (
        <p>
          <strong>Địa chỉ:</strong>{" "}
          {selectedFeature.diaChi}
        </p>
      )}

      {selectedFeature.moTa && (
        <p>
          <strong>Mô tả:</strong>{" "}
          {selectedFeature.moTa}
        </p>
      )}

      {selectedFeature.lat && (
        <p>
          <strong>Vĩ độ:</strong>{" "}
          {selectedFeature.lat}
        </p>
      )}

      {selectedFeature.lng && (
        <p>
          <strong>Kinh độ:</strong>{" "}
          {selectedFeature.lng}
        </p>
      )}
    </div>
  );
}

export default DiTichInfo;