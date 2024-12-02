"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isSelected, setIsSelected] = useState(false);

  const navLinks = [
    {
      title: "Caesar",
      to: "/",
    },
    {
      title: "Vigenère ",
      to: "/vigener",
    },
    {
      title: "PlayFair",
      to: "/playfair",
    },
  ];

  return (
    <div className="bg-gray-800 text-white py-4 text-center flex items-center justify-center px-4">
      {navLinks.map((navLink) => (
        <Link
          key={navLink.to}
          href={navLink.to}
          className={`me-2 ${isSelected === navLink.to ? "underline" : ""}`}
          onClick={() => setIsSelected(navLink.to)}
        >
          <div>{navLink.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default Header;
