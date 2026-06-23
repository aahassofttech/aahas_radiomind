import { cn } from "@/lib/utils";

const PALETTES = [
  { bg: "#eef4ff", a: "#2563eb", b: "#93c5fd" },
  { bg: "#f0fdfa", a: "#0d9488", b: "#5eead4" },
  { bg: "#fff7ed", a: "#ea580c", b: "#fdba74" },
  { bg: "#f5f3ff", a: "#7c3aed", b: "#c4b5fd" },
  { bg: "#fdf2f8", a: "#db2777", b: "#f9a8d4" },
];

function hashSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 997;
  }
  return hash;
}

export default function BlogImage({ slug, className }: { slug: string; className?: string }) {
  const palette = PALETTES[hashSlug(slug) % PALETTES.length];
  const seed = hashSlug(slug);

  return (
    <svg
      viewBox="0 0 400 250"
      className={cn("h-full w-full", className)}
      role="presentation"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="250" fill={palette.bg} />
      <circle cx={80 + (seed % 60)} cy={70} r="60" fill={palette.b} opacity="0.4" />
      <circle cx={320 - (seed % 40)} cy={180} r="80" fill={palette.a} opacity="0.12" />
      <rect x="60" y="95" width="280" height="70" rx="10" fill="white" opacity="0.85" />
      <rect x="80" y="115" width={120 + (seed % 60)} height="8" rx="4" fill={palette.a} opacity="0.7" />
      <rect x="80" y="132" width={90 + (seed % 50)} height="6" rx="3" fill={palette.a} opacity="0.4" />
      <circle cx="305" cy="135" r="16" fill={palette.a} opacity="0.5" />
    </svg>
  );
}
