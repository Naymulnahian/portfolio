const WEEKS = 26;
const DAYS = 7;

// Deterministic pseudo-random intensity so server and client render identically.
function intensityAt(week: number, day: number) {
  const seed = Math.sin(week * 12.9898 + day * 78.233) * 43758.5453;
  const frac = seed - Math.floor(seed);
  return Math.floor(frac * 5);
}

const LEVEL_CLASSES = [
  "bg-white/[0.05]",
  "bg-accent/25",
  "bg-accent/45",
  "bg-accent/70",
  "bg-accent",
];

export function ContributionGraph() {
  return (
    <div
      className="grid w-max grid-flow-col gap-1"
      role="img"
      aria-label="Placeholder GitHub contribution graph"
    >
      {Array.from({ length: WEEKS }).map((_, week) => (
        <div key={week} className="grid gap-1">
          {Array.from({ length: DAYS }).map((_, day) => {
            const level = intensityAt(week, day);
            return (
              <div
                key={day}
                className={`h-3 w-3 rounded-[3px] ${LEVEL_CLASSES[level]}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
