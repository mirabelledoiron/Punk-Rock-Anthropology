export interface Source {
  title: string;
  type: string;
  author: string;
  url: string;
}

export interface SourceCategory {
  name: string;
  sources: Source[];
}

export const sourceCategories: SourceCategory[] = [
  {
    name: "Academic & Historical",
    sources: [
      { title: "England's Dreaming: Anarchy, Sex Pistols, Punk Rock", type: "Book", author: "Jon Savage", url: "https://www.goodreads.com/book/show/14292.England_s_Dreaming" },
      { title: "American Hardcore: A Tribal History", type: "Book", author: "Steven Blush", url: "https://www.feralhouse.com/american-hardcore/" },
      { title: "Our Band Could Be Your Life", type: "Book", author: "Michael Azerrad", url: "https://www.hachettebookgroup.com/titles/michael-azerrad/our-band-could-be-your-life/9780316247184/" },
      { title: "We Got the Neutron Bomb: The Untold Story of L.A. Punk", type: "Book", author: "Marc Spitz & Brendan Mullen", url: "https://www.penguinrandomhouse.com/books/290832/we-got-the-neutron-bomb-by-brendan-mullen-and-marc-spitz/" },
      { title: "Please Kill Me: The Uncensored Oral History of Punk", type: "Book", author: "Legs McNeil & Gillian McCain", url: "https://pleasekillme.com/please-kill-uncensored-oral-history-punk-book/" },
      { title: "Punk: An Aesthetic", type: "Book", author: "Johan Kugelberg & Jon Savage", url: "https://www.rizzoliusa.com/book/9780847858279/" },
    ],
  },
  {
    name: "Academic Resources",
    sources: [
      { title: "Punk Rock Subgenres", type: "Reference", author: "Wikipedia", url: "https://en.wikipedia.org/wiki/Punk_rock_subgenres" },
      { title: "DIY Culture and Self-Organization", type: "Academic", author: "Various Authors", url: "https://scholar.google.com/scholar?q=punk+rock+diy+culture" },
      { title: "The Sociology of Punk", type: "Academic", author: "Various Authors", url: "https://www.jstor.org/topic/punk-rock/" },
      { title: "Punk Rock Glossary", type: "Reference", author: "JSTOR Daily", url: "https://daily.jstor.org/punk-rock-glossary/" },
      { title: "Punk Music and Culture", type: "Reference", author: "Britannica", url: "https://www.britannica.com/art/punk" },
    ],
  },
  {
    name: "Documentaries & Films",
    sources: [
      { title: "The Decline of Western Civilization", type: "Film", author: "Penelope Spheeris", url: "https://en.wikipedia.org/wiki/The_Decline_of_Western_Civilization" },
      { title: "The Punk Singer", type: "Documentary", author: "Sini Anderson", url: "https://www.thepunksinger.com/" },
      { title: "American Hardcore", type: "Documentary", author: "Paul Rachman", url: "https://www.sonypictures.com/movies/americanhardcore" },
      { title: "New York Doll", type: "Documentary", author: "Greg Whiteley", url: "https://www.imdb.com/title/tt0436629/" },
      { title: "Punk: Attitude", type: "Documentary", author: "Don Letts", url: "https://www.imdb.com/title/tt0446765/" },
    ],
  },
  {
    name: "Label Archives & Discographies",
    sources: [
      { title: "Alternative Tentacles", type: "Label Archive", author: "Jello Biafra", url: "https://www.alternativetentacles.com/" },
      { title: "Dischord Records", type: "Label Archive", author: "Ian MacKaye & Jeff Nelson", url: "https://dischord.com/" },
      { title: "SST Records Discography", type: "Label Archive", author: "Greg Ginn", url: "https://www.sstrecords.com/" },
      { title: "Fat Wreck Chords", type: "Label Archive", author: "Fat Mike", url: "https://www.fatwreck.com/" },
      { title: "Epitaph Records", type: "Label Archive", author: "Brett Gurewitz", url: "https://www.epitaph.com/" },
    ],
  },
  {
    name: "Music & Cultural References",
    sources: [
      { title: "The Philosophy of Punk", type: "Book", author: "Craig O'Hara", url: "https://www.goodreads.com/book/show/186592.The_Philosophy_of_Punk" },
      { title: "Punk Rock: An Oral History", type: "Book", author: "John Robb", url: "https://www.goodreads.com/book/show/1249900.Punk_Rock" },
      { title: "Spray Paint the Walls: The Story of Black Flag", type: "Book", author: "Stevie Chick", url: "https://www.goodreads.com/book/show/6567163-spray-paint-the-walls" },
      { title: "Gimme Something Better: The Profound, Progressive, and Occasionally Pointless History of Bay Area Punk", type: "Book", author: "Jack Boulware & Silke Tudor", url: "https://www.penguinrandomhouse.com/books/301054/gimme-something-better-by-jack-boulware-and-silke-tudor/" },
      { title: "Babylon's Burning: From Punk to Grunge", type: "Book", author: "Clinton Heylin", url: "https://www.goodreads.com/book/show/1249899.Babylon_s_Burning" },
    ],
  },
  {
    name: "Online Archives & Databases",
    sources: [
      { title: "The New York Public Library Punk Collection", type: "Archive", author: "NYPL", url: "https://www.nypl.org/" },
      { title: "Kill Your Pet Puppy", type: "Archive", author: "Multiple Contributors", url: "http://www.killyourpetpuppy.co.uk/" },
      { title: "Trust Fanzine Archive", type: "Archive", author: "Trust Collective", url: "https://archive.org/details/trustfanzine" },
      { title: "Punk77", type: "Archive", author: "Multiple Contributors", url: "https://punk77.co.uk/" },
      { title: "924 Gilman Archive", type: "Archive", author: "924 Gilman Street", url: "https://www.924gilman.org/" },
    ],
  },
  {
    name: "Oral History Collections",
    sources: [
      { title: "Rock and Roll Hall of Fame Oral History Project", type: "Archive", author: "RRHOF", url: "https://www.rockhall.com/oral-history-project" },
      { title: "The Museum of Modern Art Archives", type: "Archive", author: "MoMA", url: "https://www.moma.org/research-and-learning/research-resources/archives/" },
      { title: "Punk Oral History Project", type: "Archive", author: "Various Institutions", url: "https://oralhistory.org/" },
    ],
  },
  {
    name: "Photography & Visual Archives",
    sources: [
      { title: "Mick Rock Photography Archive", type: "Photography", author: "Mick Rock", url: "https://mickrock.com/" },
      { title: "Glen E. Friedman Archive", type: "Photography", author: "Glen E. Friedman", url: "https://www.burningflags.com/" },
      { title: "Edward Colver Photography", type: "Photography", author: "Edward Colver", url: "https://edwardcolver.com/" },
      { title: "Jenny Lens Archive", type: "Photography", author: "Jenny Lens", url: "https://jennylens.com/" },
    ],
  },
  {
    name: "Venue & Scene Documentation",
    sources: [
      { title: "Stiff Little Fingers: The Harp Bar", type: "Archive", author: "Various Contributors", url: "https://en.wikipedia.org/wiki/Harp_Bar" },
      { title: "100 Club History", type: "Archive", author: "100 Club", url: "https://www.the100club.co.uk/" },
      { title: "924 Gilman Street History", type: "Archive", author: "924 Gilman", url: "https://www.924gilman.org/history" },
      { title: "The Masque: LA Punk's Ground Zero", type: "Archive", author: "Various Contributors", url: "https://en.wikipedia.org/wiki/The_Masque" },
      { title: "CBGB Archive", type: "Archive", author: "CBGB & OMFUG", url: "https://www.cbgb.com/" },
    ],
  },
  {
    name: "Zines & Publications",
    sources: [
      { title: "Flipside", type: "Zine", author: "Al Flipside", url: "https://en.wikipedia.org/wiki/Flipside_(fanzine)" },
      { title: "Punk Magazine Archive", type: "Zine", author: "John Holmstrom & Legs McNeil", url: "https://punkmagazine.com/" },
      { title: "Search & Destroy", type: "Zine", author: "V. Vale", url: "https://researchpubs.com/" },
      { title: "Profane Existence", type: "Zine", author: "Profane Existence Collective", url: "https://profaneexistence.com/" },
      { title: "Maximum Rocknroll", type: "Zine", author: "MRR Collective", url: "https://www.maximumrocknroll.com/" },
    ],
  },
];
