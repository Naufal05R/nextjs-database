"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { modifySearchParams } from "@/lib/utils";

const Pagination = () => {
  const router = useRouter();
  const searchParams = Object.fromEntries(useSearchParams());

  const page = parseInt(searchParams.page) || 1;

  const handlePageChange = (newPage: number) => {
    
  };

  return (
    <div className="flex justify-center gap-4">
      <button className="text-black disabled:text-gray-400">
        Previous Page
      </button>
      <button className="text-black">Next Page</button>
    </div>
  );
};

export default Pagination;
