export interface Track {
    phase: string,
    name: string,
    version: string,
    authors: [string],
    dlLink: string,
    slot: string,
    music: string,
    submissionNotes: string,
    submissionDate: string,
    submitterID: string,
    selected: boolean
}

// Incomplete list
export const Slots = [
    {slot: "LC", name: "Luigi Circuit"},
    {slot: "MMM", name: "Moo Moo Meadows"},
    {slot: "MG", name: "Mushroom Gorge"}
];

// Incomplete list
export const Musics = [
    {slot: "LC", name: "Luigi/Mario Circuit"},
    {slot: "MMM", name: "Moo Moo Meadows"},
    {slot: "MG", name: "Mushroom Gorge"}
]