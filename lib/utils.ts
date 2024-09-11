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

export function calculateScore(
  itemsList: Array<Record<string, number>>,
  itemKey: string
) {
  const calculated = itemsList.reduce((acc, item) => acc + item[itemKey], 0);
  const total = Math.floor(calculated);
  const average = Math.floor(calculated / itemsList.length);

  return {
    total,
    average,
  };
}
