import Eyebrow from "./Eyebrow";

type Props = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode; // optional lead paragraph
  tone?: "light" | "dark";
  center?: boolean;
  className?: string;
};

/** Section rhythm: eyebrow → serif H2 → optional lead text. */
export default function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
  center = false,
  className = "",
}: Props) {
  const heading = tone === "dark" ? "text-card-2" : "text-pine";
  const lead = tone === "dark" ? "text-paper/80" : "text-muted";
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      <Eyebrow tone={tone} className="mb-4">
        {eyebrow}
      </Eyebrow>
      <h2
        className={`font-serif font-semibold leading-[1.05] ${heading} text-[clamp(34px,4.5vw,56px)]`}
      >
        {title}
      </h2>
      {children ? (
        <p
          className={`mt-4 text-[17px] leading-relaxed ${lead} ${center ? "mx-auto max-w-[50ch]" : "max-w-2xl"}`}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}
