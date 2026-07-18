import Piece, { ALL_CREATORS } from '@/types/music'
import { FaYoutube } from 'react-icons/fa';

type Props = {
    piece: Piece
}

export default function Card({ piece }: Props) {
    return <div
        key={piece.id}
        className="bg-slate-800/20 border border-slate-800/80 hover:border-slate-700/60 transition p-6 rounded-xl flex flex-col justify-between space-y-6"
    >
        <div>
            <h3 className="text-xl font-bold text-white mb-1">{piece.title}</h3>
            {/* Category Pill Tags */}
            <div className="flex gap-2 mb-3 flex-wrap">
                <span className="text-[11px] bg-indigo-950/40 text-indigo-300 font-medium px-2.5 py-0.5 rounded-md border border-indigo-900/50">
                    {piece.projectType}
                </span>
                {
                    [...piece.instrumentation].map((category) => (
                        <span className="text-[11px] bg-emerald-950/40 text-emerald-300 font-medium px-2.5 py-0.5 rounded-md border border-emerald-900/50" key={category}>
                            {category}
                        </span>
                    ))
                }
                {
                    piece.tags && piece.tags?.map((tag) => (
                        < span className="text-[11px] bg-amber-950/40 text-amber-300 font-medium px-2.5 py-0.5 rounded-md border border-amber-900/50" key={tag}>
                            {tag}
                        </span>
                    ))
                }
            </div>

            {/* Title & Metadata */}
            <p className="text-xs text-slate-400 font-mono mb-4">
                {piece.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })} • {piece.duration}
            </p>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                {piece.description}
            </p>
        </div>

        {/* Footer Attribution & Score Action Links */}
        < div className="pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4" >
            <span className="text-xs text-slate-500">
                By: <strong className="text-slate-300">{ALL_CREATORS.every((val, index) => piece.creators.has(val)) ? "All" : [...piece.creators].join(', ')}</strong>
            </span>

            <div className="flex gap-2">
                {piece.youtubeId && (
                    <a
                        href={`https://youtube.com/watch?v=${piece.youtubeId}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs bg-red-600 hover:bg-red-700 text-white font-medium px-2 py-2 rounded-md transition inline-flex gap-2 justify-center items-center"
                    >
                        <FaYoutube className="text-white w-5 h-5" />
                        Watch
                    </a>
                )}
                {piece.perusalScoreUrl && (
                    <a
                        href={piece.perusalScoreUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-3 py-2 rounded-md transition"
                    >
                        View Score PDF
                    </a>
                )}
            </div>
        </div>

    </div>
}