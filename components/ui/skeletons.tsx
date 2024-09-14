export const ProductListSkeleton = ({ length }: { length: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 min-w-64 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length }).map((_, index) => (
        <div
          key={index}
          className="group bg-white rounded-lg shadow-sm dark:bg-gray-950 overflow-hidden"
        >
          <div className="block">
            <div className="w-full aspect-video bg-gray-400" />
            <div className="p-4 space-y-2">
              <div className="h-7 py-1">
                <div className="w-60 h-full bg-gray-400 rounded-full" />
              </div>
              <div className="h-5 rounded-full w-48 bg-gray-400" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
