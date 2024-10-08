import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import queryString from "query-string";

type SearchParams = {
  name?: string;
  minPrice?: string;
  category?: string;
  page?: number;
};

type PopularFormatterType = "en-US" | "id-ID";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function modifySearchParams(
  params: string,
  change: Partial<SearchParams>
) {
  const param = queryString.parse(params);
  Object.assign(param, change);
  return queryString.stringify(param, {
    skipEmptyString: true,
  });
}

export function formatPrice(
  value: number,
  options?: {
    locales?: PopularFormatterType;
    style?: keyof Intl.NumberFormatOptionsStyleRegistry;
    currency?: string;
  }
) {
  return new Intl.NumberFormat(options?.locales || "en-US", {
    style: options?.style || "currency",
    currency: options?.currency || "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function calculateScore<T extends Record<string, number | string>>(
  list: Array<T>,
  key: keyof T,
  modified?: "round"
) {
  const calculated = list.reduce((acc, item) => acc + Number(item[key]), 0);
  const result = (x: number) => Number(modified ? x.toFixed(0) : x.toFixed(1));

  return {
    total: result(calculated) || 0,
    average: result(calculated / list.length) || 0,
  };
}
