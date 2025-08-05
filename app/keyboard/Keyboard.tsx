"use client";
import React, { Key, useState } from 'react'

const Keyboard = () => {
    const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"]
];

    const [pressedKey, setpressedKey] = React.useState<string | null>(null);
    // adding the effect to the keyboard input
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
        setpressedKey(e.key.toUpperCase());
    };

    const handleKeyUp = () => {
        setpressedKey(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
    };
    }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2 p-4 bg-neutral-900 scale-200 rounded-2xl">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2 justify-center text-black">
            {row.map((key) => (
              <div
                key={key}
                className={`key key-glow relative w-10 h-10 flex border items-center justify-center rounded
    text-white bg-black active:scale-90
    transition duration-150 ease-in-out cursor-pointer`}
              >
                {key}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Keyboard
