import { ArrowUpRight, Heart } from 'lucide-react';

const STICKERS = [
  { emoji: '🎨', label: 'Toko Sticker-ku', sub: 'Sticker pack lucu & printable', url: '#', bg: 'bg-pink-100', rot: '-rotate-2' },
  { emoji: '📸', label: 'Instagram', sub: '@mella.draws — karya harian', url: 'https://instagram.com', bg: 'bg-sky-100', rot: 'rotate-1' },
  { emoji: '🧸', label: 'Komisi Ilustrasi', sub: 'Slot terbuka bulan ini!', url: '#', bg: 'bg-amber-100', rot: '-rotate-1' },
  { emoji: '☕', label: 'Traktir Kopi', sub: 'Dukung karya Mella', url: '#', bg: 'bg-emerald-100', rot: 'rotate-2' },
  { emoji: '💌', label: 'Email Mella', sub: 'Untuk kerja sama brand', url: 'mailto:halo@mella.art', bg: 'bg-violet-100', rot: '-rotate-2' },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-4 py-14">
      {/* Awan pastel */}
      <div className="blob h-72 w-72 bg-pink-200" style={{ top: '-4rem', left: '-4rem', animation: 'drift 14s ease-in-out infinite' }} aria-hidden="true" />
      <div className="blob h-64 w-64 bg-sky-200" style={{ bottom: '-3rem', right: '-3rem', animation: 'drift 18s ease-in-out infinite reverse' }} aria-hidden="true" />
      <div className="blob h-52 w-52 bg-amber-100" style={{ top: '30%', right: '-2rem', animation: 'drift 16s ease-in-out infinite' }} aria-hidden="true" />

      <div className="w-full max-w-md text-center">
        {/* Avatar sticker */}
        <div className="rise sticker bob mx-auto grid h-28 w-28 place-items-center rounded-[2rem] bg-white text-6xl" role="img" aria-label="Avatar Mella">
          🐰
        </div>

        <div className="rise mt-6" style={{ animationDelay: '0.08s' }}>
          <span className="sticker inline-block -rotate-2 rounded-full bg-white px-4 py-1 text-xs font-bold text-pink-500">✿ ilustrator &amp; sticker artist</span>
          <h1 className="mt-3 text-4xl font-bold text-[#5b4a63]">
            Halo, aku <span className="text-pink-500">Mella!</span>
          </h1>
          <p className="mt-2 text-sm font-medium text-[#8a7691]">Menggambar hal-hal kecil yang bikin harimu lebih lembut 🌷</p>
        </div>

        {/* Sticker links */}
        <nav className="mt-8 space-y-4" aria-label="Tautan utama">
          {STICKERS.map((s, i) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`rise sticker sticker-hover flex items-center gap-4 rounded-[1.6rem] ${s.bg} ${s.rot} p-4 text-left`}
              style={{ animationDelay: `${0.16 + i * 0.08}s` }}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-2xl shadow-sm">{s.emoji}</span>
              <span className="flex-1">
                <span className="block font-bold text-[#5b4a63]">{s.label}</span>
                <span className="block text-xs font-medium text-[#8a7691]">{s.sub}</span>
              </span>
              <ArrowUpRight size={18} className="text-[#b39cbd]" />
            </a>
          ))}
        </nav>

        <p className="rise mt-9 inline-flex items-center gap-1.5 text-xs font-semibold text-[#a48fae]" style={{ animationDelay: '0.65s' }}>
          dibuat dengan <Heart size={12} className="fill-pink-400 text-pink-400" /> oleh Mella · {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
