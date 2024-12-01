"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isCeaser, setIsCeaser] = useState(true);
  return (
    <div className="bg-gray-800 text-white py-4 text-center flex items-center justify-center px-4">
      <Link
        className={`me-2 ${isCeaser && "underline"} `}
        href={"/"}
        onClick={() => setIsCeaser(true)}
      >
        Caesar
      </Link>
      <Link
        className={`${!isCeaser && "underline"} `}
        href={"/vigener"}
        onClick={() => setIsCeaser(false)}
      >
        Vigener
      </Link>
    </div>
  );
};

export default Header;
