// ═══════════════════════════════════════════════════════════════════════
//  src/data/anime.ts
//  Single source of truth for Raj's Watched List.
//
//  HOW TO ADD A NEW ANIME:
//    1. Add one entry to animeList below.
//    2. Set type to "Series" or "Movie".
//    3. Save. Every count, list, and modal on the site updates itself.
//
//  HOW TO REMOVE AN ANIME:
//    1. Delete its entry. Everything recalculates.
//
//  Nothing else needs to be touched.
// ═══════════════════════════════════════════════════════════════════════

export type AnimeType = "Series" | "Movie";

export interface Anime {
  title: string;
  type: AnimeType;
}

export const animeList: Anime[] = [
  { title: "5 Centimeters per Second",                                                    type: "Movie"  },
  { title: "A Condition Called Love",                                                     type: "Series" },
  { title: "A Silent Voice",                                                              type: "Movie"  },
  { title: "Akame ga Kill!",                                                              type: "Series" },
  { title: "Alya Sometimes Hides Her Feelings in Russian",                               type: "Series" },
  { title: "An Archdemon's Dilemma: How to Love Your Elf Bride",                        type: "Series" },
  { title: "Battle Through the Heavens",                                                  type: "Series" },
  { title: "Cautious Hero: The Hero Is Overpowered but Overly Cautious",                type: "Series" },
  { title: "Chainsaw Man",                                                                type: "Series" },
  { title: "Classroom of the Elite",                                                      type: "Series" },
  { title: "Clevatess",                                                                   type: "Series" },
  { title: "Dandadan",                                                                    type: "Series" },
  { title: "Darling in the Franxx",                                                       type: "Series" },
  { title: "Days with My Stepsister",                                                     type: "Series" },
  { title: "Demon Slayer: Kimetsu no Yaiba",                                              type: "Series" },
  { title: "Dr. Stone",                                                                   type: "Series" },
  { title: "From Me to You",                                                              type: "Series" },
  { title: "Good Bye, Dragon Life",                                                       type: "Series" },
  { title: "Grave of the Fireflies",                                                      type: "Movie"  },
  { title: "Handyman Saitou in Another World",                                            type: "Series" },
  { title: "Hokkaido Gals Are Super Adorable!",                                           type: "Series" },
  { title: "Horimiya",                                                                    type: "Series" },
  { title: "I Am Getting Married to a Girl I Hate in My Class",                          type: "Series" },
  { title: "I Got a Cheat Skill in Another World and Became Unrivaled in the Real World, Too", type: "Series" },
  { title: "I Want to Eat Your Pancreas",                                                 type: "Movie"  },
  { title: "Kaiju No. 8",                                                                 type: "Series" },
  { title: "KonoSuba: God's Blessing on This Wonderful World!",                          type: "Series" },
  { title: "Lord of Mysteries",                                                           type: "Series" },
  { title: "Makeine: Too Many Losing Heroines!",                                          type: "Series" },
  { title: "Mashle: Magic and Muscles",                                                   type: "Series" },
  { title: "More Than a Married Couple, but Not Lovers.",                                 type: "Series" },
  { title: "Mushoku Tensei: Jobless Reincarnation",                                       type: "Series" },
  { title: "My Dress-Up Darling",                                                         type: "Series" },
  { title: "My Happy Marriage",                                                           type: "Series" },
  { title: "My Love Story with Yamada-kun at Lv999",                                     type: "Series" },
  { title: "My Oni Girl",                                                                 type: "Movie"  },
  { title: "My Status as an Assassin Obviously Exceeds the Hero's",                      type: "Series" },
  { title: "My Tiny Senpai",                                                             type: "Series" },
  { title: "Naruto",                                                                      type: "Series" },
  { title: "Re:Zero − Starting Life in Another World",                                    type: "Series" },
  { title: "ReLIFE",                                                                      type: "Series" },
  { title: "Rent-A-Girlfriend",                                                           type: "Series" },
  { title: "Sentenced to Be a Hero",                                                      type: "Series" },
  { title: "Shangri-La Frontier",                                                         type: "Series" },
  { title: "Shikimori's Not Just a Cutie",                                                type: "Series" },
  { title: "Solo Leveling",                                                               type: "Series" },
  { title: "Spy × Family",                                                                type: "Series" },
  { title: "Tensura",                                                                     type: "Series" },
  { title: "The Angel Next Door Spoils Me Rotten",                                        type: "Series" },
  { title: "The Apothecary Diaries",                                                      type: "Series" },
  { title: "The Case Study of Vanitas",                                                   type: "Series" },
  { title: "The Garden of Words",                                                         type: "Movie"  },
  { title: "The Reincarnation of the Strongest Exorcist in Another World",                type: "Series" },
  { title: "The Shiunji Family Children",                                                  type: "Series" },
  { title: "The Tunnel to Summer, the Exit of Goodbyes",                                  type: "Movie"  },
  { title: "The Water Magician",                                                           type: "Series" },
  { title: "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat", type: "Series"  },
  { title: "The Wrong Way to Use Healing Magic",                                           type: "Series" },
  { title: "Tomo-chan Is a Girl!",                                                         type: "Series" },
  { title: "Tower of God",                                                                 type: "Series" },
  { title: "Trapped in a Dating Sim: The World of Otome Games Is Tough for Mobs",        type: "Series" },
  { title: "Tsukimichi: Moonlit Fantasy",                                                  type: "Series" },
  { title: "Weathering with You",                                                          type: "Movie"  },
  { title: "Wind Breaker",                                                                 type: "Series" },
  { title: "You Are Ms. Servant",                                                          type: "Series" },
  { title: "Your Name",                                                                    type: "Movie"  },
  { title: "Your Lie in April",                                                            type: "Series" },
  { title: "Zom 100: Bucket List of the Dead",                                             type: "Series" },
];

// ─── Derived exports ───────────────────────────────────────────────────
// Import these wherever you need a ready-made list or count.
// They update automatically whenever animeList changes.

const sortByTitle = (a: Anime, b: Anime) => a.title.localeCompare(b.title);

/** Every title, A–Z */
export const allTitles: string[] = [...animeList]
  .sort(sortByTitle)
  .map(a => a.title);

/** Movie titles only, A–Z */
export const movieTitles: string[] = animeList
  .filter(a => a.type === "Movie")
  .sort(sortByTitle)
  .map(a => a.title);

/** Series titles only, A–Z */
export const seriesTitles: string[] = animeList
  .filter(a => a.type === "Series")
  .sort(sortByTitle)
  .map(a => a.title);

/** Counts — never hardcode these anywhere else */
export const TOTAL_COUNT  = animeList.length;
export const MOVIE_COUNT  = movieTitles.length;
export const SERIES_COUNT = seriesTitles.length;
