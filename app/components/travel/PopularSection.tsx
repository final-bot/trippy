"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import HighlightWord from "./ui/HighlightWord";

// ─── Types ────────────────────────────────────────────────────────────────────

interface MapDestination {
  id: number;
  name: string;
  country: string;
  category: string;
  image: string;
  slug: string;
  // Percentage position on the SVG viewBox (0–100)
  x: number;
  y: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// x/y are percentages across the map container (approximate real-world positions)

const MAP_DESTINATIONS: MapDestination[] = [
  {
    id: 1,
    name: "Kyoto",
    country: "Japan",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80",
    slug: "kyoto-japan",
    x: 79,
    y: 33,
  },
  {
    id: 2,
    name: "Santorini",
    country: "Greece",
    category: "Romance",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&q=80",
    slug: "santorini-greece",
    x: 53,
    y: 30,
  },
  {
    id: 3,
    name: "Marrakech",
    country: "Morocco",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=400&q=80",
    slug: "marrakech-morocco",
    x: 45,
    y: 36,
  },
  {
    id: 4,
    name: "Patagonia",
    country: "Chile",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
    slug: "patagonia-chile",
    x: 26,
    y: 76,
  },
  {
    id: 5,
    name: "Bali",
    country: "Indonesia",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80",
    slug: "bali-indonesia",
    x: 76,
    y: 55,
  },
  {
    id: 6,
    name: "Amalfi Coast",
    country: "Italy",
    category: "Leisure",
    image: "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=400&q=80",
    slug: "amalfi-coast-italy",
    x: 50,
    y: 27,
  },
];

const PAGINATION_COUNT = 5;

// ─── Component ────────────────────────────────────────────────────────────────

export default function PopularDestinationsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(1);
  const [activePage, setActivePage] = useState(0);

