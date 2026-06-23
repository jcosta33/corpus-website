export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-display text-base font-semibold lowercase ${className}`}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-[1.55em] w-[1.55em] shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="corpus-gilt"
            x1="16"
            y1="2"
            x2="16"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ead48c" />
            <stop offset="0.55" stopColor="#d6b45a" />
            <stop offset="1" stopColor="#b8873a" />
          </linearGradient>
        </defs>
        <circle
          cx="16"
          cy="16"
          r="13.6"
          stroke="url(#corpus-gilt)"
          strokeWidth="1"
          opacity="0.95"
        />
        <path
          d="M16 4.5 L25.96 21.75 L6.04 21.75 Z"
          stroke="url(#corpus-gilt)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <path
          d="M16 27.5 L6.04 10.25 L25.96 10.25 Z"
          stroke="url(#corpus-gilt)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {[4.5, 10.25, 21.75, 27.5].map((y, i) => {
          const points =
            i === 0
              ? [[16, y]]
              : i === 3
                ? [[16, y]]
                : i === 1
                  ? [
                      [6.04, y],
                      [25.96, y],
                    ]
                  : [
                      [6.04, y],
                      [25.96, y],
                    ];
          return points.map(([x, py]) => (
            <circle
              key={`${x}-${py}`}
              cx={x}
              cy={py}
              r="1.35"
              fill="#050506"
              stroke="url(#corpus-gilt)"
              strokeWidth="0.9"
            />
          ));
        })}
        <circle cx="16" cy="16" r="1.55" fill="#d6b45a" />
      </svg>
      <span className="tracking-[0.02em]">corpus</span>
    </span>
  );
}
