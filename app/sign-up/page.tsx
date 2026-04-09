"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { TRAVEL_PLANS } from "../data/travel";
import HighlightWord from "../components/travel/ui/HighlightWord";

export default function SignUpPage() {
  const searchParams = useSearchParams();
  const requestedPlan = searchParams.get("plan");

  const defaultPlan = useMemo(
    () => TRAVEL_PLANS.find((plan) => plan.id === requestedPlan) ?? TRAVEL_PLANS[1],
    [requestedPlan],
  );

  const [selectedPlanId, setSelectedPlanId] = useState(defaultPlan.id);

  const selectedPlan =
    TRAVEL_PLANS.find((plan) => plan.id === selectedPlanId) ?? TRAVEL_PLANS[1];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(200,240,208,0.35), transparent 30%), #f5f5f3",
        px: { xs: 3, md: 8, lg: 12 },
        py: { xs: 5, md: 7 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          display: "grid",
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box>
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
              Membership Sign Up
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.3rem", md: "3.6rem" },
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#141414",
                mb: 1.5,
              }}
            >
              Start Your <HighlightWord>Journey</HighlightWord> With The Right
              Plan
            </Typography>
            <Typography
              sx={{
                maxWidth: 680,
                fontSize: "18px",
                lineHeight: 1.7,
                color: "#707070",
              }}
            >
              Choose a package, tell us a little about your travel style, and
              we&apos;ll help shape your next trip around it.
            </Typography>
          </Box>

          <Button
            component="a"
            href="/"
            sx={{
              px: 2.8,
              py: 1.2,
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "none",
              color: "#141414",
              backgroundColor: "#fff",
              border: "1px solid rgba(20,20,20,0.08)",
              "&:hover": { backgroundColor: "#F7F7F7" },
            }}
          >
            Back to Home
          </Button>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.15fr 0.85fr" },
            gap: 4,
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 2.5,
            }}
          >
            {TRAVEL_PLANS.map((plan) => {
              const isActive = plan.id === selectedPlanId;

              return (
                <Box
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  sx={{
                    borderRadius: "28px",
                    border: isActive
                      ? "1px solid rgba(20,20,20,0.2)"
                      : "1px solid rgba(20,20,20,0.08)",
                    backgroundColor: isActive ? "#141414" : "#fff",
                    color: isActive ? "#fff" : "#141414",
                    p: 3,
                    cursor: "pointer",
                    boxShadow: isActive
                      ? "0 24px 50px rgba(20,20,20,0.16)"
                      : "0 10px 24px rgba(20,20,20,0.04)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: isActive ? "rgba(255,255,255,0.72)" : "#818181",
                      mb: 1.2,
                    }}
                  >
                    {plan.eyebrow ?? plan.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: "2.2rem",
                      lineHeight: 1,
                      mb: 1,
                    }}
                  >
                    ${plan.price}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: isActive ? "rgba(255,255,255,0.72)" : "#707070",
                      mb: 2,
                    }}
                  >
                    {plan.description}
                  </Typography>
                  <Box sx={{ display: "grid", gap: 1 }}>
                    {plan.features.slice(0, 3).map((feature) => (
                      <Box
                        key={feature}
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <CheckCircleRoundedIcon
                          sx={{
                            fontSize: 16,
                            color: isActive ? "#C8F0D0" : "#141414",
                          }}
                        />
                        <Typography sx={{ fontSize: "14px" }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box
            sx={{
              borderRadius: "32px",
              p: { xs: 3, md: 4 },
              backgroundColor: "#fff",
              border: "1px solid rgba(20,20,20,0.08)",
              boxShadow: "0 22px 50px rgba(20,20,20,0.08)",
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.8rem",
                color: "#141414",
                mb: 1,
              }}
            >
              Create your account
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#737373",
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              Selected plan: {selectedPlan.name}. You can change it anytime
              below before submitting.
            </Typography>

            <Box
              component="form"
              sx={{ display: "grid", gap: 1.8 }}
            >
              <TextField label="Full Name" fullWidth />
              <TextField label="Email Address" type="email" fullWidth />
              <TextField label="Destination Dream" fullWidth />
              <TextField
                label="Selected Plan"
                select
                value={selectedPlanId}
                onChange={(event) => setSelectedPlanId(event.target.value)}
                fullWidth
              >
                {TRAVEL_PLANS.map((plan) => (
                  <MenuItem key={plan.id} value={plan.id}>
                    {plan.name} - ${plan.price}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Tell us about your travel style"
                multiline
                minRows={4}
                placeholder="Relaxed beach escapes, cultural city breaks, luxury stays..."
                fullWidth
              />
              <Button
                sx={{
                  mt: 1,
                  py: 1.5,
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 800,
                  textTransform: "none",
                  color: "#fff",
                  backgroundColor: "#141414",
                  "&:hover": { backgroundColor: "#242424" },
                }}
              >
                Continue With {selectedPlan.name}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
