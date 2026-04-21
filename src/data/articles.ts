export interface ArticleReference {
  label: string;
  url: string;
}

export interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  readTime: string;
  category: string;
  tags: string[];
  references?: ArticleReference[];
}

export const articleCategories = ["All", "History", "Culture", "Music", "Politics", "Scene Report"] as const;

export const articles: Article[] = [
  {
    id: "1",
    title: "The Night CBGB Changed Everything",
    author: "Mirabelle Doiron",
    date: "2024-03-15",
    excerpt: "On a cold March night in 1974, Television took the stage at a seedy bar on the Bowery. Nobody knew it yet, but rock and roll would never be the same. This is the story of how a country music venue became punk's cathedral.",
    readTime: "8 min",
    category: "History",
    tags: ["CBGB", "Television", "NYC"],
    references: [{ label: "Wikipedia (CBGB)", url: "https://en.wikipedia.org/wiki/CBGB" }, { label: "Wikipedia (Television)", url: "https://en.wikipedia.org/wiki/Television_(band)" }],
  },
  {
    id: "2",
    title: "Why Straight Edge Still Matters in 2024",
    author: "Mirabelle Doiron",
    date: "2024-02-20",
    excerpt: "Ian MacKaye never intended to start a movement. A simple song about personal choice became a global subculture. Four decades later, straight edge continues to evolve and challenge punk's relationship with substance use.",
    readTime: "6 min",
    category: "Culture",
    tags: ["Straight Edge", "Minor Threat", "Subculture"],
    references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Straight_edge" }],
  },
  {
    id: "3",
    title: "The Lost Women of First-Wave Punk",
    author: "Mirabelle Doiron",
    date: "2024-01-10",
    excerpt: "History remembers the Ramones and the Sex Pistols. But what about The Slits, X-Ray Spex, and The Bags? The women who shaped punk's first wave have been systematically written out of the narrative.",
    readTime: "10 min",
    category: "History",
    tags: ["Women in Punk", "The Slits", "X-Ray Spex"],
    references: [{ label: "Wikipedia (The Slits)", url: "https://en.wikipedia.org/wiki/The_Slits" }, { label: "Wikipedia (X-Ray Spex)", url: "https://en.wikipedia.org/wiki/X-Ray_Spex" }],
  },
  {
    id: "4",
    title: "How SST Records Built the Blueprint",
    author: "Mirabelle Doiron",
    date: "2023-12-05",
    excerpt: "Before there was an indie music industry, there was SST. Greg Ginn's label didn't just release records — it created the infrastructure for independent music distribution that every DIY label still uses today.",
    readTime: "7 min",
    category: "Music",
    tags: ["SST Records", "Black Flag", "DIY Labels"],
    references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/SST_Records" }],
  },
  {
    id: "5",
    title: "Punk's Complicated Relationship with Politics",
    author: "Mirabelle Doiron",
    date: "2023-11-18",
    excerpt: "Is punk inherently political? From the Clash's socialist anthems to the Ramones' studied apoliticism, punk has always been at war with itself over whether the music should carry a message.",
    readTime: "9 min",
    category: "Politics",
    tags: ["Political Punk", "The Clash", "Dead Kennedys"],
    references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Political_punk" }],
  },
  {
    id: "6",
    title: "Scene Report: Montreal's Punk Underground",
    author: "Mirabelle Doiron",
    date: "2024-04-01",
    excerpt: "Montreal's bilingual punk scene is one of North America's best-kept secrets. From The Nils in the '80s to today's thriving DIY community, the city has always done punk differently.",
    readTime: "7 min",
    category: "Scene Report",
    tags: ["Montreal", "Canadian Punk", "DIY"],
    references: [{ label: "Wikipedia (The Nils)", url: "https://en.wikipedia.org/wiki/The_Nils" }],
  },
  {
    id: "7",
    title: "The Art of the Punk Flyer",
    author: "Mirabelle Doiron",
    date: "2023-10-22",
    excerpt: "Before social media, there were flyers. Hand-drawn, photocopied, wheat-pasted on every telephone pole in town. The punk flyer is folk art, advertising, and political statement rolled into one.",
    readTime: "5 min",
    category: "Culture",
    tags: ["Flyers", "Art", "Visual Culture"],
    references: [{ label: "Wikipedia (Concert Poster)", url: "https://en.wikipedia.org/wiki/Concert_poster" }],
  },
  {
    id: "8",
    title: "From Hardcore to Post-Hardcore: The DC Evolution",
    author: "Mirabelle Doiron",
    date: "2023-09-15",
    excerpt: "Washington D.C. didn't just create hardcore — it destroyed it and rebuilt it into something new. Trace the line from Minor Threat to Fugazi to see how punk's most principled scene kept reinventing itself.",
    readTime: "8 min",
    category: "Music",
    tags: ["DC", "Hardcore", "Post-Hardcore", "Fugazi"],
    references: [{ label: "Wikipedia (Dischord)", url: "https://en.wikipedia.org/wiki/Dischord_Records" }, { label: "Wikipedia (Post-Hardcore)", url: "https://en.wikipedia.org/wiki/Post-hardcore" }],
  },
];
