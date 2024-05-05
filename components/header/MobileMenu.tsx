"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

export default function MobileMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" flex items-center justify-between">
      <button onClick={() => setIsOpen(!isOpen)}>
        <Menu size={24} />
      </button>
      {isOpen && (
        <div className="absolute top-12 w-3/4 max-w-96 bg-black px-2 py-4 rounded-sm right-0">
          {children}
        </div>
      )}
    </div>
  );
}
