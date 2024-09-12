"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { modifySearchParams } from "@/lib/utils";

const Pagination = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    
  };

  return <div></div>;
};

export default Pagination;
