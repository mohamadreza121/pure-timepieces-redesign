export function SpecList({ specs }: { specs: Record<string, string> }) {
  return (
    <div className="luxury-card rounded-[2rem] p-6 md:p-8">
      <div className="grid gap-1">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="grid gap-2 border-b border-white/10 py-5 last:border-b-0 md:grid-cols-[180px_1fr]">
            <p className="text-sm uppercase tracking-[0.25em] text-white/38">{key}</p>
            <p className="text-lg text-platinum">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
