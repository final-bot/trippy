"use client";

import { useMemo, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Map, { Marker, type MapRef } from "react-map-gl/mapbox";

import HighlightWord from "./ui/HighlightWord";

interface MapDestination {
  id: number;
  name: string;
  country: string;
  category: string;
  image: string;
  slug: string;
  latitude: number;
  longitude: number;
}

const MAPBOX_TOKEN =
  process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ??
  process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const DEFAULT_VIEW_STATE = {
  longitude: 18,
  latitude: 16,
  zoom: 0.85,
};

const MAP_DESTINATIONS: MapDestination[] = [
  {
    id: 1,
    name: "Kyoto",
    country: "Japan",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    slug: "kyoto-japan",
    latitude: 35.0116,
    longitude: 135.7681,
  },
  {
    id: 2,
    name: "Santorini",
    country: "Greece",
    category: "Romance",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    slug: "santorini-greece",
    latitude: 36.3932,
    longitude: 25.4615,
  },
  {
    id: 3,
    name: "Marrakech",
    country: "Morocco",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80",
    slug: "marrakech-morocco",
    latitude: 31.6295,
    longitude: -7.9811,
  },
  {
    id: 4,
    name: "Patagonia",
    country: "Chile",
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    slug: "patagonia-chile",
    latitude: -50.9423,
    longitude: -73.4068,
  },
  {
    id: 5,
    name: "Bali",
    country: "Indonesia",
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    slug: "bali-indonesia",
    latitude: -8.4095,
    longitude: 115.1889,
  },
  {
    id: 6,
    name: "Amalfi Coast",
    country: "Italy",
    category: "Leisure",
    image:
      "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=800&q=80",
    slug: "amalfi-coast-italy",
    latitude: 40.6333,
    longitude: 14.6027,
  },
];

export default function PopularDestinationsSection() {
  const mapRef = useRef<MapRef | null>(null);
  const [selectedId, setSelectedId] = useState<number>(MAP_DESTINATIONS[0].id);

  const selectedDestination = useMemo(
    () => MAP_DESTINATIONS.find((destination) => destination.id === selectedId),
    [selectedId],
  );

  return (
    <Box
      component="section"
      id="destinations"
      sx={{
        background:
          "radial-gradient(circle at top, rgba(203, 233, 240, 0.6), transparent 42%), #fafafa",
        px: { xs: 3, md: 8, lg: 12 },
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 8 },
        scrollMarginTop: "24px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: { xs: "1fr", lg: "320px minmax(0, 1fr)" },
          alignItems: "start",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "inherit",
              fontWeight: 800,
              fontSize: { xs: "2.2rem", md: "2.8rem", lg: "3rem" },
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
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
              lineHeight: 1.7,
              maxWidth: 320,
              mb: 3,
            }}
          >
            Explore the most popular travel destinations handpicked by trusted
            travelers with a real global view instead of a flat illustration.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              mb: { xs: 0, lg: 2 },
            }}
          >
            {MAP_DESTINATIONS.map((destination) => (
              <Chip
                key={destination.id}
                label={destination.name}
                onClick={() => setSelectedId(destination.id)}
                sx={{
                  borderRadius: "999px",
                  fontWeight: 700,
                  backgroundColor:
                    selectedId === destination.id ? "#141414" : "#fff",
                  color: selectedId === destination.id ? "#fff" : "#141414",
                  border:
                    selectedId === destination.id
                      ? "1px solid #141414"
                      : "1px solid rgba(20,20,20,0.12)",
                  boxShadow:
                    selectedId === destination.id
                      ? "0 12px 24px rgba(20,20,20,0.12)"
                      : "none",
                }}
              />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            height: { xs: 540, md: 620 },
            borderRadius: "32px",
            overflow: "hidden",
            border: "1px solid rgba(20,20,20,0.08)",
            boxShadow: "0 28px 70px rgba(18, 40, 54, 0.14)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(237,243,245,0.92) 100%)",
          }}
        >
          {MAPBOX_TOKEN ? (
            <>
              <Map
                ref={mapRef}
                mapboxAccessToken={MAPBOX_TOKEN}
                initialViewState={DEFAULT_VIEW_STATE}
                mapStyle="mapbox://styles/mapbox/outdoors-v12"
                projection="mercator"
                renderWorldCopies={false}
                dragRotate={false}
                scrollZoom
                doubleClickZoom
                touchZoomRotate
                minZoom={0.8}
                maxZoom={4}
                attributionControl={false}
                maxBounds={[
                  [-179.9, -70],
                  [179.9, 85],
                ]}
                style={{ width: "100%", height: "100%" }}
                onLoad={() => {
                  const map = mapRef.current?.getMap();

                  if (!map) {
                    return;
                  }

                  map.resize();
                }}
              >
                {MAP_DESTINATIONS.map((destination) => (
                  <Marker
                    key={destination.id}
                    longitude={destination.longitude}
                    latitude={destination.latitude}
                    anchor="bottom"
                    style={{ zIndex: destination.id === selectedId ? 3 : 2 }}
                    onClick={(event) => {
                      event.originalEvent.stopPropagation();
                      setSelectedId(destination.id);
                    }}
                  >
                    <MapPin
                      isActive={destination.id === selectedId}
                      onHover={() => setSelectedId(destination.id)}
                    />
                  </Marker>
                ))}
              </Map>

              <Box
                sx={{
                  pointerEvents: "none",
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 30%, rgba(13,27,35,0.18) 100%)",
                }}
              />
            </>
          ) : (
            <TokenFallback selectedDestination={selectedDestination} />
          )}

          <Box
            sx={{
              position: "absolute",
              top: { xs: 16, md: 24 },
              right: { xs: 16, md: 24 },
              px: 1.5,
              py: 1,
              borderRadius: "999px",
              backgroundColor: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(20,20,20,0.08)",
              boxShadow: "0 8px 24px rgba(18, 40, 54, 0.08)",
            }}
          >
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#54717E",
              }}
            >
              Curated World Edit
            </Typography>
          </Box>

          {selectedDestination && (
            <DestinationCard
              dest={selectedDestination}
              hasMap={Boolean(MAPBOX_TOKEN)}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

function MapPin({
  isActive,
  onHover,
}: {
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <Box
      onMouseEnter={onHover}
      onClick={onHover}
      sx={{
        position: "relative",
        width: isActive ? 34 : 28,
        height: isActive ? 42 : 34,
        display: "grid",
        placeItems: "center",
        transform: `translateY(${isActive ? "-2px" : "0px"})`,
        transition: "transform 0.25s ease",
        cursor: "pointer",
        filter: isActive
          ? "drop-shadow(0 12px 18px rgba(20,20,20,0.24))"
          : "drop-shadow(0 8px 14px rgba(79,100,112,0.18))",
        "& svg": {
          display: "block",
        },
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 32 44"
        aria-hidden="true"
        sx={{
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
      >
        <ellipse
          cx="16"
          cy="39"
          rx={isActive ? "8" : "6.5"}
          ry={isActive ? "3.5" : "3"}
          fill={isActive ? "rgba(20,20,20,0.18)" : "rgba(79,100,112,0.16)"}
        />
        <path
          d="M16 2C9.4 2 4 7.4 4 14c0 9.5 12 25 12 25s12-15.5 12-25C28 7.4 22.6 2 16 2Z"
          fill={isActive ? "#141414" : "#4F6470"}
          stroke="rgba(255,255,255,0.98)"
          strokeWidth="2.5"
        />
        <circle cx="16" cy="14" r={isActive ? "5.2" : "4.3"} fill="#fff" />
      </Box>
    </Box>
  );
}

function DestinationCard({
  dest,
  hasMap,
}: {
  dest: MapDestination;
  hasMap: boolean;
}) {
  return (
    <Box
      sx={{
        position: "absolute",
        left: { xs: 16, md: 24 },
        right: { xs: 16, md: "auto" },
        bottom: { xs: 16, md: 24 },
        zIndex: 3,
        width: { xs: "auto", md: 290 },
        borderRadius: "24px",
        overflow: "hidden",
        backgroundColor: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.65)",
        boxShadow: "0 24px 50px rgba(18, 40, 54, 0.18)",
      }}
    >
      <Box sx={{ position: "relative", height: 180 }}>
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
            background:
              "linear-gradient(180deg, transparent 0%, rgba(15,25,31,0.16) 45%, rgba(15,25,31,0.82) 100%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: 16,
            right: 16,
            bottom: 16,
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.72)",
                mb: 0.5,
              }}
            >
              {dest.category}
            </Typography>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontWeight: 800,
                fontSize: "1.4rem",
                lineHeight: 1.05,
                color: "#fff",
              }}
            >
              {dest.name}
            </Typography>
          </Box>
          <Box
            sx={{
              px: 1.25,
              py: 0.75,
              borderRadius: "999px",
              backgroundColor: "rgba(255,255,255,0.16)",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              {dest.country}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ px: 2, py: 2 }}>
        <Typography
          sx={{
            fontSize: "12px",
            lineHeight: 1.7,
            color: "#5A5A5A",
            mb: 2,
          }}
        >
          {hasMap
            ? "Spin across the globe and jump between handpicked hotspots with a more realistic sense of distance and place."
            : "Add a `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` to turn this editorial card into a fully interactive globe."}
        </Typography>

        <Button
          href={`/destinations/${dest.slug}`}
          sx={{
            width: "100%",
            py: 1,
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: 800,
            textTransform: "none",
            color: "#fff",
            backgroundColor: "#141414",
            "&:hover": { backgroundColor: "#2a2a2a" },
          }}
        >
          Explore Destination
        </Button>
      </Box>
    </Box>
  );
}