  const activeDestination = MAP_DESTINATIONS.find((d) => d.id === hoveredId);

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#fafafa",
        px: { xs: 4, md: 8, lg: 12 },
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 8 },
      }}
    >
      {/* ── Section header ─────────────────────────────────────────────────── */}
      <Box sx={{ mb: 2 }}>
        <Typography
          component="h2"
          sx={{
            fontFamily: "inherit",
            fontWeight: 800,
            fontSize: { xs: "2.2rem", md: "2.8rem", lg: "3rem" },
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#141414",
            mb: 1.5,
          }}
        >
          <HighlightWord>Popular</HighlightWord> Destinations
        </Typography>
        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: "14px",
            color: "#5A5A5A",
            lineHeight: 1.6,
            maxWidth: 380,
          }}
        >
          Explore the most popular travel destinations handpicked by trusted
          travelers by country by country.
        </Typography>
      </Box>

      {/* ── Map container ──────────────────────────────────────────────────── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          // Maintain aspect ratio for the map
          paddingBottom: { xs: "60%", md: "50%", lg: "44%" },
          overflow: "visible",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* SVG World Map */}
          <WorldMapSVG />

          {/* Pin markers */}
          {MAP_DESTINATIONS.map((dest) => (
            <MapPin
              key={dest.id}
              dest={dest}
              isActive={hoveredId === dest.id}
              onHover={() => setHoveredId(dest.id)}
              onLeave={() => {}}
            />
          ))}

          {/* Destination card that floats near the active pin */}
          {activeDestination && (
            <DestinationCard
              dest={activeDestination}
              onClose={() => setHoveredId(null)}
            />
          )}
        </Box>
      </Box>

      {/* ── Pagination dots ─────────────────────────────────────────────────── */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mt: 4,
        }}
      >
        {Array.from({ length: PAGINATION_COUNT }).map((_, i) => (
          <Box
            key={i}
            onClick={() => setActivePage(i)}
            sx={{
              width: activePage === i ? 24 : 8,
              height: 8,
              borderRadius: "999px",
              backgroundColor: activePage === i ? "#141414" : "#D1D1D1",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

// ─── Map Pin ──────────────────────────────────────────────────────────────────

function MapPin({
  dest,
  isActive,
  onHover,
  onLeave,
}: {
  dest: MapDestination;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <Box
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onHover}
      sx={{
        position: "absolute",
        left: `${dest.x}%`,
        top: `${dest.y}%`,
        transform: "translate(-50%, -100%)",
        cursor: "pointer",
        zIndex: isActive ? 20 : 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // Subtle scale on active
        transition: "transform 0.2s ease",
        "&:hover": { transform: "translate(-50%, -100%) scale(1.15)" },
      }}
    >
      {/* Pin head */}
      <Box
        sx={{
          width: isActive ? 36 : 26,
          height: isActive ? 36 : 26,
          borderRadius: "50% 50% 50% 0",
          transform: "rotate(-45deg)",
          backgroundColor: isActive ? "#141414" : "#888",
          boxShadow: isActive
            ? "0 4px 16px rgba(0,0,0,0.30)"
            : "0 2px 6px rgba(0,0,0,0.15)",
          transition: "all 0.2s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Inner dot */}
        <Box
          sx={{
            width: isActive ? 10 : 7,
            height: isActive ? 10 : 7,
            borderRadius: "50%",
            backgroundColor: "#fff",
            transform: "rotate(45deg)",
          }}
        />
      </Box>
    </Box>
  );
}

// ─── Destination hover card ───────────────────────────────────────────────────

function DestinationCard({
  dest,
  onClose,
}: {
  dest: MapDestination;
  onClose: () => void;
}) {
  return (
    <Box
      sx={{
        position: "absolute",
        left: `${Math.min(dest.x, 72)}%`,
        top: `${Math.max(dest.y - 52, 2)}%`,
        transform: "translateX(-50%)",
        zIndex: 30,
        width: 200,
        backgroundColor: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 12px 40px rgba(0,0,0,0.16)",
        border: "1px solid #E1E1E1",
        // Animate in
        animation: "cardIn 0.2s ease-out",
        "@keyframes cardIn": {
          from: { opacity: 0, transform: "translateX(-50%) translateY(8px)" },
          to: { opacity: 1, transform: "translateX(-50%) translateY(0)" },
        },
      }}
    >

      <Box sx={{ position: "relative", height: 110 }}>
        <Box
          component="img"
          src={dest.image}
          alt={dest.name}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)",
          }}
        />
      </Box>

      <Box sx={{ px: 2, py: 1.5 }}>
        <Typography
          sx={{
            fontFamily: "inherit",
            fontWeight: 700,
            fontSize: "13px",
            color: "#141414",
            lineHeight: 1.3,
          }}
        >
          {dest.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "inherit",
            fontSize: "11px",
            color: "#5A5A5A",
            mb: 1.5,
          }}
        >
          {dest.country}
        </Typography>

        {/* "See More" button — links to future detail page */}
        <Button
          href={`/destinations/${dest.slug}`}
          sx={{
            width: "100%",
            py: 0.75,
            borderRadius: "999px",
            fontSize: "11px",
            fontWeight: 700,
            fontFamily: "inherit",
            textTransform: "none",
            color: "#fff",
            backgroundColor: "#141414",
            "&:hover": { backgroundColor: "#2a2a2a" },
          }}
        >
          See More
        </Button>
      </Box>
    </Box>
  );
}

// ─── World Map SVG ────────────────────────────────────────────────────────────
// Simplified but recognisable world map silhouette in light grey.
// Using a Natural Earth-style simplified path data.

function WorldMapSVG() {
  return (
    <Box
      component="svg"
      viewBox="0 0 1000 500"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <defs>
        <style>{`
          .land { fill: #E0E0DC; stroke: #fff; stroke-width: 1; }
        `}</style>
      </defs>

      {/* ── North America ── */}
      <path className="land" d="
        M 95 60 L 85 80 L 75 95 L 65 110 L 60 130
        L 58 145 L 62 160 L 70 170 L 80 175 L 90 180
        L 95 195 L 100 210 L 105 225 L 110 235 L 115 240
        L 125 238 L 135 230 L 140 220 L 145 210 L 148 200
        L 155 195 L 165 190 L 170 185 L 175 175 L 172 165
        L 168 155 L 162 145 L 158 135 L 155 120 L 153 105
        L 150 90 L 145 78 L 138 68 L 128 62 L 115 58 Z
      " />
      {/* Alaska */}
      <path className="land" d="M 60 80 L 50 85 L 40 90 L 35 100 L 42 108 L 55 105 L 65 98 Z" />
      {/* Canada east */}
      <path className="land" d="
        M 150 65 L 160 60 L 175 58 L 190 55 L 200 60
        L 210 68 L 215 80 L 210 90 L 200 95 L 190 90
        L 180 88 L 170 90 L 162 95 L 158 105 L 155 90
        L 152 78 Z
      " />
      {/* Mexico + Central America */}
      <path className="land" d="
        M 110 240 L 115 255 L 118 270 L 120 282
        L 125 288 L 130 285 L 132 275 L 128 260 L 125 248
        L 120 240 Z
      " />

      {/* ── South America ── */}
      <path className="land" d="
        M 200 270 L 192 280 L 188 295 L 185 315
        L 183 335 L 182 355 L 183 375 L 186 390
        L 190 405 L 195 415 L 202 420 L 210 418
        L 218 410 L 224 398 L 228 382 L 230 365
        L 232 345 L 230 325 L 226 305 L 220 290
        L 215 278 L 208 270 Z
      " />
      {/* Brazil bulge */}
      <path className="land" d="
        M 218 278 L 230 272 L 245 268 L 258 265
        L 268 268 L 275 276 L 278 288 L 272 300
        L 260 308 L 248 312 L 235 310 L 225 305
        L 218 295 Z
      " />

      {/* ── Europe ── */}
      <path className="land" d="
        M 452 80 L 445 88 L 440 98 L 438 110
        L 442 118 L 450 122 L 460 120 L 468 112
        L 472 102 L 470 92 L 462 84 Z
      " />
      <path className="land" d="
        M 462 120 L 455 130 L 450 142 L 452 152
        L 460 158 L 470 155 L 478 147 L 480 136
        L 476 126 Z
      " />
      {/* Iberian */}
      <path className="land" d="
        M 432 138 L 425 145 L 420 155 L 422 165
        L 430 170 L 440 168 L 447 160 L 448 150
        L 444 142 Z
      " />
      {/* UK */}
      <path className="land" d="
        M 440 95 L 433 100 L 430 110 L 433 118
        L 440 120 L 446 114 L 447 104 Z
      " />
      {/* Scandinavia */}
      <path className="land" d="
        M 465 60 L 458 68 L 455 80 L 458 90
        L 465 92 L 472 85 L 475 74 L 472 65 Z
      " />
      <path className="land" d="
        M 474 65 L 470 72 L 468 82 L 472 90
        L 480 92 L 487 85 L 488 74 L 484 66 Z
      " />

      {/* ── Africa ── */}
      <path className="land" d="
        M 455 180 L 448 192 L 444 208 L 442 228
        L 443 250 L 447 272 L 453 292 L 460 310
        L 467 325 L 473 335 L 478 338 L 483 335
        L 490 322 L 497 306 L 502 288 L 505 268
        L 505 248 L 503 228 L 498 208 L 490 190
        L 482 178 L 472 172 L 462 172 Z
      " />
      {/* Horn of Africa */}
      <path className="land" d="
        M 505 248 L 515 240 L 522 245 L 518 258
        L 510 262 L 505 258 Z
      " />
      {/* Madagascar */}
      <path className="land" d="
        M 508 295 L 505 305 L 505 318 L 508 328
        L 513 325 L 515 314 L 514 302 Z
      " />

      {/* ── Middle East ── */}
      <path className="land" d="
        M 518 155 L 510 162 L 507 172 L 510 182
        L 518 187 L 528 183 L 534 173 L 532 162
        L 525 156 Z
      " />
      {/* Arabian Peninsula */}
      <path className="land" d="
        M 530 175 L 524 185 L 522 200 L 525 215
        L 530 225 L 538 228 L 546 222 L 550 210
        L 548 195 L 542 183 L 535 176 Z
      " />

      {/* ── Russia / Central Asia ── */}
      <path className="land" d="
        M 490 55 L 480 60 L 475 70 L 478 82
        L 488 88 L 500 88 L 515 85 L 528 80
        L 540 75 L 548 68 L 545 60 L 535 55
        L 520 52 L 505 52 Z
      " />
      <path className="land" d="
        M 548 52 L 540 58 L 538 68 L 545 75
        L 558 78 L 572 75 L 582 68 L 580 58
        L 570 52 L 558 50 Z
      " />
      <path className="land" d="
        M 582 50 L 572 56 L 570 66 L 576 74
        L 590 76 L 605 72 L 615 65 L 612 55
        L 600 48 L 590 48 Z
      " />
      <path className="land" d="
        M 615 48 L 605 54 L 603 65 L 610 72
        L 625 74 L 640 70 L 650 62 L 647 52
        L 635 46 L 622 46 Z
      " />
      <path className="land" d="
        M 650 46 L 640 52 L 638 62 L 645 70
        L 660 72 L 675 68 L 682 60 L 678 50
        L 665 44 L 655 44 Z
      " />
      <path className="land" d="
        M 680 44 L 670 50 L 668 60 L 676 68
        L 692 70 L 706 66 L 712 58 L 708 48
        L 695 42 L 685 42 Z
      " />
      <path className="land" d="
        M 710 42 L 700 48 L 698 58 L 706 66
        L 722 68 L 736 64 L 742 56 L 738 46
        L 725 40 L 715 40 Z
      " />

      {/* ── South Asia ── */}
      {/* India */}
      <path className="land" d="
        M 590 150 L 582 162 L 578 178 L 576 195
        L 578 212 L 583 228 L 590 240 L 597 248
        L 604 250 L 610 245 L 615 232 L 616 216
        L 613 198 L 608 182 L 602 168 L 596 156 Z
      " />
      {/* Sri Lanka */}
      <path className="land" d="M 602 255 L 598 262 L 602 268 L 608 264 L 608 257 Z" />

      {/* ── Southeast Asia ── */}
      <path className="land" d="
        M 660 155 L 652 165 L 650 178 L 655 190
        L 664 196 L 673 192 L 678 180 L 675 166
        L 668 156 Z
      " />
      {/* Indochina */}
      <path className="land" d="
        M 672 160 L 682 155 L 692 158 L 698 168
        L 696 180 L 688 188 L 678 185 L 672 175 Z
      " />
      {/* Thailand south */}
      <path className="land" d="
        M 670 192 L 665 205 L 667 218 L 673 224 L 678 218 L 678 205 Z
      " />
      {/* Indonesia/Sumatra rough */}
      <path className="land" d="
        M 680 235 L 670 240 L 665 250 L 668 260
        L 678 264 L 690 260 L 698 252 L 696 242
        L 688 236 Z
      " />
      {/* Java */}
      <path className="land" d="
        M 700 255 L 692 260 L 690 268 L 700 272
        L 712 270 L 718 262 L 712 256 Z
      " />
      {/* Borneo */}
      <path className="land" d="
        M 715 225 L 705 232 L 702 245 L 706 258
        L 718 262 L 730 256 L 736 244 L 732 232
        L 722 225 Z
      " />

      {/* ── East Asia ── */}
      {/* China */}
      <path className="land" d="
        M 660 105 L 648 112 L 640 122 L 638 135
        L 643 148 L 652 156 L 665 160 L 678 157
        L 688 148 L 694 136 L 692 122 L 684 112
        L 672 106 Z
      " />
      {/* Korean peninsula */}
      <path className="land" d="
        M 720 115 L 714 122 L 713 132 L 718 140
        L 726 142 L 732 136 L 733 125 L 728 116 Z
      " />
      {/* Japan main */}
      <path className="land" d="
        M 740 110 L 734 118 L 733 130 L 738 140
        L 746 144 L 754 138 L 756 126 L 750 115 Z
      " />
      {/* Japan Kyushu */}
      <path className="land" d="M 746 145 L 740 150 L 740 158 L 748 160 L 754 154 L 752 146 Z" />

      {/* ── Australia ── */}
      <path className="land" d="
        M 740 315 L 730 325 L 724 340 L 722 358
        L 724 375 L 730 388 L 740 396 L 752 398
        L 764 394 L 774 384 L 780 370 L 780 353
        L 776 336 L 767 322 L 755 314 L 745 312 Z
      " />
      {/* NZ North */}
      <path className="land" d="M 805 368 L 800 375 L 800 385 L 806 390 L 812 385 L 812 375 Z" />
      {/* NZ South */}
      <path className="land" d="M 802 393 L 797 400 L 797 412 L 803 418 L 810 413 L 810 400 Z" />

      {/* ── Greenland ── */}
      <path className="land" d="
        M 210 30 L 200 38 L 196 50 L 200 62
        L 210 68 L 222 65 L 228 54 L 225 42
        L 218 33 Z
      " />

      {/* ── Iceland ── */}
      <path className="land" d="M 405 70 L 398 76 L 397 85 L 403 90 L 412 88 L 416 80 L 412 72 Z" />
    </Box>
  );
}
