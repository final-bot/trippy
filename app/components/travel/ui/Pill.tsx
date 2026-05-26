import Box from "@mui/material/Box";

interface Props {
  label: string;
  dark?: boolean;
}

const CATEGORY_STYLES: Record<
  string,
  { backgroundColor: string; color: string; borderColor: string }
> = {
  adventure: {
    backgroundColor: "#FEE2E2",
    color: "#991B1B",
    borderColor: "#FCA5A5",
  },
  nature: {
    backgroundColor: "#DCFCE7",
    color: "#166534",
    borderColor: "#86EFAC",
  },
  culture: {
    backgroundColor: "#FEF3C7",
    color: "#92400E",
    borderColor: "#FCD34D",
  },
  romance: {
    backgroundColor: "#FCE7F3",
    color: "#9D174D",
    borderColor: "#F9A8D4",
  },
  leisure: {
    backgroundColor: "#DBEAFE",
    color: "#1D4ED8",
    borderColor: "#93C5FD",
  },
};

export default function Pill({ label, dark = false }: Props) {
  const key = label?.toLowerCase?.() ?? "";
  const categoryStyle = CATEGORY_STYLES[key];

  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2.5,
        py: 1,
        borderRadius: "999px",
        fontSize: "0.7rem",
        fontWeight: 700,
        backdropFilter: "blur(10px)",
        border: "1px solid",
        backgroundColor: dark
          ? "rgba(0,0,0,0.40)"
          : categoryStyle?.backgroundColor ?? "rgba(255,255,255,0.75)",
        color: dark ? "#fff" : categoryStyle?.color ?? "#141414",
        borderColor: dark
          ? "rgba(255,255,255,0.20)"
          : categoryStyle?.borderColor ?? "rgba(255,255,255,0.40)",
      }}
    >
      {label}
    </Box>
  );
}
