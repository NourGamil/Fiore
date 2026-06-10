const words = ["Wedding", "Birthday", "Anniversary", "New baby", "Sorry", "Thank you", "Home styling", "Engagement"];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-rose-dark/10 bg-white/45 py-5 backdrop-blur-xl">
      <div className="marquee-track flex w-max gap-4">
        {[...words, ...words].map((word, index) => (
          <div key={`${word}-${index}`} className="flex items-center gap-4 px-2">
            <span className="h-2 w-2 rounded-full bg-rose" />
            <span className="font-display text-4xl italic text-ink/70 sm:text-5xl">{word}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
