interface Props {
  label: string;
  dark?: boolean;
}

export default function Pill({ label, dark = false }: Props) {
  return (
    <div
      className={`px-3 py-1.5 rounded-full text-xs font-medium
    backdrop-blur-md border
    ${
      dark
        ? "bg-black/40 text-white border-white/20"
        : "bg-white/40 text-black border-white/40"
    }`}
    >
      {label}
    </div>
  );
}
