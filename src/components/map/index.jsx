"use client";

import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

// 🌍 Using PUBLIC folder images (optimized WebP format)
const locations = [
  { name: "Venezuela", top: "54%", left: "24%", img: "/img/map/venezuela.webp" },
  { name: "Brazil", top: "64%", left: "28%", img: "/img/map/brazil.webp" },
  { name: "Argentina", top: "77%", left: "27%", img: "/img/map/argentina.webp" },
  { name: "Colombia", top: "55%", left: "21%", img: "/img/map/colmbia.webp" },
  { name: "Panama", top: "51%", left: "18%", img: "/img/map/panama.webp" },
  { name: "Mexico", top: "38%", left: "12%", img: "/img/map/maxio.webp" },
  { name: "USA", top: "26%", left: "17%", img: "/img/map/usa.webp" },
  { name: "Saudi Arabia", top: "40%", left: "53%", img: "/img/map/suadi.webp" },
  { name: "Turkey", top: "31%", left: "57%", img: "/img/map/turkey.webp" },
  { name: "Russia", top: "16%", left: "67%", img: "/img/map/russia.webp" },
  { name: "India", top: "40%", left: "69%", img: "/img/map/india.webp" },
  { name: "Japan", top: "34%", left: "86%", img: "/img/map/japan.webp" },
  { name: "Australia", top: "72%", left: "86%", img: "/img/map/austrila.webp" },
];

export default function MapWithPoints() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative w-full max-w-4xl">
        {/* Background Image */}
        <Image
          src="/img/worldmap.webp"
          alt="World Map"
          width={1400}
          height={800}
          className="w-full h-auto"
          priority
        />

        {/* Markers */}
        {locations.map((loc, index) => (
          <Tippy
            key={index}
            content={
              <div className="p-2 text-center">
                <Image
                  src={loc.img}
                  alt={loc.name}
                  width={100}
                  height={60}
                  className="rounded-lg"
                />
                <p className="mt-2 text-sm font-semibold">{loc.name}</p>
              </div>
            }
            theme="light"
            arrow={true}
          >
            {/* React 19 FIX — Wrap marker inside <span> so Tippy can attach ref */}
            <span
              style={{
                position: "absolute",
                top: loc.top,
                left: loc.left,
                display: "block",
              }}
            >
              <div
                className="w-4 h-4 bg-black rounded-full shadow-md cursor-pointer animate-pulse hover:scale-125 transition-transform overflow-hidden"
              >
                <Image
                  src={loc.img}
                  alt={loc.name}
                  width={20}
                  height={20}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </span>
          </Tippy>
        ))}
      </div>
    </div>
  );
}
