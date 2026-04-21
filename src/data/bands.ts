export interface BandReference {
  label: string;
  url: string;
}

export interface Band {
  id: string;
  name: string;
  era: string;
  genre: string[];
  origin: string;
  description: string;
  formedYear: number;
  references?: BandReference[];
}

export const bands: Band[] = [
  { id: "1", name: "Ramones", era: "1974–1996", genre: ["Punk Rock"], origin: "New York City", description: "The blueprint for punk rock. Four chords, leather jackets, and songs under two minutes.", formedYear: 1974, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ramones" }] },
  { id: "2", name: "Sex Pistols", era: "1975–1978", genre: ["Punk Rock"], origin: "London", description: "Burned bright and fast. Never Mind the Bollocks remains one of the most influential albums ever.", formedYear: 1975, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sex_Pistols" }] },
  { id: "3", name: "The Clash", era: "1976–1986", genre: ["Punk Rock", "Post-Punk"], origin: "London", description: "The only band that matters. Blended punk with reggae, rockabilly, and hip-hop.", formedYear: 1976, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/The_Clash" }] },
  { id: "4", name: "Black Flag", era: "1976–1986", genre: ["Hardcore Punk"], origin: "Hermosa Beach, CA", description: "Defined hardcore punk with relentless touring and SST Records.", formedYear: 1976, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Black_Flag_(band)" }] },
  { id: "5", name: "Dead Kennedys", era: "1978–1986", genre: ["Hardcore Punk", "Political Punk"], origin: "San Francisco", description: "Sharp political satire delivered at breakneck speed. Jello Biafra's lyrics remain prescient.", formedYear: 1978, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dead_Kennedys" }] },
  { id: "6", name: "Minor Threat", era: "1980–1983", genre: ["Hardcore Punk", "Straight Edge"], origin: "Washington D.C.", description: "Short-lived but massive impact. Created the straight edge movement.", formedYear: 1980, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Minor_Threat" }, { label: "Dischord", url: "https://www.dischord.com/band/minor-threat" }] },
  { id: "7", name: "Bad Brains", era: "1977–present", genre: ["Hardcore Punk", "Reggae"], origin: "Washington D.C.", description: "Possibly the fastest and most technically skilled punk band ever. PMA forever.", formedYear: 1977, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bad_Brains" }] },
  { id: "8", name: "The Misfits", era: "1977–1983", genre: ["Horror Punk"], origin: "Lodi, NJ", description: "Married punk rock with B-movie horror aesthetics. The Crimson Ghost skull is iconic.", formedYear: 1977, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Misfits_(band)" }] },
  { id: "9", name: "Fugazi", era: "1987–2003", genre: ["Post-Hardcore"], origin: "Washington D.C.", description: "DIY ethics incarnate. $5 shows, no merch, no sellout. Changed what a punk band could be.", formedYear: 1987, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fugazi" }, { label: "Dischord", url: "https://www.dischord.com/band/fugazi" }] },
  { id: "10", name: "Bikini Kill", era: "1990–1997", genre: ["Riot Grrrl", "Punk Rock"], origin: "Olympia, WA", description: "Led the Riot Grrrl movement. Kathleen Hanna's fierce vocals and politics defined a generation.", formedYear: 1990, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bikini_Kill" }] },
  { id: "11", name: "Green Day", era: "1987–present", genre: ["Pop Punk"], origin: "Berkeley, CA", description: "Took punk mainstream with Dookie and American Idiot. Love them or hate them, they matter.", formedYear: 1987, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Green_Day" }] },
  { id: "12", name: "The Damned", era: "1976–present", genre: ["Punk Rock", "Gothic Rock"], origin: "London", description: "First UK punk band to release a single, an album, and tour the US.", formedYear: 1976, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/The_Damned_(band)" }] },
  { id: "13", name: "Blondie", era: "1974–1982", genre: ["Punk Rock", "New Wave"], origin: "New York City", description: "Emerged from CBGB to become global pop stars. Debbie Harry was punk's first superstar.", formedYear: 1974, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Blondie_(band)" }] },
  { id: "14", name: "Television", era: "1973–1978", genre: ["Punk Rock", "Art Punk"], origin: "New York City", description: "Marquee Moon redefined what guitars could do. Tom Verlaine's intricate playing was punk's artful side.", formedYear: 1973, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Television_(band)" }] },
  { id: "15", name: "Crass", era: "1977–1984", genre: ["Anarcho-Punk"], origin: "Essex, UK", description: "The most politically committed punk band. Lived communally, released on their own label.", formedYear: 1977, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Crass" }] },
  { id: "16", name: "X", era: "1977–present", genre: ["Punk Rock", "Rockabilly"], origin: "Los Angeles", description: "LA punk royalty. John Doe and Exene Cervenka's harmonies over Billy Zoom's rockabilly guitar.", formedYear: 1977, references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/X_(American_band)" }] },
];
