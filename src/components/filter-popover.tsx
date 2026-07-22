'use client';

import { useState, useRef } from 'react';
import { useClickOutside } from '@/hooks/use-click-outside';
import { ProjectType, CreatorName, InstrumentationCategory, ALL_CREATORS, ALL_INSTRUMENTS, ALL_PROJECT_TYPES } from '@/types/music';
import { FaFilter } from 'react-icons/fa6';

interface FilterPopoverProps {
    selectedTypes: Set<ProjectType>;
    selectedCreators: Set<CreatorName>;
    selectedInstruments: Set<InstrumentationCategory>;
    onTypeToggle: (type: ProjectType) => void;
    onCreatorToggle: (creator: CreatorName) => void;
    onInstrumentToggle: (inst: InstrumentationCategory) => void;
    onReset: () => void;
}

export default function FilterPopover({
    selectedTypes,
    selectedCreators,
    selectedInstruments,
    onTypeToggle,
    onCreatorToggle,
    onInstrumentToggle,
    onReset,
}: FilterPopoverProps) {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    useClickOutside(popoverRef, () => setIsOpen(false));

    const activeCount = selectedTypes.size + selectedCreators.size + selectedInstruments.size;

    return (
        <div className="relative" ref={popoverRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 px-3.5 py-2 border rounded-xl text-sm font-medium transition cursor-pointer ${activeCount > 0
                    ? 'bg-primary/10 border-primary text-primary'
                    : 'bg-background border-border text-foreground hover:bg-accent-muted/50'
                    }`}
            >
                <FaFilter stroke="currentColor" className="w-4 h-4" />
                <span className="hidden sm:inline">Filter</span>
                {activeCount > 0 && (
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-1.5 py-0.5 rounded-full">
                        {activeCount}
                    </span>
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 sm:right-auto sm:left-0 top-full mt-2 w-72 sm:w-96 bg-background border border-border rounded-2xl shadow-xl p-4 z-50 space-y-4 max-h-[75vh] overflow-y-auto">
                    <div className="flex items-center justify-between border-b border-border pb-2">
                        <h3 className="font-semibold text-sm">Filters</h3>
                        {activeCount > 0 && (
                            <button onClick={onReset} className="text-xs text-muted-foreground hover:text-foreground underline">
                                Reset all
                            </button>
                        )}
                    </div>

                    {/* Project Types */}
                    <FilterGroup title="Project Type" items={ALL_PROJECT_TYPES} selectedItems={selectedTypes} onToggle={onTypeToggle} />

                    {/* Creators */}
                    <FilterGroup title="Contributor" items={ALL_CREATORS} selectedItems={selectedCreators} onToggle={onCreatorToggle} />

                    {/* Instrumentation */}
                    <FilterGroup title="Instrumentation" items={ALL_INSTRUMENTS} selectedItems={selectedInstruments} onToggle={onInstrumentToggle} scrollable />
                </div>
            )}
        </div>
    );
}

// Internal reusable checkbox list helper
function FilterGroup<T extends string>({
    title,
    items,
    selectedItems,
    onToggle,
    scrollable = false,
}: {
    title: string;
    items: readonly T[];
    selectedItems: Set<T>;
    onToggle: (item: T) => void;
    scrollable?: boolean;
}) {
    return (
        <div className="space-y-2 select-none">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{title}</span>
            <div className={`space-y-1 ${scrollable ? 'max-h-36 overflow-y-auto pr-1' : ''}`}>
                {items.map((item) => (
                    <label key={item} className="flex items-center gap-2 text-sm text-foreground cursor-pointer hover:bg-accent-muted/30 p-1 rounded-md">
                        <input
                            type="checkbox"
                            checked={selectedItems.has(item)}
                            onChange={() => onToggle(item)}
                            className="rounded border-border text-primary focus:ring-primary/20"
                        />
                        <span>{item}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}