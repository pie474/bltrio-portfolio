'use client';

import { useState } from 'react';
import { repository } from '@/data/repository';
import { ProjectType, CreatorName } from '@/types/music';
import Card from '@/components/card';

export default function CatalogPage() {
    const [selectedType, setSelectedType] = useState<ProjectType | 'All'>('All');
    const [selectedCreator, setSelectedCreator] = useState<CreatorName | 'All'>('All');

    const filteredPieces = repository.filter((track) => {
        const matchesType = selectedType === 'All' || track.projectType === selectedType;
        const matchesCreator = selectedCreator === 'All' || track.creators.has(selectedCreator);
        return matchesType && matchesCreator;
    });

    return (
        <main className="px-6 py-12 md:py-12 max-w-5xl mx-auto space-y-10">
            {/* Interactive Control Panel */}
            <section className="bg-surface/60 p-6 rounded-xl border border-border shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Project Type Filter */}
                    <div className="space-y-1">
                        <label className="block text-xs font-medium text-muted-foreground">Project Type</label>
                        <select
                            className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition"
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value as ProjectType | 'All')}
                        >
                            <option value="All">All Types</option>
                            <option value="Arrangement">Arrangements</option>
                            <option value="Composition">Compositions</option>
                        </select>
                    </div>

                    {/* Creator Filter */}
                    <div className="space-y-1">
                        <label className="block text-xs font-medium text-muted-foreground">Arranged/Composed By</label>
                        <select
                            className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition"
                            value={selectedCreator}
                            onChange={(e) => setSelectedCreator(e.target.value as CreatorName | 'All')}
                        >
                            <option value="All">All Contributors</option>
                            <option value="Curtis">Curtis</option>
                            <option value="Vichet">Vichet</option>
                            <option value="Chinmay">Chinmay</option>
                        </select>
                    </div>

                </div>
            </section>

            {/* Grid Results */}
            <section>
                {filteredPieces.length === 0 ? (
                    <div className="text-center py-16 border border-dashed border-border rounded-xl text-muted-foreground text-sm">
                        No pieces match your selected filters. Try broadening your criteria.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredPieces.map((piece) => (
                            <Card piece={piece} key={piece.id} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}