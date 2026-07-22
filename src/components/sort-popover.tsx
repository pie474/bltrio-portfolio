'use client';

import { useState, useRef } from 'react';
import { useClickOutside } from '@/hooks/use-click-outside';
import {
    FaArrowDownAZ,
    FaArrowUpAZ,
    FaArrowDown91,
    FaArrowUp91,
} from 'react-icons/fa6';

export type SortOption = 'newest' | 'oldest' | 'title-asc' | 'title-desc';

const SORT_LABELS: Record<SortOption, string> = {
    'newest': 'Date: Newest first',
    'oldest': 'Date: Oldest first',
    'title-asc': 'Title: A to Z',
    'title-desc': 'Title: Z to A',
};

const SORT_ICONS: Record<
    SortOption,
    React.ComponentType<{ className?: string }>
> = {
    newest: FaArrowDown91,
    oldest: FaArrowUp91,
    'title-asc': FaArrowDownAZ,
    'title-desc': FaArrowUpAZ,
};

interface SortPopoverProps {
    value: SortOption;
    onChange: (sort: SortOption) => void;
}

export default function SortPopover({ value, onChange }: SortPopoverProps) {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    const Icon = SORT_ICONS[value];

    useClickOutside(popoverRef, () => setIsOpen(false));

    return (
        <div className="relative" ref={popoverRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3.5 py-2 bg-background border border-border rounded-xl text-sm font-medium text-foreground hover:bg-accent-muted/50 transition cursor-pointer"
            >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">Sort</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border rounded-2xl shadow-xl p-1.5 z-50 space-y-0.5">
                    {(Object.keys(SORT_LABELS) as SortOption[]).map((option) => (
                        <button
                            key={option}
                            onClick={() => {
                                onChange(option);
                                setIsOpen(false);
                            }}
                            className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition cursor-pointer ${value === option
                                ? 'bg-primary/10 text-primary font-medium'
                                : 'text-foreground hover:bg-accent-muted/50'
                                }`}
                        >
                            {SORT_LABELS[option]}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}