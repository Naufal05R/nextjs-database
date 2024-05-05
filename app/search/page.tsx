import ProductResult from "@/components/search/ProductResult";
import SearchFilters from "@/components/search/SearchFilters";

export default function Component() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Product 2",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Product 3",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Product 4",
      rating: 4.1,
    },
    {
      id: 5,
      name: "Product 5",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Product 6",
      rating: 4.3,
    },
  ];

  return (
    <div className="grid md:grid-cols-[300px_1fr] gap-8 px-4 md:px-8 py-20">
      <div className="bg-white rounded-lg shadow-sm dark:bg-gray-950 p-6 space-y-6">
        <SearchFilters />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductResult key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
