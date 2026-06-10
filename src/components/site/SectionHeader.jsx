import { SparkleIcon } from "../ui/icons";

export default function SectionHeader({ eyebrow, title, text, align = "center" }) {
  const centered = align === "center";
  return (
    <div data-reveal className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && (
        <div className={`${centered ? "justify-center" : ""} mb-4 flex items-center gap-3 text-rose`}>
          <SparkleIcon className="h-5 w-5" />
          <span className="text-xs font-extrabold uppercase tracking-[0.35em]">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-4xl italic leading-tight text-balance text-ink sm:text-5xl lg:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-ink/60 sm:text-lg">{text}</p>}
    </div>
  );
}
