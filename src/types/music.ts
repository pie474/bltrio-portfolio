export const ALL_CREATORS = ['Curtis', 'Vichet', 'Chinmay'] as const;
export const ALL_INSTRUMENTS = ['SATB Sax Quartet', 'SAATB Sax Quintet', 'Symphony Orchestra', 'Choir', 'Solo Voice', 'Chinese Orchestra', 'Piano', 'Trumpet', 'Melodica', 'Wind Ensemble', 'Solo Soprano Sax', 'Solo Alto Sax', 'Solo Tenor Sax', 'Solo Bari Sax'] as const;
export const ALL_PROJECT_TYPES = ['Arrangement', 'Arrangement/Transcription', 'Composition'] as const;

export type CreatorName = typeof ALL_CREATORS[number];
export type InstrumentationCategory = typeof ALL_INSTRUMENTS[number];
export type ProjectType = typeof ALL_PROJECT_TYPES[number];

export default interface Piece {
    id: string;
    title: string;
    date: Date;
    projectType: ProjectType;
    instrumentation: Set<InstrumentationCategory>;
    creators: Set<CreatorName>;
    duration: string;
    description: string;
    tags?: string[];
    audioUrl?: string;
    youtubeId?: string;
    perusalScoreUrl?: string;
}