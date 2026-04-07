"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NAV_ITEMS = ["Home", "Trips", "Community", "About", "Contact"] as const;
type NavItem = (typeof NAV_ITEMS)[number];

export default function NavBar() {
  const [active, setActive] = useState<NavItem>("Home");

  // "About" dropdown state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const aboutOpen = Boolean(anchorEl);

  function handleAboutOpen(e: React.MouseEvent<HTMLElement>) {
    setAnchorEl(e.currentTarget);
  }
  function handleAboutClose() {
    setAnchorEl(null);
  }

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
          const isActive = active === item;
          const isAbout = item === "About";

          return isAbout ? (
            <Box key={item}>
              <Button
                onClick={handleAboutOpen}
                endIcon={
                  <KeyboardArrowDownIcon
                    sx={{
                      fontSize: "13px !important",
                      opacity: 0.5,
                      ml: "-4px",
                      transform: aboutOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  />
                }
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
                  "&:hover": {
                    backgroundColor: isActive ? "#141414" : "rgba(255,255,255,0.8)",
                    color: isActive ? "#fff" : "#141414",
                  },
                }}
              >
                {item}
              </Button>

              <Menu
                anchorEl={anchorEl}
                open={aboutOpen}
                onClose={handleAboutClose}
                PaperProps={{
                  sx: {
                    mt: 1,
                    borderRadius: "16px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                    border: "1px solid #E1E1E1",
                    minWidth: 160,
                    overflow: "hidden",
                  },
                }}
                transformOrigin={{ horizontal: "left", vertical: "top" }}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              >
                {["Our Story", "Team", "Press", "Careers"].map((sub) => (
                  <MenuItem
                    key={sub}
                    onClick={handleAboutClose}
                    sx={{
                      fontSize: "13px",
                      fontWeight: 500,
                      fontFamily: "inherit",
                      color: "#141414",
                      px: 2.5,
                      py: 1.25,
                      "&:hover": { backgroundColor: "#f5f5f3" },
                    }}
                  >
                    {sub}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Button
              key={item}
              onClick={() => setActive(item)}
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
                boxShadow: isActive ? "0 1px 4px rgba(0,0,0,0.18)" : "none",
                "&:hover": {
                  backgroundColor: isActive ? "#141414" : "rgba(255,255,255,0.8)",
                  color: isActive ? "#fff" : "#141414",
                  boxShadow: "none",
                },
              }}
            >
              {item}
            </Button>
          );
        })}
      </Box>

      {/* <Button
        sx={{
          px: 3,
          py: 1.25,
          borderRadius: "999px",
          fontSize: "13px",
          fontWeight: 700,
          fontFamily: "inherit",
          textTransform: "none",
          color: "#fff",
          backgroundColor: "#141414",
          letterSpacing: "0.04em",
          boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
          "&:hover": {
            backgroundColor: "#2a2a2a",
            boxShadow: "0 4px 16px rgba(0,0,0,0.22)",
          },
        }}
      >
        LOGIN
      </Button> */}
    </Box>
  );
}
