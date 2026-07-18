import Link from 'next/link';
import { repository } from '@/data/repository';
import Card from '@/components/card';

export default function Home() {
  // Grab 2 items to feature on the homepage
  const featuredPieces = repository.slice(0, 2);

  return (
    <main className="px-6 py-16 md:py-24 max-w-5xl mx-auto space-y-24">
      {/* Hero Section */}
      <section className="text-center md:text-left md:flex items-center justify-between gap-12">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            We make music sometimes
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            We are a trio of friends and musicians that do a variety of musical projects together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/catalog" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition">
              Explore Our Work
            </Link>
            <Link href="/about" className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-6 py-3 rounded-lg transition">
              Who are we?
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Featured Work</h2>
            <p className="text-sm text-slate-400">A quick glance at some of our favorite pieces</p>
          </div>
          <Link href="/catalog" className="text-sm text-indigo-400 hover:text-indigo-300 font-medium transition">
            View all &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPieces.map((piece) => (
            <Card piece={piece} key={piece.id} />
          ))}
        </div>
      </section>
    </main>
  );
}