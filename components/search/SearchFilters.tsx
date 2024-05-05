import { Category, Name, Rating } from "@/components/search/filterComponents";

export default function SearchFilters() {
  return (
    <div>
      <h3 className="text-lg font-semibold">Filters</h3>
      <div className="grid gap-4 mt-4">
        <Name />
        <Rating />
        <Category />
      </div>
    </div>
  );
}
