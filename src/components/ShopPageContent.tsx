import { useState } from "react";
import { products } from "../data/products";
import ProductGrid from "./ProductGrid";
import ShopFilterAndSort from "./ShopFilterAndSort";
import ShowingPagination from "./ShowingPagination";
import ProductGridWrapper from "./ProductGridWrapper";

const ShopPageContent = ({ category, page }: { category: string; page: number }) => {
  const [currentPage, setCurrentPage] = useState(page);
  const [sortCriteria, setSortCriteria] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nossa Loja</h1>
      <ShopFilterAndSort sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} />
      <ProductGridWrapper sortCriteria={sortCriteria} category={category} page={currentPage}>
        <ProductGrid products={products} />
      </ProductGridWrapper>
      <ShowingPagination page={currentPage} category={category} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default ShopPageContent;
