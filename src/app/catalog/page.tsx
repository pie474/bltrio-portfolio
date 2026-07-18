'use client';

import { useState } from 'react';
import { repository } from '@/data/repository';
import { ALL_INSTRUMENTS, ProjectType, CreatorName } from '@/types/music';
import Card from '@/components/card'

export default function CatalogPage() {
    const [selectedType, setSelectedType] = useState<ProjectType | 'All'>('All');
    // const [selectedEnsemble, setSelectedEnsemble] = useState<EnsembleCategory | 'All'>('All');
    const [selectedCreator, setSelectedCreator] = useState<CreatorName | 'All'>('All');

    const filteredPieces = repository.filter((track) => {
        const matchesType = selectedType === 'All' || track.projectType === selectedType;
        // const matchesEnsemble = selectedEnsemble === 'All' || track.ensembleCategory === selectedEnsemble;
        const matchesCreator = selectedCreator === 'All' || track.creators.has(selectedCreator);
        return matchesType && matchesCreator;
    });

    return (
        <main className="px-6 py-12 md:py-12 max-w-5xl mx-auto space-y-10">
            {/* Page Header */}
            {/* <header className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    Music Catalog
                </h1>
                <p className="text-slate-400 text-base max-w-2xl leading-relaxed">
                    Browse through our full sheet music and composition archives. Use the filters below to sort by creator, configuration, or style.
                </p>
            </header> */}

            {/* Interactive Control Panel */}
            <section className="bg-slate-800/40 p-6 rounded-xl border border-slate-800 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                    {/* Project Type Filter */}
                    <div className="space-y-1">
                        <label className="block text-xs font-medium text-slate-400">Project Type</label>
                        <select
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value as ProjectType | 'All')}
                        >
                            <option value="All">All Types</option>
                            <option value="Arrangement">Arrangements</option>
                            <option value="Composition">Compositions</option>
                        </select>
                    </div>

                    {/* Ensemble Filter */}
                    {/* <div className="space-y-1">
                        <label className="block text-xs font-medium text-slate-400">Ensemble Configuration</label>
                        <select
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                            value={selectedEnsemble}
                            onChange={(e) => setSelectedEnsemble(e.target.value as EnsembleCategory | 'All')}
                        >
                            <option value="All">All Ensembles</option>
                            <option value="Chamber">Chamber Music</option>
                            <option value="Large Ensemble">Large Ensemble</option>
                            <option value="Solo & Small">Solo & Small Groups</option>
                        </select>
                    </div> */}

                    {/* Creator Filter */}
                    <div className="space-y-1">
                        <label className="block text-xs font-medium text-slate-400">Arranged/Composed By</label>
                        <select
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition"
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
            <section> {
                filteredPieces.length === 0 ? (
                    <div className="text-center py-16 border border-dashed border-slate-800 rounded-xl text-slate-500 text-sm">
                        No pieces match your selected filters. Try broadening your criteria.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredPieces.map((piece) => (
                            <Card piece={piece} key={piece.id} />
                        ))}
                    </div>
                )
            } </section >
        </main >
    );
}