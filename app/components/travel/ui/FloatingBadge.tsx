/* eslint-disable @typescript-eslint/no-explicit-any */
// interface Props {
//   icon: string;
//   label: string;
//   style?: React.CSSProperties;
// }

// export default function FloatingBadge({ icon, label, style }: Props) {
//   return (
//     <div
//       className="absolute px-4 py-2 rounded-full text-sm flex items-center gap-2
//              bg-white/30 backdrop-blur-lg border border-white/40
//              shadow-[0_8px_20px_rgba(0,0,0,0.15)] text-white"
//       style={style}
//     >
//       <span>{icon}</span>
//       <span className="font-medium">{label}</span>
//     </div>
//   );
// }

export default function FloatingBadge({ icon, label, style }: any) {
  return (
    <div
      className="absolute flex items-center gap-2 px-4 py-2 rounded-full
                 bg-white/30 backdrop-blur-xl border border-white/40
                 text-white text-sm shadow-lg"
      style={style}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}