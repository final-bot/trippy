"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NorthEastIcon from "@mui/icons-material/NorthEast";

import { HERO_THUMBNAILS } from "../../data/travel";
import AuthActions from "./AuthActions";
import HighlightWord from "./ui/HighlightWord";
import NavBar from "./NavBar";

export default function HeroSection() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [slideIndex, setSlideIndex] = useState(2);

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f3",
        overflow: "hidden",
        scrollMarginTop: "24px",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          lg: "minmax(420px, 0.92fr) minmax(620px, 1.08fr)",
        },
        alignItems: "stretch",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          px: { xs: 4, lg: 5 },
          pt: 4,
          pb: 6,
          backgroundColor: "#f5f5f3",
          minWidth: 0,
        }}
      >
        <Box sx={{ mb: 2 }}>
          <NavBar />
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2.5,
            maxWidth: 560,
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontFamily: "inherit",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
              fontSize: "clamp(2.6rem, 4vw, 4.6rem)",
              color: "#141414",
            }}
          >
            Feel the <HighlightWord>Freedom</HighlightWord> of
            <br />
            Travel With
            <br />
            Trusted
            <br />
            <Box component="span" sx={{ position: "relative", display: "inline-block" }}>
              Travelers
              <Box
                component="svg"
                viewBox="0 0 280 10"
                sx={{
                  position: "absolute",
                  left: 0,
                  bottom: -8,
                  width: "100%",
                  height: "10px",
                }}
                fill="none"
              >
                <path
                  d="M2 7 Q45 1 90 7 Q135 13 180 7 Q225 1 278 6"
                  stroke="#F5A623"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </Box>
            </Box>
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              maxWidth: 260,
              my: 0.5,
            }}
          >
            <Box sx={{ flex: 1, height: "1px", backgroundColor: "#DADADA" }} />
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "2px solid #DADADA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 12,
                  borderRadius: "999px",
                  backgroundColor: "#141414",
                  animation: "bounce 1.8s ease-in-out infinite",
                  "@keyframes bounce": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-4px)" },
                  },
                }}
              />
            </Box>
            <Box sx={{ flex: 1, height: "1px", backgroundColor: "#DADADA" }} />
          </Box>

          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: "18px",
              color: "#5A5A5A",
              lineHeight: 1.7,
              maxWidth: 480,
            }}
          >
            Discover amazing destinations with a community of trusted travelers.
            Let&apos;s explore the world together with comfort and unforgettable
            experiences.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pt: { xs: 0, lg: 3 },
          pb: 0,
          pl: { xs: 4, lg: 0 },
          pr: { xs: 4, lg: 3 },
          mb: { xs: 4, lg: 0 },
          backgroundColor: "#f5f5f3",
          minWidth: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 20,
          }}
        >
          <AuthActions variant="hero" />
        </Box>

        <Box
          sx={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            minHeight: { xs: 420, md: 520, lg: 680 },
            width: "100%",
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=85"
            alt="Mountain landscape"
            sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />

          <Box
            sx={{
              position: "absolute",
              top: 32,
              left: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.5,
              zIndex: 10,
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.90)",
                backdropFilter: "blur(8px)",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.70)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                px: 1.5,
                py: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: 700,
                  pr: 1.5,
                  fontFamily: "inherit",
                  color: "#141414",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                }}
              >
                Book Now
              </Typography>
            </Box>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                backgroundColor: "#141414",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.20)",
                cursor: "pointer",
              }}
            >
              <NorthEastIcon sx={{ color: "#fff", fontSize: 16 }} />
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: { xs: "100%", md: "68%", lg: "60%" },
              backgroundColor: "#fff",
              borderRadius: "0 24px 0 24px",
              border: "1px solid #E1E1E1",
              px: 2,
              py: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              boxShadow: "0 -4px 24px rgba(0,0,0,0.06)",
            }}
          >
            <Box sx={{ display: "flex", gap: 1.5, flex: 1 }}>
              {HERO_THUMBNAILS.map((thumbnail, index) => (
                <Box
                  key={thumbnail.id}
                  onClick={() => setActiveThumb(index)}
                  sx={{
                    position: "relative",
                    flex: 1,
                    height: 90,
                    borderRadius: "12px",
                    overflow: "hidden",
                    cursor: "pointer",
                    outline: activeThumb === index ? "2px solid #141414" : "none",
                    outlineOffset: "2px",
                    opacity: activeThumb === index ? 1 : 0.75,
                    transition: "opacity 0.2s, outline 0.2s",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  <Box
                    component="img"
                    src={thumbnail.image}
                    alt={thumbnail.label}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.60) 0%, transparent 60%)",
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: 6,
                      left: 0,
                      right: 0,
                      textAlign: "center",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 600,
                      fontFamily: "inherit",
                    }}
                  >
                    {thumbnail.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 1,
                flexShrink: 0,
              }}
            >
              <Box sx={{ display: "flex", gap: 0.75 }}>
                <IconButton
                  size="small"
                  onClick={() => setSlideIndex((value) => Math.max(1, value - 1))}
                  sx={{
                    width: 32,
                    height: 32,
                    border: "1px solid #E1E1E1",
                    borderRadius: "50%",
                    color: "#5A5A5A",
                    "&:hover": { backgroundColor: "#f5f5f3" },
                  }}
                >
                  <ArrowBackIcon sx={{ fontSize: 14 }} />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => setSlideIndex((value) => Math.min(12, value + 1))}
                  sx={{
                    width: 32,
                    height: 32,
                    border: "1px solid #E1E1E1",
                    borderRadius: "50%",
                    color: "#5A5A5A",
                    "&:hover": { backgroundColor: "#f5f5f3" },
                  }}
                >
                  <ArrowForwardIcon sx={{ fontSize: 14 }} />
                </IconButton>
              </Box>

              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontWeight: 800,
                  fontSize: "22px",
                  lineHeight: 1,
                  color: "#141414",
                }}
              >
                {slideIndex}
                <Box
                  component="span"
                  sx={{ fontWeight: 400, fontSize: "13px", color: "#5A5A5A" }}
                >
                  /12
                </Box>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
