interface Props {
  children: React.ReactNode;
  bg?: string;
}

export default function HighlightWord({ children, bg = "#C8F0D0" }: Props) {
  return (
    <span className="relative inline-block">
      <span
        className="absolute rounded-lg -z-10"
        style={{
          backgroundColor: bg,
          inset: "0.12em -0.2em",
        }}
      />
      {children}
    </span>
  );
}
