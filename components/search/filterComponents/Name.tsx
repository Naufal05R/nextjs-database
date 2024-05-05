"use client";

import { useURLQuery } from "@/lib/hooks/useURLQuery";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Name() {
  const [name, setName] = useURLQuery("name", "", 300);
  return (
    <div>
      <Label className="text-base" htmlFor="name-filter">
        Name
      </Label>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-1"
        id="name-filter"
        placeholder="Search by name"
        type="text"
      />
    </div>
  );
}
