"use client";

const cities = [
  { name: "Αθήνα", x: 390, y: 310 },
  { name: "Θεσσαλονίκη", x: 370, y: 175 },
  { name: "Πάτρα", x: 295, y: 300 },
  { name: "Ηράκλειο", x: 390, y: 430 },
  { name: "Λάρισα", x: 375, y: 230 },
  { name: "Βόλος", x: 395, y: 255 },
  { name: "Ιωάννινα", x: 290, y: 235 },
  { name: "Καβάλα", x: 435, y: 160 },
  { name: "Αλεξανδρούπολη", x: 490, y: 148 },
  { name: "Καλαμάτα", x: 330, y: 360 },
  { name: "Χανιά", x: 330, y: 435 },
];

export default function GreeceMap() {
  return (
    <svg
      viewBox="220 80 350 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        {/* Pulse animations per city */}
        {cities.map((city) => (
          <radialGradient
            key={`grad-${city.name}`}
            id={`grad-${city.name}`}
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor="#d94a1f" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d94a1f" stopOpacity="0" />
          </radialGradient>
        ))}

        {/* Clip to keep things inside viewBox */}
        <clipPath id="bounds">
          <rect x="0" y="0" width="700" height="520" />
        </clipPath>
      </defs>

      {/* ── Greece mainland outline (stylized) ── */}
      <g
        fill="#0d0d0f"
        fillOpacity="0.06"
        stroke="#0d0d0f"
        strokeOpacity="0.12"
        strokeWidth="1"
        clipPath="url(#bounds)"
      >
        {/* Mainland */}
        <path
          d="
          M 310 100
          L 340 95  L 380 98  L 420 105 L 450 112
          L 470 125 L 480 145 L 475 160 L 490 162
          L 500 150 L 510 155 L 505 170 L 495 180
          L 480 185 L 470 195 L 455 200 L 445 215
          L 440 230 L 435 250 L 430 265 L 420 275
          L 415 290 L 410 310 L 405 325 L 395 340
          L 385 355 L 375 365 L 370 380 L 360 370
          L 345 365 L 335 355 L 325 345 L 315 330
          L 310 315 L 305 300 L 300 285 L 295 270
          L 285 260 L 280 245 L 275 230 L 270 215
          L 265 200 L 270 185 L 280 175 L 285 160
          L 280 145 L 285 130 L 295 115 L 310 100
          Z
        "
        />

        {/* Peloponnese */}
        <path
          d="
          M 315 330
          L 325 345 L 335 355 L 330 365
          L 315 380 L 300 390 L 285 395
          L 275 385 L 268 370 L 272 355
          L 280 345 L 295 340 L 310 335
          Z
        "
        />

        {/* Crete */}
        <path
          d="
          M 320 425
          L 340 418 L 370 415 L 400 418
          L 430 422 L 450 430 L 445 440
          L 420 445 L 390 447 L 360 445
          L 335 440 L 318 432
          Z
        "
        />

        {/* Lesvos */}
        <path d="M 510 215 L 528 210 L 535 220 L 525 230 L 510 225 Z" />

        {/* Chios */}
        <path d="M 510 265 L 522 260 L 528 270 L 518 278 Z" />

        {/* Samos */}
        <path d="M 510 295 L 525 290 L 530 300 L 515 305 Z" />

        {/* Rhodes */}
        <path d="M 518 375 L 535 368 L 545 380 L 538 393 L 522 390 Z" />

        {/* Corfu */}
        <path d="M 262 195 L 270 188 L 274 198 L 268 208 Z" />

        {/* Euboea */}
        <path d="M 430 240 L 445 225 L 460 235 L 455 260 L 440 270 L 428 255 Z" />
      </g>

      {/* ── Route lines between cities ── */}
      <g
        stroke="#d94a1f"
        strokeOpacity="0.18"
        strokeWidth="1"
        strokeDasharray="4 6"
        fill="none"
      >
        {/* Thessaloniki → Athens */}
        <line x1="370" y1="175" x2="390" y2="310" />
        {/* Athens → Patras */}
        <line x1="390" y1="310" x2="295" y2="300" />
        {/* Athens → Heraklion */}
        <line x1="390" y1="310" x2="390" y2="430" />
        {/* Thessaloniki → Kavala */}
        <line x1="370" y1="175" x2="435" y2="160" />
        {/* Kavala → Alex/poli */}
        <line x1="435" y1="160" x2="490" y2="148" />
        {/* Larissa → Volos */}
        <line x1="375" y1="230" x2="395" y2="255" />
        {/* Ioannina → Thessaloniki */}
        <line x1="290" y1="235" x2="370" y2="175" />
        {/* Athens → Kalamata */}
        <line x1="390" y1="310" x2="330" y2="360" />
        {/* Heraklion → Chania */}
        <line x1="390" y1="430" x2="330" y2="435" />
      </g>

      {/* ── City markers ── */}
      {cities.map((city, index) => (
        <g key={city.name}>
          <circle
            cx={city.x}
            cy={city.y}
            r="10"
            fill={`url(#grad-${city.name})`}
          >
            <animate
              attributeName="r"
              from="4"
              to="18"
              dur="2.5s"
              repeatCount="indefinite"
              begin={`${(index * 0.2) % 2}s`}
            />
            <animate
              attributeName="opacity"
              from="0.7"
              to="0"
              dur="2.5s"
              repeatCount="indefinite"
              begin={`${(index * 0.2) % 2}s`}
            />
          </circle>

          <circle
            cx={city.x}
            cy={city.y}
            r="3.5"
            fill="#d94a1f"
            fillOpacity="0.75"
            stroke="#f2ede4"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
        </g>
      ))}
    </svg>
  );
}
