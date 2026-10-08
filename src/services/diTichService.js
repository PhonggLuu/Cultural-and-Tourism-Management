import { mockDiTichData } from "../assets/data/diTich";

export async function getAllDiTich() {
  try {
    const response = await fetch("http://localhost:8080/api/ditich");

    if (!response.ok) {
      throw new Error("Không thể tải dữ liệu di tích");
    }

    return await response.json();
  } catch (error) {
    console.warn("API lỗi, sử dụng dữ liệu mẫu:", error);
    return mockDiTichData;
  }
}