type Props = {
  children: React.ReactNode;
  /** "light" = terracotta (on cream), "dark" = gold (on green). */
  tone?: "light" | "dark";
  className?: string;
};

/** Uppercase, letter-spaced label that opens each section. */
export default function Eyebrow({
  children,
  tone = "light",
  className = "",
}: Props) {
  const color = tone === "dark" ? "text-gold" : "text-terracotta";
  return (
    <span
      className={`inline-block text-xs uppercase tracking-[0.2em] ${color} ${className}`}
    >
      {children}
    </span>
  );
}
