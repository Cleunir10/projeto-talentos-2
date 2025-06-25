import { LoaderFunctionArgs } from "react-router-dom";
import customFetch from "../axios/custom";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  const response = await customFetch(`orders/${id}`);
  return response.data;
}; 