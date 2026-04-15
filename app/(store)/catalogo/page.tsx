export default function CatalogoPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="space-y-4">
        <p className="text-[#1E90FF] text-sm uppercase tracking-[0.2em] font-medium">
          Training Peaks
        </p>
        <h1 className="text-5xl md:text-7xl font-[800] uppercase leading-none text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          Planilhas de<br />
          <span className="text-[#1E90FF]">Treino</span>
        </h1>
        <p className="text-[#888888] text-lg max-w-xl">
          Planilhas estruturadas para corrida e triathlon. Desenvolvidas por Guto Fernandes
          e entregues diretamente no seu Training Peaks.
        </p>
      </div>

      {/* Placeholder grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="bg-[#141414] border border-[#2A2A2A] rounded-2xl h-64 animate-pulse" />
        ))}
      </div>
    </div>
  )
}
