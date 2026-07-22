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
        date: new Date(2026, 3, 28),
        projectType: 'Arrangement',
        instrumentation: new Set(['Symphony Orchestra', 'Choir', 'Chinese Orchestra']),
        creators: new Set(['Curtis', 'Vichet', 'Chinmay']),
        duration: '19:00',
        youtubeId: '5v7W1FMxLfI',
        description: 'A medley of themes from "Kung Fu Panda". Performed by Music for Charity at the University of Washington.'
    },
    {
        id: 'isabellas-lullaby',
        title: 'Isabella\'s Lullaby',
        date: new Date(2025, 6, 18),
        projectType: 'Arrangement',
        instrumentation: new Set(['Symphony Orchestra', 'Solo Voice']),
        creators: new Set(['Chinmay']),
        duration: '2:30',
        description: 'Orchestral arrangement of the piece from the anime "A Promised Neverland". Performed by Music for Charity at the University of Washington.'
    },
    {
        id: 'once-there-were-dragons',
        title: 'Once There Were Dragons',
        date: new Date(2026, 3, 28),
        projectType: 'Arrangement',
        instrumentation: new Set(['Symphony Orchestra', 'Choir']),
        creators: new Set(['Chinmay']),
        duration: '13:20',
        description: 'Orchestral medley of Chinmay\'s favorite themes from the 2nd and 3rd films in the How To Train Your Dragon trilogy. Not to be confused with the album\'s title for the epilogue from the third movie. Performed by Music for Charity at the University of Washington.'
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
    },
    {
        id: 'fontaine-waltz',
        title: 'Fontaine Main Theme',
        date: new Date(2024, 4, 10),
        projectType: 'Arrangement',
        instrumentation: new Set(['SATB Sax Quartet', 'Melodica']),
        creators: new Set(['Chinmay']),
        duration: '2:20',
        description: 'The main theme of the French-inspired region from Genshin Impact, arranged for saxophone quartet. The melodica is used as a substitute for the accordian/viola da gamba used in the original.'
    },
    {
        id: 'rondeau',
        title: 'Rondeau des fleurs et des rapieres',
        date: new Date(2024, 3, 21),
        projectType: 'Arrangement',
        instrumentation: new Set(['SATB Sax Quartet', 'Piano']),
        creators: new Set(['Chinmay']),
        duration: '2:00',
        description: 'A battle theme from the French-inspired region in Genshin Impact, arranged for piano and saxophone quartet. The original makes use of many period instruments including the glass armorica, which Chinmay attempts to imitate here with whistling.'
    },
    {
        id: 'fontaine-jazz-waltz',
        title: 'Fontaine Jazz Waltz',
        date: new Date(2025, 4, 4),
        projectType: 'Arrangement',
        instrumentation: new Set(['SATB Sax Quartet']),
        creators: new Set(['Chinmay']),
        duration: '3:00',
        description: 'This is a reimagination of a boss theme from Genshin Impact. The original is a very Chopin-style waltz that this arrangement mimics initially before swapping to and from a jarring bebop/jazz style fast enough to hopefully give the listener whiplash, ending with a chaotic "Moanin\'"-style solo section.'
    },
    {
        id: 'spear-of-justice',
        title: 'Spear of Justice',
        date: new Date(2023, 5, 29),
        projectType: 'Arrangement',
        instrumentation: new Set(['SATB Sax Quartet']),
        creators: new Set(['Chinmay']),
        duration: '1:40',
        description: 'A saxophone quartet arrangement of the fast-paced boss battle theme from Undertale. Originally started as a saxophone trio arrangement Chinmay made in middle school.'
    }
];