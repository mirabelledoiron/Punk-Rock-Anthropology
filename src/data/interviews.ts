export interface InterviewReference {
  label: string;
  url: string;
}

export interface Interview {
  id: string;
  subject: string;
  role: string;
  band?: string;
  year: number;
  excerpt: string;
  topics: string[];
  references?: InterviewReference[];
}

export const interviews: Interview[] = [
  {
    id: "1",
    subject: "Henry Rollins",
    role: "Vocalist",
    band: "Black Flag / Rollins Band",
    year: 2019,
    excerpt: "Punk was never about the music alone. It was about creating a space where anyone could participate, where the barrier to entry was zero. You didn't need talent — you needed something to say.",
    topics: ["DIY Ethics", "Hardcore Origins", "Touring"],
    references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Henry_Rollins" }],
  },
  {
    id: "2",
    subject: "Kathleen Hanna",
    role: "Vocalist / Activist",
    band: "Bikini Kill / Le Tigre",
    year: 2020,
    excerpt: "Riot Grrrl wasn't just a music movement — it was about reclaiming space in a scene that had become hostile to women. We made zines, we booked shows, we created our own infrastructure.",
    topics: ["Riot Grrrl", "Feminism", "Zine Culture"],
    references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kathleen_Hanna" }],
  },
  {
    id: "3",
    subject: "Ian MacKaye",
    role: "Vocalist / Label Owner",
    band: "Minor Threat / Fugazi",
    year: 2018,
    excerpt: "Dischord was never meant to be a business. It was a way to document what was happening in our community. Every record is a snapshot of a moment in time.",
    topics: ["Straight Edge", "Dischord Records", "DIY Labels"],
    references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ian_MacKaye" }, { label: "Dischord", url: "https://www.dischord.com/" }],
  },
  {
    id: "4",
    subject: "Jello Biafra",
    role: "Vocalist / Spoken Word",
    band: "Dead Kennedys",
    year: 2021,
    excerpt: "Punk should make you uncomfortable. If everyone agrees with you, you're not pushing hard enough. The best punk challenges its own audience.",
    topics: ["Political Punk", "Censorship", "Alternative Tentacles"],
    references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jello_Biafra" }, { label: "Alternative Tentacles", url: "https://www.alternativetentacles.com/" }],
  },
  {
    id: "5",
    subject: "Poly Styrene",
    role: "Vocalist",
    band: "X-Ray Spex",
    year: 2008,
    excerpt: "I never wanted to be a sex symbol. I wanted to be the anti-star. Punk gave me permission to be ugly, to be loud, to take up space as a mixed-race woman in 1977 London.",
    topics: ["Identity", "Women in Punk", "UK Scene"],
    references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Poly_Styrene" }],
  },
  {
    id: "6",
    subject: "Greg Graffin",
    role: "Vocalist / Professor",
    band: "Bad Religion",
    year: 2022,
    excerpt: "There's no contradiction between being a punk musician and a PhD. Punk is about questioning authority — and that's exactly what science does.",
    topics: ["Punk & Academia", "Evolution", "Melodic Hardcore"],
    references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Greg_Graffin" }],
  },
  {
    id: "7",
    subject: "Marky Ramone",
    role: "Drummer",
    band: "Ramones",
    year: 2017,
    excerpt: "CBGB smelled terrible. The bathrooms were a biohazard. The stage was tiny. The PA was awful. And it was the most important room in rock and roll history.",
    topics: ["CBGB", "Ramones", "New York Scene"],
    references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Marky_Ramone" }],
  },
  {
    id: "8",
    subject: "HR (Paul Hudson)",
    role: "Vocalist",
    band: "Bad Brains",
    year: 2016,
    excerpt: "We brought PMA — Positive Mental Attitude — to hardcore. People thought punk had to be negative, destructive. We showed it could be about building something up.",
    topics: ["Bad Brains", "PMA", "Reggae & Punk"],
    references: [{ label: "Wikipedia", url: "https://en.wikipedia.org/wiki/H.R._(singer)" }],
  },
];
