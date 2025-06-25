import { LoaderFunctionArgs } from "react-router-dom";

export const shopCategoryLoader = async ({ params }: LoaderFunctionArgs) => {
  const { category } = params;
  return category;
}; 