"use client";
import React from 'react';
import Single from "./Single";

const Keyboard = () => {
    const rows = [
  [
    { label: "`" }, { label: "1" }, { label: "2" }, { label: "3" }, { label: "4" },
    { label: "5" }, { label: "6" }, { label: "7" }, { label: "8" }, { label: "9" },
    { label: "0" }, { label: "-" }, { label: "=" }, { label: "backspace", width: 2.5 }
  ],
  [
    { label: "Tab", width: 1.5 }, { label: "Q" }, { label: "W" }, { label: "E" }, { label: "R" },
    { label: "T" }, { label: "Y" }, { label: "U" }, { label: "I" }, { label: "O" },
    { label: "P" }, { label: "[" }, { label: "]" }, { label: "\\", width: 1.5 }
  ],
  [
    { label: "Caps", width: 1.8 }, { label: "A" }, { label: "S" }, { label: "D" }, { label: "F" },
    { label: "G" }, { label: "H" }, { label: "J" }, { label: "K" }, { label: "L" },
    { label: ";" }, { label: "'" }, { label: "Enter", width: 2.2 }
  ],
  [
    { label: "Shift", width: 2.2 }, { label: "Z" }, { label: "X" }, { label: "C" }, { label: "V" },
    { label: "B" }, { label: "N" }, { label: "M" }, { label: "," }, { label: "." },
    { label: "/" }, { label: "Shift", width: 2.2 }
  ],
  [
    { label: "Ctrl", width: 1.5 }, { label: "Win", width: 1.5 }, { label: "Alt", width: 1.5 },
    { label: "Space", width: 6 }, { label: "Alt", width: 1.5 }, { label: "Fn", width: 1.5 },
    { label: "Ctrl", width: 1.5 }
  ]
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
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-neutral-500 to to-neutral-800">
      <div className="flex flex-col gap-2 p-6 scale-200 rounded-[32px] bg-neutral-800 ">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2 justify-center">
            {row.map(({ label, width }, keyIndex) => (
              <Single
                key={`${label}-${rowIndex}-${keyIndex}`}
                label={label}
                width={width}
                isPressed={pressedKey === label}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Keyboard
