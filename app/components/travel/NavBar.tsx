"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Trips", href: "#trips" },
  { label: "Destinations", href: "#destinations" },
  { label: "Why Us", href: "#why-us" },
  { label: "Plans", href: "#plans" },
  { label: "Contact", href: "#contact" },
] as const;

export default function NavBar() {
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState<string>("#home");
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const syncFromHash = () => {
      const currentHash = window.location.hash || "#home";
      setActiveHref(currentHash);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          px: 1,
          py: 0.75,
          borderRadius: "999px",
          backgroundColor: "rgba(255,255,255,0.70)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.90)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeHref === item.href;
          const isContact = item.href === "#contact";

          return (
            <Button
              key={item.label}
              component={isContact ? "button" : "a"}
              href={isContact ? undefined : pathname === "/" ? item.href : `/${item.href}`}
              onClick={() => {
                if (isContact) {
                  setContactOpen(true);
                  return;
                }

                setActiveHref(item.href);
              }}
              sx={{
                px: 2,
                py: 1,
                borderRadius: "999px",
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "inherit",
                textTransform: "none",
                minWidth: 0,
                color: isActive ? "#fff" : "#5a5a5a",
                backgroundColor: isActive ? "#141414" : "transparent",
                boxShadow: isActive ? "0 8px 18px rgba(20,20,20,0.18)" : "none",
                scrollBehavior: "smooth",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: isActive ? "#141414" : "rgba(255,255,255,0.8)",
                  color: isActive ? "#fff" : "#141414",
                },
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </Box>

      <Dialog
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: 520,
            borderRadius: "28px",
            p: 1,
            background:
              "radial-gradient(circle at top, rgba(200,240,208,0.28), transparent 38%), #fff",
          },
        }}
      >
        <DialogTitle sx={{ pb: 0.5 }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.9rem", md: "2.1rem" },
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#141414",
            }}
          >
            Contact Trippy
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography
            sx={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#747474",
              mb: 2.5,
            }}
          >
            Ask about bookings, pricing, group trips, or anything else. We’ll
            get back to you soon.
          </Typography>
          <Box sx={{ display: "grid", gap: 1.6 }}>
            <TextField label="Full Name" fullWidth />
            <TextField label="Email Address" type="email" fullWidth />
            <TextField
              label="Message"
              multiline
              minRows={4}
              placeholder="Hi Trippy team, I’d love help planning..."
              fullWidth
            />
            <Button
              onClick={() => setContactOpen(false)}
              sx={{
                mt: 1,
                py: 1.45,
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: 800,
                textTransform: "none",
                color: "#fff",
                backgroundColor: "#141414",
                "&:hover": { backgroundColor: "#2A2A2A" },
              }}
            >
              Send Message
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
