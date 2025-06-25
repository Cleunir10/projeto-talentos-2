import customFetch from "../axios/custom";

export const loader = async () => {
  try {
    const response = await customFetch.get("/orders");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return [];
  }
}; 