import { useMemo, useState } from "react";

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function CompanyLogo({ name, logoUrl, alt, size = "md" }) {
  const [hasError, setHasError] = useState(false);
  const initials = useMemo(() => getInitials(name), [name]);
  const isLarge = size === "lg";

  const boxClasses = isLarge
    ? "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]"
    : "h-12 w-12 sm:h-14 sm:w-14";

  return (
    <div
      className={`${boxClasses} shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]`}
      aria-hidden="true"
    >
      {!hasError && logoUrl ? (
        <img
          src={logoUrl}
          alt={alt || `${name} logo`}
          className="h-full w-full rounded-xl object-contain"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-white/10 text-sm font-black tracking-[0.2em] text-white">
          {initials}
        </div>
      )}
    </div>
  );
}