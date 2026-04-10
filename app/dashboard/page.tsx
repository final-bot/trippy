"use client";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import LuggageRoundedIcon from "@mui/icons-material/LuggageRounded";
import Map, { Marker } from "react-map-gl/mapbox";

import AuthActions from "../components/travel/AuthActions";
import NavBar from "../components/travel/NavBar";
import HighlightWord from "../components/travel/ui/HighlightWord";
import { useAuth } from "../components/travel/AuthContext";

const MAPBOX_TOKEN =
  process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ??
  process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const UPCOMING_DAY = [
  { time: "08:30", title: "Sunrise breakfast at the riad", detail: "Rooftop dining with the group before departure." },
  { time: "10:00", title: "Desert transfer and photo stop", detail: "Private 4x4 route with scenic viewpoints on the way." },
  { time: "14:30", title: "Camel trek across the dunes", detail: "Meet your guide and settle into the evening route." },
  { time: "19:00", title: "Camp dinner and live music", detail: "Shared dinner under the stars with other travelers." },
] as const;

const TRIP_DAYS = [
  {
    day: "Day 1",
    title: "Arrival in Marrakech",
    details:
      "Airport pickup, check-in at the riad, welcome tea, and a relaxed medina walk before dinner.",
  },
  {
    day: "Day 2",
    title: "Atlas foothills and village lunch",
    details:
      "Private transfer to the foothills, scenic stops, and a hosted lunch with local guides.",
  },
  {
    day: "Day 3",
    title: "Sahara crossing",
    details:
      "Drive toward the dunes, camel trek at sunset, and campfire dinner beneath the stars.",
  },
  {
    day: "Day 4",
    title: "Return and rooftop evening",
    details:
      "Leisurely return to Marrakech with time for shopping, hammam, and a final group dinner.",
  },
] as const;

const TRAVELERS = [
  {
    name: "Maya",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
  },
  {
    name: "Noah",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
  },
  {
    name: "Amelia",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&q=80",
  },
] as const;

