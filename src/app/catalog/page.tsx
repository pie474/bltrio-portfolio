'use client';

import { Suspense, useMemo } from 'react';
import { repository } from '@/data/repository';
import Card from '@/components/card';
import SearchInput from '@/components/search-input';
import SortPopover from '@/components/sort-popover';
import FilterPopover from '@/components/filter-popover';
import { useCatalogParams } from '@/hooks/use-catalog-params';

function CatalogContent() {
    const {
        searchQuery,
        sortBy,
        selectedTypes,
        selectedCreators,
        selectedInstruments,
        setSearchQuery,
        setSortBy,
        toggleType,
        toggleCreator,
        toggleInstrument,
        resetFilters,
        resetAll,
    } = useCatalogParams();

    // Filtering & Sorting Pipeline
    const filteredAndSortedPieces = useMemo(() => {
        return repository
            .filter((track) => {
                const matchesQuery =
                    !searchQuery ||
                    track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    track.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    track.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

                const matchesType = selectedTypes.size === 0 || selectedTypes.has(track.projectType);
                const matchesCreator = selectedCreators.size === 0 || Array.from(selectedCreators).some((c) => track.creators.has(c));
                const matchesInstrument = selectedInstruments.size === 0 || Array.from(selectedInstruments).some((i) => track.instrumentation.has(i));

                return matchesQuery && matchesType && matchesCreator && matchesInstrument;
            })
            .sort((a, b) => {
                if (sortBy === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
                if (sortBy === 'oldest') return new Date(a.date).getTime() - new Date(a.date).getTime();
                if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
                if (sortBy === 'title-desc') return b.title.localeCompare(a.title);
                return 0;
            });
    }, [searchQuery, selectedTypes, selectedCreators, selectedInstruments, sortBy]);

    return (
        <main className="px-6 py-12 max-w-5xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Music Catalog</h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Explore arrangements, transcriptions, and original compositions.
                    </p>
                </div>
                <div className="text-sm text-muted-foreground">
                    Showing <span className="font-semibold text-foreground">{filteredAndSortedPieces.length}</span> {filteredAndSortedPieces.length === 1 ? 'piece' : 'pieces'}
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center gap-2">
                <SearchInput value={searchQuery} onChange={setSearchQuery} placeholder="Search catalog..." />

                <FilterPopover
                    selectedTypes={selectedTypes}
                    selectedCreators={selectedCreators}
                    selectedInstruments={selectedInstruments}
                    onTypeToggle={toggleType}
                    onCreatorToggle={toggleCreator}
                    onInstrumentToggle={toggleInstrument}
                    onReset={resetFilters}
                />

                <SortPopover value={sortBy} onChange={setSortBy} />
            </div>

            {/* Results Grid */}
            <section>
                {filteredAndSortedPieces.length === 0 ? (
                    <div className="text-center py-16 border border-dashed border-border rounded-2xl text-muted-foreground text-sm space-y-3">
                        <p>No pieces match your selected criteria.</p>
                        <button
                            onClick={resetAll}
                            className="px-4 py-2 text-xs font-medium bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition"
                        >
                            Clear search and filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredAndSortedPieces.map((piece) => (
                            <Card piece={piece} key={piece.id} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}

export default function CatalogPage() {
    return (
        <Suspense fallback={<div className="p-12 text-center text-sm text-muted-foreground">Loading catalog...</div>}>
            <CatalogContent />
        </Suspense>
    );
}