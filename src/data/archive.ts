export interface ArchiveReference {
  label: string;
  url: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  type: "flyer" | "zine" | "photo" | "recording" | "document" | "video";
  year: number;
  description: string;
  scene: string;
  tags: string[];
  references?: ArchiveReference[];
}

export const archiveTypes = ["All", "flyer", "zine", "photo", "recording", "document", "video"] as const;

export const archiveItems: ArchiveItem[] = [
  { id: "1", title: "CBGB Opening Night Flyer", type: "flyer", year: 1973, description: "Original flyer from CBGB's opening night featuring country and bluegrass acts — before punk took over.", scene: "New York", tags: ["CBGB", "NYC", "Origins"], references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/CBGB" }] },
  { id: "2", title: "Sniffin' Glue Issue #1", type: "zine", year: 1976, description: "Mark Perry's legendary fanzine that captured the birth of UK punk in real-time. Photocopied, stapled, essential.", scene: "London", tags: ["Zine", "UK Punk", "DIY"], references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sniffin%27_Glue" }] },
  { id: "3", title: "Ramones at CBGB, 1975", type: "photo", year: 1975, description: "Early Ramones performance captured in grainy black and white. Four guys in leather jackets changing everything.", scene: "New York", tags: ["Ramones", "CBGB", "Live"], references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ramones" }] },
  { id: "4", title: "Sex Pistols — Grundy Interview Tape", type: "recording", year: 1976, description: "The infamous Bill Grundy TV interview that made punk front-page news across Britain overnight.", scene: "London", tags: ["Sex Pistols", "Media", "Controversy"], references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Today_(ITV_programme)#Sex_Pistols_interview" }] },
  { id: "5", title: "Black Flag SST Records Contract", type: "document", year: 1978, description: "Original founding documents of SST Records, the label that changed independent music distribution forever.", scene: "Los Angeles", tags: ["SST", "Black Flag", "DIY Label"], references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/SST_Records" }] },
  { id: "6", title: "Maximum Rocknroll #1", type: "zine", year: 1982, description: "First issue of MRR, the definitive hardcore punk zine. Tim Yohannan's vision for a connected global punk scene.", scene: "San Francisco", tags: ["MRR", "Hardcore", "Zine"], references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Maximum_Rocknroll" }] },
  { id: "7", title: "Minor Threat at Wilson Center", type: "photo", year: 1981, description: "Ian MacKaye performing at the Wilson Center, the DIY venue that housed DC hardcore.", scene: "Washington D.C.", tags: ["Minor Threat", "DC", "Hardcore"], references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Minor_Threat" }] },
  { id: "8", title: "Dead Kennedys 'Holiday in Cambodia' 7\"", type: "recording", year: 1980, description: "Original pressing of the DK's most iconic single on Cherry Red Records.", scene: "San Francisco", tags: ["Dead Kennedys", "Single", "Political"], references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Holiday_in_Cambodia" }] },
  { id: "9", title: "The Masque Flyer Collection", type: "flyer", year: 1977, description: "Collection of hand-drawn flyers from The Masque, LA's first punk venue in a Hollywood basement.", scene: "Los Angeles", tags: ["The Masque", "LA Punk", "Flyers"], references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/The_Masque" }] },
  { id: "10", title: "Bikini Kill 'Revolution Girl Style Now' Tape", type: "recording", year: 1991, description: "Self-released cassette that launched the Riot Grrrl movement. Recorded in a friend's basement.", scene: "Olympia", tags: ["Riot Grrrl", "Bikini Kill", "Cassette"], references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Revolution_Girl_Style_Now" }] },
  { id: "11", title: "Gilman Street Collective Bylaws", type: "document", year: 1986, description: "The original bylaws of 924 Gilman Street, the all-ages DIY venue that shaped Bay Area punk.", scene: "San Francisco", tags: ["Gilman", "DIY", "All Ages"], references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/924_Gilman_Street" }] },
  { id: "12", title: "The Decline of Western Civilization", type: "video", year: 1981, description: "Penelope Spheeris' documentary capturing LA punk and hardcore in its raw, unfiltered glory.", scene: "Los Angeles", tags: ["Documentary", "LA Punk", "Film"], references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/The_Decline_of_Western_Civilization" }] },
];
