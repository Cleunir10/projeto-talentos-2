import { Link } from "react-router-dom";
import { Category } from "../typings.d";

interface CategoriesSectionProps {
  categories: Category[];
}

const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossas Categorias
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop/${category.name.toLowerCase()}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-purple-600">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
