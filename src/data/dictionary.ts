export interface DictionaryReference {
  label: string;
  url: string;
}

export interface DictionaryTerm {
  id: string;
  term: string;
  definition: string;
  letter: string;
  references?: DictionaryReference[];
}

export const dictionaryTerms: DictionaryTerm[] = [
  { id: "1", term: "Anarcho-Punk", definition: "A subgenre combining punk rock with anarchist political philosophy. Crass and Conflict are key bands. Emphasizes DIY ethics, anti-war, and anti-capitalist themes.", letter: "A", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Anarcho-punk" }] },
  { id: "2", term: "All Ages", definition: "A show or venue that doesn't restrict entry by age. Central to punk's inclusive, community-driven ethos. Many hardcore scenes thrived on all-ages shows.", letter: "A", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/All-ages_show" }] },
  { id: "3", term: "Bootleg", definition: "An unauthorized recording of a live show or unreleased material. In punk, bootlegs were often traded on cassette and considered badges of honor.", letter: "B", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bootleg_recording" }] },
  { id: "4", term: "Breakdown", definition: "A heavy, slow section in a hardcore song where the tempo drops and the riffs get crushingly heavy. Cue the moshing.", letter: "B", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Breakdown_(music)" }] },
  { id: "5", term: "CBGB", definition: "Country, BlueGrass, and Blues — the legendary NYC club that accidentally became punk's birthplace. Ramones, Television, Blondie, and Talking Heads all started here.", letter: "C", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/CBGB" }] },
  { id: "6", term: "Circle Pit", definition: "A form of moshing where participants run in a circle in the pit. Faster and more chaotic than a regular mosh pit.", letter: "C", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Moshing#Circle_pit" }] },
  { id: "7", term: "DIY", definition: "Do It Yourself. The foundational ethic of punk. Book your own shows, make your own records, print your own zines. Don't wait for permission.", letter: "D", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/DIY_ethic" }] },
  { id: "8", term: "D-Beat", definition: "A drumbeat pattern named after the band Discharge. A driving, relentless rhythm that became the backbone of crust punk.", letter: "D", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/D-beat" }] },
  { id: "9", term: "Emo", definition: "Short for 'emotional hardcore.' Originally referred to bands like Rites of Spring and Embrace in the mid-80s DC scene. Has evolved far from its punk roots.", letter: "E", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Emo" }] },
  { id: "10", term: "EP", definition: "Extended Play. A release longer than a single but shorter than a full album, typically 4-6 songs. Punk's preferred format for its economy and urgency.", letter: "E", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Extended_play" }] },
  { id: "11", term: "Fanzine", definition: "A self-published, small-circulation magazine devoted to punk culture. Sniffin' Glue, Maximum Rocknroll, and Flipside were legendary.", letter: "F", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fanzine" }] },
  { id: "12", term: "Garage Punk", definition: "Raw, lo-fi punk influenced by 1960s garage rock. The Cramps, The Sonics, and later The White Stripes carried this torch.", letter: "G", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Garage_punk_(fusion_genre)" }] },
  { id: "13", term: "Hardcore", definition: "Faster, heavier, more aggressive evolution of punk rock. Black Flag, Minor Threat, and Bad Brains defined the sound in the early 1980s.", letter: "H", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hardcore_punk" }] },
  { id: "14", term: "Indie", definition: "Short for independent. Originally meant music released on independent labels. In punk, going indie was an ideological choice, not a marketing strategy.", letter: "I", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Independent_music" }] },
  { id: "15", term: "Jackboots", definition: "Heavy military-style boots adopted by punk fashion. Doc Martens became the standard, though punks wore them ironically, unlike their original purpose.", letter: "J", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jackboots" }] },
  { id: "16", term: "Kill Your Idols", definition: "A punk philosophy of anti-hero worship. Don't put anyone on a pedestal. Question everything, even your favorite bands.", letter: "K" },
  { id: "17", term: "Liberty Spikes", definition: "A punk hairstyle where hair is shaped into long, thick spikes using strong-hold products. Named for their resemblance to the Statue of Liberty's crown.", letter: "L", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Liberty_spikes" }] },
  { id: "18", term: "Mosh Pit", definition: "An area near the stage where audience members engage in aggressive, physical dancing. Originated in the hardcore punk scene of the early 1980s.", letter: "M", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Moshing" }] },
  { id: "19", term: "No Future", definition: "From the Sex Pistols' 'God Save the Queen.' Became a nihilistic rallying cry for punk's rejection of mainstream society's promises.", letter: "N", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/God_Save_the_Queen_(Sex_Pistols_song)" }] },
  { id: "20", term: "Oi!", definition: "A working-class street punk subgenre from late 1970s UK. Cockney Rejects and Sham 69 were key bands. Sometimes controversially associated with skinhead culture.", letter: "O", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Oi!" }] },
  { id: "21", term: "Power Chord", definition: "A guitar chord consisting of the root note and fifth. The building block of punk guitar. Simple, loud, effective.", letter: "P", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Power_chord" }] },
  { id: "22", term: "Riot Grrrl", definition: "A feminist punk movement from the early 1990s, centered in Olympia, WA and Washington, DC. Bikini Kill, Sleater-Kinney, and Bratmobile led the charge.", letter: "R", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Riot_grrrl" }] },
  { id: "23", term: "Straight Edge", definition: "A lifestyle choice within punk to abstain from alcohol, drugs, and tobacco. Coined by Minor Threat's Ian MacKaye. Marked with an X on the hand.", letter: "S", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Straight_edge" }] },
  { id: "24", term: "Stage Dive", definition: "The act of jumping from the stage into the crowd. A punk rite of passage that's equal parts exhilarating and terrifying.", letter: "S", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stage_diving" }] },
  { id: "25", term: "Three Chords", definition: "The foundational joke/truth about punk music. You only need three chords to start a band. The Ramones proved it.", letter: "T" },
  { id: "26", term: "Underground", definition: "Music, culture, or scenes that exist outside the mainstream. In punk, staying underground was often a point of pride and ideological commitment.", letter: "U", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Underground_music" }] },
  { id: "27", term: "Venue", definition: "The space where punk shows happen. From legendary clubs (CBGB, The Masque) to basements, VFW halls, and squats.", letter: "V", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Music_venue" }] },
  { id: "28", term: "Xerox", definition: "The punk method of reproduction. Zines, flyers, and show posters were photocopied and distributed by hand. Cut, paste, copy, distribute.", letter: "X" },
  { id: "29", term: "Zine", definition: "A small, self-published work of text and images. The punk internet before the internet. Essential for spreading ideas, reviews, and scene reports.", letter: "Z", references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Zine" }] },
];

export const alphabet = [...new Set(dictionaryTerms.map((t) => t.letter))].sort();
