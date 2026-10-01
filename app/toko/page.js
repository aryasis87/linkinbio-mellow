import { BAZAR, SITE } from '@/lib/mella';
import Kembali from '../components/Kembali';
import Keranjang from '../components/Keranjang';

export const metadata = {
  title: 'Toko Sticker',
  description: 'Lima pack sticker vinyl Mella — kelinci rebahan, teman ngopi, musim hujan, kucing kantor, kebun mini — plus jadwal bazar Oktober 2026 di Malang.',
  alternates: { canonical: `${SITE}/toko` },
};

export default function Toko() {
  return (
    <main className="relative min-h-screen px-4 py-10">
      <div className="blob h-72 w-72 bg-pink-200" style={{ top: '-4rem', left: '-4rem' }} aria-hidden="true" />
      <div className="mx-auto max-w-2xl">
        <Kembali />
        <h1 className="rise mt-8 text-4xl font-bold text-[#5b4a63]">Toko sticker <span aria-hidden="true">🎨</span></h1>
        <p className="rise mt-2 font-medium text-[#6e5a75]" style={{ animationDelay: '0.06s' }}>Dicetak di vinyl tahan air, dipotong satu-satu di meja Mella.</p>
        <Keranjang />

        <section id="bazar" aria-labelledby="bazar-h" className="mt-14 scroll-mt-6">
          <h2 id="bazar-h" className="text-2xl font-bold text-[#5b4a63]">Ketemu di bazar <span aria-hidden="true">🗓️</span></h2>
          <p className="mt-1 text-sm font-medium text-[#6e5a75]">Bawa stiker yang sudah dibeli daring — Mella tanda tangani di tempat.</p>
          <ul className="mt-5 space-y-4">
            {BAZAR.map((b, i) => (
              <li key={b.tanggal} className={`sticker rounded-[1.6rem] bg-sky-100 p-5 ${i ? 'rotate-1' : '-rotate-1'}`}>
                <p className="text-xs font-bold uppercase tracking-wide text-sky-800">{b.tanggal} · {b.jam}</p>
                <p className="mt-1 font-bold text-[#5b4a63]">{b.tempat}</p>
                <p className="text-sm font-medium text-[#6e5a75]">{b.meja}</p>
              </li>
            ))}
          </ul>
        </section>
        <p className="mt-10 text-center text-xs font-semibold text-[#6e5a75]">Harga, stok, dan bazar adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
