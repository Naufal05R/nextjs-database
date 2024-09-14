import Stars from "../product/Stars";

export const ProductListSkeleton = ({ length }: { length: number }) => {
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 min-w-64 lg:grid-cols-2 xl:grid-cols-3 gap-6">
    {Array.from({ length }).map((_, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-sm dark:bg-gray-950 overflow-hidden"
      >
        <div className="block">
          <img
            src="https://dummyimage.com/600x520/000/fff"
            alt="product"
            className="w-full aspect-video object-cover"
          />
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-lg">Product Name</h3>
            <div className="flex items-center gap-1">
              <Stars rating={Math.round(4.5)} />
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                4.5 out of 2
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>;
};
