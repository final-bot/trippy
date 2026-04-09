"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubscribe() {
    if (email.trim()) {
      setDone(true);
    }
  }

  return (
    <Box
      component="section"
      id="newsletter"
      sx={{
        px: { xs: 3, md: 8, lg: 12 },
        py: { xs: 8, md: 10 },
        background:
          "linear-gradient(180deg, #fafafa 0%, #eef5f2 100%)",
        scrollMarginTop: "24px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "36px",
          px: { xs: 3, md: 6, lg: 8 },
          py: { xs: 5, md: 6 },
          background:
            "radial-gradient(circle at top left, rgba(200, 240, 208, 0.36), transparent 26%), radial-gradient(circle at 80% 20%, rgba(177, 224, 233, 0.26), transparent 22%), #141414",
          boxShadow: "0 30px 70px rgba(20,20,20,0.14)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: "auto -8% -38% auto",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,240,208,0.18), transparent 65%)",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "grid",
            gap: 4,
            gridTemplateColumns: { xs: "1fr", lg: "1.1fr 0.9fr" },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#C8F0D0",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Newsletter
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3rem" },
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                maxWidth: 620,
                mb: 2,
              }}
            >
              Receive cinematic travel inspiration before everyone else.
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "15px",
                lineHeight: 1.8,
                maxWidth: 520,
              }}
            >
              Weekly destination edits, route ideas, and beautifully curated
              stays from our favorite corners of the world.
            </Typography>
          </Box>

          <Box
            sx={{
              borderRadius: "28px",
              p: { xs: 3, md: 4 },
              backgroundColor: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            {done ? (
              <Box sx={{ textAlign: "center", py: 2 }}>
                <Typography
                  sx={{
                    color: "#C8F0D0",
                    fontWeight: 800,
                    fontSize: "12px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    mb: 1.5,
                  }}
                >
                  You&apos;re In
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                    mb: 1,
                  }}
                >
                  Thanks for subscribing.
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  Your next destination edit will arrive in your inbox soon.
                </Typography>
              </Box>
            ) : (
              <>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    mb: 1,
                  }}
                >
                  Join the weekly dispatch
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.68)",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    mb: 2.5,
                  }}
                >
                  One thoughtful email. No spam. Just beautiful places and
                  useful travel ideas.
                </Typography>
                <Box sx={{ display: "grid", gap: 1.5 }}>
                  <TextField
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        handleSubscribe();
                      }
                    }}
                    placeholder="Enter your email"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "999px",
                        backgroundColor: "rgba(255,255,255,0.94)",
                      },
                    }}
                  />
                  <Button
                    onClick={handleSubscribe}
                    sx={{
                      py: 1.4,
                      borderRadius: "999px",
                      fontSize: "13px",
                      fontWeight: 800,
                      textTransform: "none",
                      backgroundColor: "#C8F0D0",
                      color: "#141414",
                      "&:hover": { backgroundColor: "#d8f5de" },
                    }}
                  >
                    Subscribe Now
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
