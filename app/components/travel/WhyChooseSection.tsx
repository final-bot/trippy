import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";

import HighlightWord from "./ui/HighlightWord";

const REASONS = [
  "Handpicked Places",
  "Real Traveler Reviews",
  "Global Community & Experts",
  "Easy Trip Planning",
  "Safe & Trusted Platform",
] as const;

const AVATARS = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80",
] as const;

export default function WhyChooseSection() {
  return (
    <Box
      component="section"
      id="why-us"
      sx={{
        px: { xs: 3, md: 8, lg: 12 },
        py: { xs: 8, md: 10 },
        backgroundColor: "#fafafa",
        scrollMarginTop: "24px",
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
          Why Choose Us
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr 1.05fr" },
          gap: { xs: 4, lg: 4 },
          alignItems: "end",
        }}
      >
        <Box sx={{ alignSelf: "stretch" }}>
          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.4rem", md: "3.2rem", lg: "4rem" },
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "#141414",
              maxWidth: 640,
              mb: 2,
            }}
          >
            <HighlightWord>Why</HighlightWord> Travelers
            <br />
            Choose Trippy
          </Typography>

          <Box
            component="svg"
            viewBox="0 0 380 44"
            sx={{
              width: { xs: 220, md: 340 },
              height: "auto",
              mb: 4,
            }}
            fill="none"
          >
            <path
              d="M6 24 C90 12, 168 12, 250 18"
              stroke="#F3B63F"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M205 34 C272 24, 324 20, 374 12"
              stroke="#F3B63F"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </Box>

          <Box
            sx={{
              borderRadius: "34px",
              border: "1px solid rgba(20,20,20,0.08)",
              backgroundColor: "#fff",
              overflow: "hidden",
              boxShadow: "0 16px 34px rgba(20,20,20,0.04)",
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200&q=80"
              alt="World map"
              sx={{
                width: "100%",
                height: { xs: 220, md: 260 },
                objectFit: "cover",
                display: "block",
                filter: "grayscale(1) brightness(1.08)",
              }}
            />
            <Box sx={{ p: 3 }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.6rem", md: "1.85rem" },
                  lineHeight: 1.15,
                  color: "#141414",
                  mb: 1.5,
                }}
              >
                Traveler-Loved Destinations
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#7A7A7A",
                  maxWidth: 470,
                }}
              >
                Discover beautiful and unforgettable destinations loved by
                travelers around the world.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ pb: { lg: 1 } }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.8rem", md: "2.1rem" },
              lineHeight: 1.2,
              color: "#141414",
              mb: 2,
            }}
          >
            Connecting Explorers Worldwide
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#7A7A7A",
              maxWidth: 420,
              mb: 3,
            }}
          >
            We bring explorers together to share authentic experiences and
            unforgettable journeys.
          </Typography>

          <Box sx={{ display: "grid", gap: 1.6, mb: 4 }}>
            {REASONS.map((reason) => (
              <Box
                key={reason}
                sx={{ display: "flex", alignItems: "center", gap: 1.25 }}
              >
                <CheckCircleRoundedIcon
                  sx={{ fontSize: 20, color: "#141414", flexShrink: 0 }}
                />
                <Typography sx={{ fontSize: "15px", color: "#3F3F3F" }}>
                  {reason}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.3rem" },
              lineHeight: 1.1,
              color: "#141414",
              mb: 2,
            }}
          >
            10K+ Happy Travelers
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
              {AVATARS.map((avatar, index) => (
                <Box
                  key={avatar}
                  component="img"
                  src={avatar}
                  alt=""
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #fff",
                    ml: index === 0 ? 0 : -1.5,
                    boxShadow: "0 8px 20px rgba(20,20,20,0.10)",
                  }}
                />
              ))}
            </Box>
            <Typography
              sx={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#7A7A7A",
              }}
            >
              From 50+ countries worldwide
            </Typography>
          </Box>
        </Box>

        <Box sx={{ alignSelf: "stretch" }}>
          <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", lg: "flex-end" }, mb: 3 }}>
            <Button
              component="a"
              href="/sign-up"
              sx={{
                px: 3.4,
                py: 1.6,
                borderRadius: "999px",
                fontSize: "15px",
                fontWeight: 700,
                textTransform: "none",
                color: "#fff",
                backgroundColor: "#141414",
                boxShadow: "0 20px 40px rgba(20,20,20,0.14)",
                "&:hover": { backgroundColor: "#2A2A2A" },
              }}
              endIcon={<NorthEastRoundedIcon />}
            >
              Plan Your Journey
            </Button>
          </Box>

          <Box
            sx={{
              position: "relative",
              borderRadius: "34px",
              overflow: "hidden",
              minHeight: { xs: 360, md: 420, lg: 510 },
              boxShadow: "0 18px 36px rgba(20,20,20,0.08)",
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80"
              alt="Desert adventure"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.45) 100%)",
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                left: 28,
                bottom: 28,
                right: 92,
                color: "#fff",
                fontSize: { xs: "1.6rem", md: "2rem" },
                lineHeight: 1.25,
                fontWeight: 500,
              }}
            >
              Epic adventures for hikers, climbers, and thrill seekers.
            </Typography>
            <Box
              sx={{
                position: "absolute",
                right: 24,
                bottom: 24,
                width: 60,
                height: 60,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.55)",
                backgroundColor: "rgba(20,20,20,0.42)",
                backdropFilter: "blur(10px)",
                display: "grid",
                placeItems: "center",
                color: "#fff",
              }}
            >
              <NorthEastRoundedIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