export default function DashboardPage() {
  const { user, hydrated } = useAuth();

  if (!hydrated) {
    return null;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(200,240,208,0.32), transparent 28%), #f5f5f3",
        px: { xs: 3, md: 8, lg: 12 },
        py: { xs: 4, md: 5 },
      }}
    >
      <Box sx={{ maxWidth: 1400, mx: "auto" }}>
        <Box sx={{ mb: 4, position: "relative", pr: { md: 28 } }}>
          <NavBar />
          <Box
            sx={{
              position: { xs: "static", md: "absolute" },
              top: 0,
              right: 0,
              mt: { xs: 2, md: 0 },
            }}
          >
            <AuthActions showSignUp />
          </Box>
        </Box>

        {user ? (
          <Box sx={{ display: "grid", gap: 4 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "1.2fr 0.8fr" },
                gap: 3,
              }}
            >
              <Box
                sx={{
                  borderRadius: "34px",
                  p: { xs: 3, md: 4 },
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.94) 0%, rgba(244,249,245,0.98) 100%)",
                  border: "1px solid rgba(20,20,20,0.06)",
                  boxShadow: "0 24px 50px rgba(20,20,20,0.06)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#5F7F70",
                    mb: 1.5,
                  }}
                >
                  Dashboard
                </Typography>
                <Typography
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2.2rem", md: "3.4rem" },
                    lineHeight: 1.04,
                    letterSpacing: "-0.04em",
                    color: "#141414",
                    mb: 1.5,
                  }}
                >
                  Welcome back, <HighlightWord>{user.name.split(" ")[0]}</HighlightWord>
                </Typography>
                <Typography
                  sx={{
                    maxWidth: 640,
                    fontSize: "17px",
                    lineHeight: 1.75,
                    color: "#6E6E6E",
                    mb: 3,
                  }}
                >
                  Your next journey is nearly here. Review your plans, connect
                  with fellow travelers, and contact support whenever you need
                  a hand.
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  <Chip icon={<CalendarMonthRoundedIcon />} label="Departure: October 16, 2026" />
                  <Chip icon={<FmdGoodRoundedIcon />} label="Marrakech Desert Escape" />
                  <Chip icon={<LuggageRoundedIcon />} label="Comfort Plan" />
                </Box>
                <Box
                  sx={{
                    mt: 3,
                    borderRadius: "26px",
                    overflow: "hidden",
                    height: { xs: 220, md: 260 },
                    border: "1px solid rgba(20,20,20,0.06)",
                  }}
                >
                  {MAPBOX_TOKEN ? (
                    <Map
                      mapboxAccessToken={MAPBOX_TOKEN}
                      initialViewState={{
                        longitude: -7.9811,
                        latitude: 31.6295,
                        zoom: 5.1,
                      }}
                      mapStyle="mapbox://styles/mapbox/outdoors-v12"
                      attributionControl={false}
                      dragRotate={false}
                      scrollZoom
                      style={{ width: "100%", height: "100%" }}
                    >
                      <Marker longitude={-7.9811} latitude={31.6295} anchor="bottom">
                        <Box
                          sx={{
                            width: 18,
                            height: 18,
                            borderRadius: "50%",
                            backgroundColor: "#141414",
                            border: "4px solid #fff",
                            boxShadow: "0 10px 18px rgba(20,20,20,0.24)",
                          }}
                        />
                      </Marker>
                    </Map>
                  ) : (
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        background:
                          "linear-gradient(180deg, rgba(200,240,208,0.15) 0%, rgba(236,241,238,0.9) 100%)",
                      }}
                    >
                      <Typography sx={{ color: "#6E6E6E", fontSize: "14px" }}>
                        Add a Mapbox token to preview your destination map.
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>

              <Box
                sx={{
                  borderRadius: "34px",
                  overflow: "hidden",
                  position: "relative",
                  minHeight: 280,
                  boxShadow: "0 20px 44px rgba(20,20,20,0.10)",
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1400&q=80"
                  alt="Upcoming trip"
                  sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.12) 45%, rgba(0,0,0,0.58) 100%)",
                  }}
                />
                <Box sx={{ position: "absolute", left: 24, right: 24, bottom: 24 }}>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.78)",
                      fontSize: "12px",
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      mb: 0.75,
                    }}
                  >
                    Next Trip
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: "1.9rem",
                      lineHeight: 1.1,
                    }}
                  >
                    Sahara Camp and Atlas Foothills
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "1.1fr 0.9fr" },
                gap: 3,
                alignItems: "start",
              }}
            >
              <Box
                sx={{
                  borderRadius: "34px",
                  p: { xs: 3, md: 4 },
                  backgroundColor: "#fff",
                  border: "1px solid rgba(20,20,20,0.06)",
                  boxShadow: "0 18px 40px rgba(20,20,20,0.05)",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "1.8rem",
                    color: "#141414",
                    mb: 0.75,
                  }}
                >
                  My Trips
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "#777",
                    mb: 3,
                  }}
                >
                  A quick look at your upcoming day and the people joining you.
                </Typography>

                <Box sx={{ display: "grid", gap: 2 }}>
                  {UPCOMING_DAY.map((item) => (
                    <Box
                      key={item.time}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "72px 1fr",
                        gap: 2,
                        alignItems: "start",
                        p: 2,
                        borderRadius: "22px",
                        backgroundColor: "#F7F7F5",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: "14px",
                          color: "#141414",
                          pt: 0.3,
                        }}
                      >
                        {item.time}
                      </Typography>
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "1rem",
                            color: "#141414",
                            mb: 0.4,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#767676", lineHeight: 1.7 }}>
                          {item.detail}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: 3.5, display: "grid", gap: 1.5 }}>
                  {TRIP_DAYS.map((tripDay, index) => (
                    <Accordion
                      key={tripDay.day}
                      defaultExpanded={index === 0}
                      disableGutters
                      elevation={0}
                      sx={{
                        borderRadius: "22px !important",
                        overflow: "hidden",
                        border: "1px solid rgba(20,20,20,0.06)",
                        backgroundColor: "#FCFCFB",
                        "&::before": { display: "none" },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreRoundedIcon />}
                        sx={{ px: 2.2, py: 0.8 }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: 800,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "#7B7B7B",
                              mb: 0.3,
                            }}
                          >
                            {tripDay.day}
                          </Typography>
                          <Typography sx={{ fontWeight: 700, color: "#141414" }}>
                            {tripDay.title}
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails sx={{ px: 2.2, pt: 0, pb: 2.2 }}>
                        <Typography
                          sx={{ fontSize: "14px", lineHeight: 1.75, color: "#767676" }}
                        >
                          {tripDay.details}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Box>

              <Box sx={{ display: "grid", gap: 3 }}>
                <Box
                  sx={{
                    borderRadius: "34px",
                    p: { xs: 3, md: 4 },
                    backgroundColor: "#fff",
                    border: "1px solid rgba(20,20,20,0.06)",
                    boxShadow: "0 18px 40px rgba(20,20,20,0.05)",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: "1.55rem",
                      color: "#141414",
                      mb: 2,
                    }}
                  >
                    Fellow Travelers
                  </Typography>
                  <Box sx={{ display: "grid", gap: 1.8, mb: 2.5 }}>
                    {TRAVELERS.map((traveler) => (
                      <Box
                        key={traveler.name}
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <Box
                          component="img"
                          src={traveler.image}
                          alt={traveler.name}
                          sx={{
                            width: 52,
                            height: 52,
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                        <Box>
                          <Typography sx={{ fontWeight: 700, color: "#141414" }}>
                            {traveler.name}
                          </Typography>
                          <Typography sx={{ fontSize: "14px", color: "#777" }}>
                            Trip companion
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Typography sx={{ fontSize: "14px", color: "#777", lineHeight: 1.7 }}>
                    Group chat opens 72 hours before departure so everyone can
                    coordinate arrivals and share ideas.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    borderRadius: "34px",
                    p: { xs: 3, md: 4 },
                    backgroundColor: "#141414",
                    color: "#fff",
                    boxShadow: "0 22px 44px rgba(20,20,20,0.14)",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: "1.5rem",
                      mb: 1,
                    }}
                  >
                    Contact Support
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.74)",
                      mb: 2.5,
                    }}
                  >
                    Questions about transfers, room details, or dietary needs?
                    We&apos;re here for you.
                  </Typography>
                  <Button
                    startIcon={<ChatBubbleOutlineRoundedIcon />}
                    sx={{
                      px: 2.8,
                      py: 1.25,
                      borderRadius: "999px",
                      fontSize: "14px",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#141414",
                      backgroundColor: "#C8F0D0",
                      "&:hover": { backgroundColor: "#D8F5DE" },
                    }}
                  >
                    Start a Support Chat
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              borderRadius: "34px",
              p: { xs: 4, md: 6 },
              backgroundColor: "#fff",
              border: "1px solid rgba(20,20,20,0.06)",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "2.8rem" },
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#141414",
                mb: 1.5,
              }}
            >
              Your dashboard is waiting.
            </Typography>
            <Typography
              sx={{
                maxWidth: 540,
                mx: "auto",
                fontSize: "16px",
                lineHeight: 1.75,
                color: "#777",
                mb: 3,
              }}
            >
              Sign in from the navbar to unlock your trips, itinerary, traveler
              list, and support tools.
            </Typography>
            <Button
              component="a"
              href="/"
              sx={{
                px: 3,
                py: 1.3,
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 700,
                textTransform: "none",
                color: "#fff",
                backgroundColor: "#141414",
                "&:hover": { backgroundColor: "#2A2A2A" },
              }}
            >
              Return Home
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
