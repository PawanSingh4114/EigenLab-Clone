export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-6 bg-[#4cc04c]/60" />
        <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-gray-400">
          {eyebrow}
        </span>
      </div>

      <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {text && (
        <p className="mx-auto mt-5 max-w-[640px] text-lg leading-relaxed text-gray-400">
          {text}
        </p>
      )}
    </div>
  );
}