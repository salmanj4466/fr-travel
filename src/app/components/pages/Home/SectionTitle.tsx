type SectionTitleProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  centered?: boolean;
  description?: string;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  accent,
  centered = false,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.38em] text-[var(--fr-accent)]">
        {eyebrow}
      </p>
      <h2 className="home-serif text-4xl leading-[1.08] text-[var(--fr-navy)] sm:text-5xl">
        {title} {accent && <span className="home-script text-[var(--fr-accent)]">{accent}</span>}
      </h2>
      {description && (
        <p className="mt-5 text-sm leading-7 text-[#66706c] sm:text-base">{description}</p>
      )}
      <span className={`mt-5 block h-px w-12 bg-[var(--fr-light-blue)] ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
