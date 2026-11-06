/** Loading indicator: a watch face whose second hand ticks (pure CSS, no JS). */
const WatchLoader = ({ size = 56 }: { size?: number }) => {
  const hand = { transformBox: "view-box", transformOrigin: "50% 50%" } as React.CSSProperties;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Loading">
      <circle cx="50" cy="50" r="44" fill="white" stroke="black" strokeWidth="5" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="11"
          x2="50"
          y2={i % 3 === 0 ? 19 : 15}
          stroke="black"
          strokeWidth={i % 3 === 0 ? 4 : 2}
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
      {/* minute hand — slow smooth turn */}
      <line x1="50" y1="50" x2="50" y2="26" stroke="black" strokeWidth="5" strokeLinecap="round"
        className="animate-[spin_24s_linear_infinite]" style={hand} />
      {/* second hand — ticks in 12 steps */}
      <line x1="50" y1="58" x2="50" y2="18" stroke="#C9A54C" strokeWidth="2.5" strokeLinecap="round"
        className="animate-[spin_6s_steps(12)_infinite]" style={hand} />
      <circle cx="50" cy="50" r="4" fill="black" />
    </svg>
  );
};

export default WatchLoader;
