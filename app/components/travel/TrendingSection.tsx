import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { DESTINATIONS } from "../../data/travel";
import HighlightWord from "./ui/HighlightWord";
import Pill from "./ui/Pill";

export default function TrendingSection() {
  const primaryDestination = DESTINATIONS[0];
  const secondaryDestination = DESTINATIONS[1];
  const tertiaryDestination = DESTINATIONS[2];

  return (
    <Box
      component="section"
      id="trips"
      sx={{
        backgroundColor: "#fafafa",
        px: { xs: 4, md: 8, lg: 12 },
        py: { xs: 8, md: 12 },
        scrollMarginTop: "24px",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "minmax(300px, 0.8fr) minmax(0, 1.45fr)",
          },
          gap: { xs: 5, lg: 4 },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: 0,
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              width: "fit-content",
              backgroundColor: "#fff",
              border: "1px solid #E7E7E7",
              borderRadius: "999px",
              px: 1.6,
              py: 0.85,
              mb: 5,
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#141414",
              }}
            />
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#737373",
              }}
            >
              Trending Trips
            </Typography>
          </Box>

          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.4rem", md: "3.1rem", lg: "4rem" },
              lineHeight: 1.06,
              letterSpacing: "-0.04em",
              color: "#141414",
              maxWidth: 560,
              mb: 3,
            }}
          >
            <HighlightWord>Discover</HighlightWord> The Most
            <br />
            Loved Destinations
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "18px", md: "19px" },
              color: "#7A7A7A",
              lineHeight: 1.65,
              maxWidth: 430,
              mb: 6,
            }}
          >
            Discover beautiful destinations loved by travelers around the
            world.
          </Typography>

          <Button
            sx={{
              width: "fit-content",
              minWidth: 232,
              px: 4.5,
              py: 1.8,
              borderRadius: "24px",
              fontSize: "15px",
              fontWeight: 800,
              textTransform: "none",
              color: "#fff",
              backgroundColor: "#141414",
              boxShadow: "0 20px 40px rgba(20,20,20,0.12)",
              "&:hover": { backgroundColor: "#2A2A2A" },
            }}
          >
            Book Now
          </Button>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr 0.9fr" },
            gap: { xs: 3, md: 2.5, lg: 3 },
            alignItems: "end",
            minWidth: 0,
          }}
        >
          <Box>
            <EditorialCard
              dest={primaryDestination}
              height={{ xs: 360, md: 470, lg: 560 }}
              imagePosition="center"
            />
            <Box sx={{ pt: 2.5 }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.5rem", md: "1.9rem" },
                  lineHeight: 1.12,
                  color: "#1B1B1B",
                  mb: 0.8,
                }}
              >
                {primaryDestination.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#8A8A8A",
                  lineHeight: 1.6,
                }}
              >
                {primaryDestination.subtitle}
              </Typography>
            </Box>
          </Box>

          <EditorialCard
            dest={secondaryDestination}
            height={{ xs: 320, md: 350, lg: 400 }}
            offset={{ md: 70, lg: 95 }}
            imagePosition="center"
          />

          <Box sx={{ display: "grid", gap: 3 }}>
            <EditorialCard
              dest={tertiaryDestination}
              height={{ xs: 320, md: 430, lg: 505 }}
              imagePosition="center"
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
                gap: 2.5,
                px: 0.5,
              }}
            >
              {["\u2190", "\u2192"].map((arrow) => (
                <Box
                  key={arrow}
                  sx={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    fontSize: "28px",
                    lineHeight: 1,
                    color: "#3D3D3D",
                    cursor: "pointer",
                    transition: "transform 0.2s ease, color 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-1px)",
                      color: "#141414",
                    },
                  }}
                >
                  {arrow}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function EditorialCard({
  dest,
  height,
  offset,
  imagePosition,
}: {
  dest: (typeof DESTINATIONS)[0];
  height: { xs: number; md: number; lg: number };
  offset?: { md: number; lg: number };
  imagePosition?: string;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        height,
        mt: offset ? { xs: 0, md: `${offset.md}px`, lg: `${offset.lg}px` } : 0,
        borderRadius: "34px",
        overflow: "hidden",
        boxShadow: "0 22px 40px rgba(30, 53, 42, 0.10)",
        cursor: "pointer",
        "&:hover img": { transform: "scale(1.04)" },
      }}
    >
      <Box
        component="img"
        src={dest.image}
        alt={dest.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: imagePosition ?? "center",
          transition: "transform 0.5s ease",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.08) 48%, rgba(0,0,0,0.34) 100%)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          right: 18,
          bottom: 18,
        }}
      >
        <Pill label={dest.category} />
      </Box>
    </Box>
  );
}
