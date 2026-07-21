import Piece, { ALL_CREATORS } from '@/types/music';
import { FaYoutube } from 'react-icons/fa';

type Props = {
    piece: Piece;
};

export default function Card({ piece }: Props) {
    return (
        <div
            key={piece.id}
            className="bg-surface/50 border border-border hover:border-primary/40 transition p-6 rounded-xl flex flex-col justify-between space-y-6"
        >
            <div>
                <h3 className="text-xl font-bold text-foreground mb-1">{piece.title}</h3>

                {/* Category Pill Tags */}
                <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="text-[11px] bg-primary/10 text-primary font-medium px-2.5 py-0.5 rounded-md border border-primary/20">
                        {piece.projectType}
                    </span>
                    {[...piece.instrumentation].map((category) => (
                        <span className="text-[11px] bg-accent-muted text-accent-foreground font-medium px-2.5 py-0.5 rounded-md border border-accent/20" key={category}>
                            {category}
                        </span>
                    ))}
                    {piece.tags && piece.tags?.map((tag) => (
                        <span className="text-[11px] bg-tag-bg text-tag-text font-medium px-2.5 py-0.5 rounded-md border border-tag-border" key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title & Metadata */}
                <p className="text-xs text-muted-foreground font-mono mb-4">
                    {piece.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })} • {piece.duration}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {piece.description}
                </p>
            </div>

            {/* Footer Attribution & Action Links */}
            <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-muted-foreground">
                    By: <strong className="text-foreground">{ALL_CREATORS.every((val) => piece.creators.has(val)) ? "All" : [...piece.creators].join(', ')}</strong>
                </span>

                <div className="flex gap-2">
                    {piece.youtubeId && (
                        <a
                            href={`https://youtube.com/watch?v=${piece.youtubeId}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs bg-[#c4302b] hover:bg-[#a62824] text-white font-medium px-2.5 py-2 rounded-md transition inline-flex gap-2 justify-center items-center"
                        >
                            <FaYoutube className="text-white w-4 h-4" />
                            Watch
                        </a>
                    )}
                    {piece.perusalScoreUrl && (
                        <a
                            href={piece.perusalScoreUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs bg-surface hover:bg-surface-hover text-foreground border border-border font-medium px-3 py-2 rounded-md transition"
                        >
                            View Score PDF
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}