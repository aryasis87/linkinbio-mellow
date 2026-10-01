import { BRAND, SITE, SLOT } from '@/lib/mella';
import Kembali from '../components/Kembali';
import FormKomisi from '../components/FormKomisi';

export const metadata = {
  title: 'Komisi Ilustrasi',
  description: 'Komisi ilustrasi Mella: slot per bulan, harga kepala/setengah badan/badan penuh dengan estimasi langsung, dan kerja sama brand.',
  alternates: { canonical: `${SITE}/komisi` },
};

export default function Komisi() {
  return (
    <main className="relative min-h-screen px-4 py-10">
      <div className="blob h-64 w-64 bg-amber-100" style={{ top: '10%', right: '-3rem' }} aria-hidden="true" />
      <div className="mx-auto max-w-2xl">
        <Kembali />
        <h1 className="rise mt-8 text-4xl font-bold text-[#5b4a63]">Komisi ilustrasi <span aria-hidden="true">🧸</span></h1>
        <p className="rise mt-2 font-medium text-[#6e5a75]" style={{ animationDelay: '0.06s' }}>Lima slot sebulan supaya setiap gambar sempat dipeluk dulu sebelum dikirim.</p>

        <section aria-labelledby="slot-h" className="mt-8">
          <h2 id="slot-h" className="sr-only">Slot per bulan</h2>
          <ul className="grid grid-cols-3 gap-3">
            {SLOT.map(([b, sisa, total]) => (
              <li key={b} className={`sticker rounded-[1.4rem] p-4 text-center ${sisa ? 'bg-emerald-100' : 'bg-white'}`}>
                <p className="text-sm font-bold text-[#5b4a63]">{b}</p>
                <p className="mt-2 flex justify-center gap-1" aria-hidden="true">
                  {Array.from({ length: total }, (_, i) => <span key={i} className={`h-3 w-3 rounded-full ${i < total - sisa ? 'bg-pink-300' : 'border-2 border-emerald-500 bg-white'}`} />)}
                </p>
                <p className="mt-2 text-xs font-bold text-[#6e5a75]">{sisa ? `sisa ${sisa} slot` : 'penuh'}</p>
              </li>
            ))}
          </ul>
        </section>

        <FormKomisi />

        <section id="brand" aria-labelledby="brand-h" className="mt-14 scroll-mt-6">
          <h2 id="brand-h" className="text-2xl font-bold text-[#5b4a63]">Kerja sama brand <span aria-hidden="true">💌</span></h2>
          <ul className="mt-5 space-y-3">
            {BRAND.map(([j, h, d], i) => (
              <li key={j} className={`sticker flex flex-wrap items-baseline justify-between gap-2 rounded-[1.4rem] bg-violet-100 p-5 ${i % 2 ? 'rotate-1' : '-rotate-1'}`}>
                <span>
                  <span className="block font-bold text-[#5b4a63]">{j}</span>
                  <span className="text-sm font-medium text-[#6e5a75]">{d}</span>
                </span>
                <span className="font-bold text-violet-800">{h}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-medium text-[#6e5a75]">Pilih &ldquo;Kerja sama brand&rdquo; di formulir di atas, ceritakan produknya.</p>
        </section>
        <p className="mt-10 text-center text-xs font-semibold text-[#6e5a75]">Harga dan slot adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
