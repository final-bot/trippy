import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { DESTINATIONS } from "../../data/travel";
import HighlightWord from "./ui/HighlightWord";
import Pill from "./ui/Pill";

export default function TrendingSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#fafafa",
        px: { xs: 4, md: 8, lg: 12 },
        py: { xs: 8, md: 12 },
      }}
    >
      <Grid container spacing={8} alignItems="center">
        <Grid sx={{ xs: 12, lg: 4 }}>
          {/* "Trending Trips" pill badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "#fff",
              border: "1px solid #E1E1E1",
              borderRadius: "999px",
              px: 2,
              py: 0.75,
              mb: 3,
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#141414",
              }}
            />
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                fontFamily: "inherit",
                color: "#5A5A5A",
              }}
            >
              Trending Trips
            </Typography>
          </Box>

          <Typography
            component="h2"
            sx={{
              fontFamily: "inherit",
              fontWeight: 800,
              fontSize: { xs: "2.2rem", md: "2.8rem", lg: "3rem" },
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#141414",
              mb: 2,
            }}
          >
            Discover The Most{" "}
            <Box component="br" />
            <HighlightWord>Loved</HighlightWord> Destinations
          </Typography>

          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: "15px",
              color: "#5A5A5A",
              lineHeight: 1.7,
              maxWidth: 320,
              mb: 4,
            }}
          >
            Discover beautiful destinations loved by travelers around the world.
          </Typography>

          <Button
            sx={{
              px: 3.5,
              py: 1.5,
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 700,
              fontFamily: "inherit",
              textTransform: "none",
              color: "#fff",
              backgroundColor: "#141414",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              "&:hover": { backgroundColor: "#2a2a2a" },
            }}
          >
            Book Now
          </Button>

          {/* Caption for primary card */}
          <Box sx={{ mt: 5, pt: 4, borderTop: "1px solid #E1E1E1" }}>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontWeight: 700,
                fontSize: "17px",
                color: "#141414",
              }}
            >
              {DESTINATIONS[0].title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: "13px",
                color: "#5A5A5A",
                mt: 0.5,
              }}
            >
              {DESTINATIONS[0].subtitle}
            </Typography>
          </Box>
        </Grid>

        <Grid sx={{xs: 12, lg: 8}}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              gap: 2,
              height: { xs: "auto", lg: 400 },
            }}
          >
            {/* Card 1 — tallest, leftmost */}
            <DestCard
              dest={DESTINATIONS[0]}
              height={{ xs: 280, lg: 380 }}
              flex="1.2"
            />
            {/* Card 2 — shortest */}
            <DestCard
              dest={DESTINATIONS[1]}
              height={{ xs: 220, lg: 280 }}
              flex="1"
            />
            {/* Card 3 — medium */}
            <DestCard
              dest={DESTINATIONS[2]}
              height={{ xs: 250, lg: 320 }}
              flex="1"
              showArrows
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

// ── Individual destination card ──────────────────────────────────────────────

function DestCard({
  dest,
  height,
  flex,
  showArrows = false,
}: {
  dest: (typeof DESTINATIONS)[0];
  height: object;
  flex: string;
  showArrows?: boolean;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        flex,
        height,
        flexShrink: 0,
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        cursor: "pointer",
        "&:hover img": { transform: "scale(1.05)" },
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
          transition: "transform 0.5s ease",
        }}
      />
      {/* Gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)",
        }}
      />
      {/* Category pill */}
      <Box sx={{ position: "absolute", bottom: 14, left: 14 }}>
        <Pill label={dest.category} />
      </Box>

      {/* Nav arrows for last card */}
      {showArrows && (
        <Box
          sx={{
            position: "absolute",
            bottom: 14,
            right: 14,
            display: "flex",
            gap: 0.75,
          }}
        >
          {["←", "→"].map((arrow) => (
            <Box
              key={arrow}
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(4px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                color: "#141414",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#fff" },
              }}
            >
              {arrow}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
