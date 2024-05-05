import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { modifySearchParams } from "@/lib/utils";

export function useURLQuery(
  key: any,
  defaultValue = "",
  delay = 0
): [string, (value: string) => void] {
  const searchParams = useSearchParams();
  const router = useRouter();
  const keyValue = searchParams.get(key) ?? defaultValue;
  const [value, setValue] = useState(keyValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newParams = modifySearchParams(searchParams.toString(), {
        [key]: value,
      });
      router.push(`?${newParams}`);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, searchParams, router, delay, key]);

  return [value, setValue];
}
