"use client";
import React from "react";

interface KeyProps {
  label: string;
  isPressed: boolean;
  width?: number;
}

const Key: React.FC<KeyProps> = ({ label, isPressed, width = 1 }) => {
  return (
    <div
      className={`key key-glow relative h-10 flex items-center justify-center rounded font-medium
        text-white bg-neutral-600 active:scale-90 transition duration-100 ease-in-out cursor-pointer
        ${isPressed ? "bg-blue-500 scale-105" : ""}`}
      style={{ width: `${width * 2.5}rem` }}
    >
      {label}
    </div>
  );
};

export default Key;
