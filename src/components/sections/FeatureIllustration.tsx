const PALETTES: Record<string, { bg: string; accent: string }> = {
  scan: { bg: "#eef4ff", accent: "#2563eb" },
  ruler: { bg: "#eef9f3", accent: "#0d9488" },
  sliders: { bg: "#fff7ed", accent: "#ea580c" },
  workflow: { bg: "#f5f3ff", accent: "#7c3aed" },
  share: { bg: "#fdf2f8", accent: "#db2777" },
};

export default function FeatureIllustration({ icon }: { icon: string }) {
  const palette = PALETTES[icon] || PALETTES.scan;

  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" role="presentation" aria-hidden="true">
      <rect width="400" height="280" rx="16" fill={palette.bg} />
      <rect x="40" y="40" width="160" height="120" rx="8" fill="white" stroke={palette.accent} strokeOpacity="0.25" strokeWidth="2" />
      <rect x="220" y="40" width="140" height="55" rx="8" fill="white" stroke={palette.accent} strokeOpacity="0.25" strokeWidth="2" />
      <rect x="220" y="105" width="140" height="55" rx="8" fill="white" stroke={palette.accent} strokeOpacity="0.25" strokeWidth="2" />
      <rect x="40" y="180" width="320" height="60" rx="8" fill="white" stroke={palette.accent} strokeOpacity="0.25" strokeWidth="2" />
      <circle cx="120" cy="100" r="35" fill="none" stroke={palette.accent} strokeWidth="3" strokeDasharray="6 4" opacity="0.7" />
      <path d="M85 100 L155 100 M120 65 L120 135" stroke={palette.accent} strokeWidth="2" opacity="0.5" />
      <rect x="240" y="58" width="100" height="8" rx="4" fill={palette.accent} opacity="0.3" />
      <rect x="240" y="72" width="70" height="8" rx="4" fill={palette.accent} opacity="0.2" />
      <rect x="240" y="123" width="100" height="8" rx="4" fill={palette.accent} opacity="0.3" />
      <rect x="240" y="137" width="60" height="8" rx="4" fill={palette.accent} opacity="0.2" />
      <rect x="60" y="198" width="80" height="8" rx="4" fill={palette.accent} opacity="0.3" />
      <rect x="60" y="214" width="120" height="6" rx="3" fill={palette.accent} opacity="0.18" />
      <rect x="280" y="198" width="60" height="22" rx="11" fill={palette.accent} opacity="0.85" />
    </svg>
  );
}