function TokenFallback({
  selectedDestination,
}: {
  selectedDestination: MapDestination | undefined;
}) {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(circle at 20% 20%, rgba(190, 226, 232, 0.8), transparent 24%), radial-gradient(circle at 80% 30%, rgba(200, 218, 234, 0.8), transparent 20%), linear-gradient(180deg, #eef5f6 0%, #dfe9ed 100%)",
      }}
    >
      <Box
        sx={{
          width: "min(88%, 560px)",
          p: { xs: 3, md: 4 },
          borderRadius: "28px",
          backgroundColor: "rgba(255,255,255,0.68)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.7)",
          boxShadow: "0 30px 80px rgba(84, 113, 126, 0.18)",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#54717E",
            mb: 1.5,
          }}
        >
          Interactive Globe Ready
        </Typography>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "1.5rem", md: "2rem" },
            lineHeight: 1.1,
            color: "#141414",
            mb: 1.5,
          }}
        >
          Connect Mapbox to unlock the upgraded world view.
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: 1.7,
            color: "#5A5A5A",
            maxWidth: 420,
            mx: "auto",
            mb: 2,
          }}
        >
          Set `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` in your environment and this
          section will render a true `react-map-gl` globe with animated
          destination markers.
        </Typography>
        {selectedDestination && (
          <Chip
            label={`Previewing ${selectedDestination.name}, ${selectedDestination.country}`}
            sx={{
              borderRadius: "999px",
              backgroundColor: "#fff",
              border: "1px solid rgba(20,20,20,0.08)",
            }}
          />
        )}
      </Box>
    </Box>
  );
}
