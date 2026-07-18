import Piece from '@/types/music';

export const repository: Piece[] = [
    {
        id: 'evan-call-medley',
        title: 'A Field of Flowers and Memories: An Evan Call Medley',
        date: new Date(2025, 3),
        projectType: 'Arrangement',
        instrumentation: new Set(['Symphony Orchestra', 'Choir']),
        creators: new Set(['Curtis', 'Vichet', 'Chinmay']),
        duration: '22:30',
        description: 'A medley of themes from "Violet Evergarden" and "Frieren: Beyond Journey\'s End". Performed by Music for Charity at the University of Washington.',
        youtubeId: 'vQfXRQUy_V4',
        tags: ['anime']
    },
    {
        id: 'kfp-medley',
        title: 'A Bowl of Noodles and Kung Fu',
        date: new Date(2026, 3),
        projectType: 'Arrangement',
        instrumentation: new Set(['Symphony Orchestra', 'Choir', 'Chinese Orchestra']),
        creators: new Set(['Curtis', 'Vichet', 'Chinmay']),
        duration: '19:00',
        youtubeId: '5v7W1FMxLfI',
        description: 'A medley of themes from "Kung Fu Panda". Performed by Music for Charity at the University of Washington.'
    },
    {
        id: 'brawl-quartet',
        title: 'Super Smash Bros. Brawl Main Theme',
        date: new Date(2024, 4, 23),
        projectType: 'Arrangement',
        instrumentation: new Set(['SATB Sax Quartet']),
        creators: new Set(['Chinmay']),
        duration: '2:00',
        description: 'An arrangement of the beloved main theme from Super Smash Bros. Brawl for our saxophone quartet BLT.'
    }
];