export interface EducationReference {
  label: string;
  url: string;
}

export interface EducationModule {
  id: string;
  title: string;
  description: string;
  topics: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  references?: EducationReference[];
}

export const educationModules: EducationModule[] = [
  {
    id: "1",
    title: "Punk 101: Origins & Philosophy",
    description: "The essential starting point. Trace punk from its proto-punk roots in the late 1960s through the CBGB scene and the UK explosion. Understand the DIY philosophy that drives everything.",
    topics: ["Proto-Punk", "CBGB", "Sex Pistols", "DIY Ethics", "Situationism"],
    difficulty: "beginner",
    estimatedTime: "45 min",
    references: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Punk_rock" },
      { label: "Wikipedia (Proto-Punk)", url: "https://en.wikipedia.org/wiki/Protopunk" },
    ],
  },
  {
    id: "2",
    title: "Hardcore: The Second Wave",
    description: "How punk got faster, louder, and angrier. Explore the American hardcore movement from Black Flag's relentless touring to Minor Threat's straight edge philosophy.",
    topics: ["Black Flag", "Minor Threat", "Bad Brains", "SST Records", "Dischord"],
    difficulty: "beginner",
    estimatedTime: "40 min",
    references: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hardcore_punk" },
      { label: "Wikipedia (American Hardcore)", url: "https://en.wikipedia.org/wiki/American_Hardcore" },
    ],
  },
  {
    id: "3",
    title: "Punk Geography: Scene by Scene",
    description: "A deep dive into how punk developed differently in New York, London, LA, DC, San Francisco, and beyond. Each city created its own unique variant.",
    topics: ["NYC", "London", "LA", "DC", "San Francisco", "Regional Scenes"],
    difficulty: "intermediate",
    estimatedTime: "60 min",
    references: [
      { label: "Wikipedia (NYC)", url: "https://en.wikipedia.org/wiki/Punk_rock_in_New_York" },
      { label: "Wikipedia (UK)", url: "https://en.wikipedia.org/wiki/Punk_rock_in_the_United_Kingdom" },
    ],
  },
  {
    id: "4",
    title: "Zines, Art & Visual Culture",
    description: "Punk's visual identity: from Jamie Reid's Sex Pistols artwork to Raymond Pettibon's Black Flag flyers. Explore how cut-and-paste aesthetics became a design movement.",
    topics: ["Zine Making", "Flyer Art", "Album Covers", "Fashion", "Graphic Design"],
    difficulty: "intermediate",
    estimatedTime: "50 min",
    references: [
      { label: "Wikipedia (Zines)", url: "https://en.wikipedia.org/wiki/Zine" },
      { label: "Wikipedia (Jamie Reid)", url: "https://en.wikipedia.org/wiki/Jamie_Reid" },
      { label: "Wikipedia (Raymond Pettibon)", url: "https://en.wikipedia.org/wiki/Raymond_Pettibon" },
    ],
  },
  {
    id: "5",
    title: "Women in Punk & Riot Grrrl",
    description: "From Poly Styrene to Kathleen Hanna. How women carved space in punk, built their own movements, and challenged sexism within the scene itself.",
    topics: ["X-Ray Spex", "Bikini Kill", "Sleater-Kinney", "Riot Grrrl", "Feminism"],
    difficulty: "intermediate",
    estimatedTime: "55 min",
    references: [
      { label: "Wikipedia (Riot Grrrl)", url: "https://en.wikipedia.org/wiki/Riot_grrrl" },
      { label: "Wikipedia (Poly Styrene)", url: "https://en.wikipedia.org/wiki/Poly_Styrene" },
    ],
  },
  {
    id: "6",
    title: "The Economics of DIY",
    description: "How punk created alternative economic structures: independent labels, all-ages venues, touring networks, and the refusal of major label culture.",
    topics: ["SST", "Dischord", "Alternative Tentacles", "Fat Wreck", "Touring"],
    difficulty: "advanced",
    estimatedTime: "45 min",
    references: [
      { label: "Wikipedia (DIY Ethic)", url: "https://en.wikipedia.org/wiki/DIY_ethic" },
      { label: "Wikipedia (SST Records)", url: "https://en.wikipedia.org/wiki/SST_Records" },
      { label: "Dischord", url: "https://www.dischord.com/" },
    ],
  },
  {
    id: "7",
    title: "Punk Goes Global",
    description: "Punk beyond the US and UK: from Japan's noise scene to Brazil's hardcore, from Scandinavian crust to Australian pub punk.",
    topics: ["Japanese Punk", "Brazilian Hardcore", "Scandinavian Punk", "Australian Punk"],
    difficulty: "advanced",
    estimatedTime: "50 min",
    references: [
      { label: "Wikipedia (Japanese Punk)", url: "https://en.wikipedia.org/wiki/Japanese_punk" },
      { label: "Wikipedia (Punk Subgenres)", url: "https://en.wikipedia.org/wiki/Punk_rock_subgenres" },
    ],
  },
  {
    id: "8",
    title: "Post-Punk & Beyond",
    description: "What happened after punk? Explore post-punk, post-hardcore, emo, pop-punk, and how punk's DNA spread into nearly every genre of modern music.",
    topics: ["Post-Punk", "Post-Hardcore", "Emo", "Pop-Punk", "Influence"],
    difficulty: "advanced",
    estimatedTime: "60 min",
    references: [
      { label: "Wikipedia (Post-Punk)", url: "https://en.wikipedia.org/wiki/Post-punk" },
      { label: "Wikipedia (Post-Hardcore)", url: "https://en.wikipedia.org/wiki/Post-hardcore" },
      { label: "Wikipedia (Emo)", url: "https://en.wikipedia.org/wiki/Emo" },
    ],
  },
];
