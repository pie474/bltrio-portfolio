export default function AboutPage() {
    const team = [
        {
            name: 'Alex',
            role: 'Arranger / Orchestrator',
            bio: 'Musician and theorist. Alex specializes in dense woodwind arrangements and expanding chamber works into massive orchestral textures.'
        },
        {
            name: 'Sam',
            role: 'Composer / Producer',
            bio: 'Bringing a background in tech and software, Sam weaves algorithmic patterns and minimalist structures into modern acoustic compositions.'
        },
        {
            name: 'Jordan',
            role: 'Arranger / Copyist',
            bio: 'With deep roots in community jazz bands, Jordan ensures our brass writing is punchy, practical, and highly playable for musicians of all levels.'
        }
    ];

    return (
        <main className="px-6 py-16 max-w-4xl mx-auto space-y-16">
            <header className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Who are we?</h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    We met through the band program at the University of Washington. Did some shenanigans and now we're here idk
                </p>
            </header>

            <section className="space-y-8">
                <h2 className="text-xl font-bold text-foreground border-b border-border pb-2">The Trio</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {team.map((member) => (
                        <div key={member.name} className="bg-surface/60 border border-border p-6 rounded-xl space-y-3">
                            <div className="w-12 h-12 rounded-full bg-accent-muted border border-accent/20 flex items-center justify-center font-bold text-accent-foreground text-lg">
                                {member.name[0]}
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
                                <p className="text-xs font-mono text-primary">{member.role}</p>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}