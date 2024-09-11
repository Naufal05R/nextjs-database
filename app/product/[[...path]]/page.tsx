import AddReview from "@/components/product/AddReview";
import ProductView from "@/components/product/Product";
import ReviewView from "@/components/product/Review";
import AddProduct from "@/components/product/AddProduct";
import DeleteProduct from "@/components/delete/DeleteProduct";
import { getProductById } from "@/lib/actions/products";

export const revalidate = 1;

export default async function Page({ params }: { params: { path: string[] } }) {
  const method = params.path[0];
  const id = params.path[1];

  if (method === "new") {
    return <AddProduct />;
  }

  const product = await getProductById(parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  if (method === "edit") {
    return <AddProduct edit id={id} product={product} />;
  }
  if (method === "delete") {
    return <DeleteProduct id={id} />;
  }

  return (
    <div className="pt-20 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4">
      <ProductView product={product} />
      <div className="flex flex-col gap-y-5">
        <span className="text-2xl font-bold h-fit">Customer Reviews</span>
        <div className="grid gap-5">
          {product.reviews.map((review) => (
            <ReviewView key={review.id} review={review} />
          ))}
        </div>
      </div>
      <div className="md:col-span-2">
        <AddReview />
      </div>
    </div>
  );
}
