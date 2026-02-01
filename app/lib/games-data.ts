import { Game } from "./types";

export const games: Game[] = [
  {
    id: 1,
    name: "The Witcher 3: Wild Hunt",
    slug: "the-witcher-3-wild-hunt",
    summary:
      "The Witcher 3: Wild Hunt is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.",
    storyline:
      "You are Geralt of Rivia, a monster slayer for hire. As a witcher, you have the power to hunt down dangerous creatures lurking in the world. Your current contract? Track down Ciri — the Child of Prophecy, a key to saving or destroying the world.",
    rating: 93,
    ratingCount: 8420,
    releaseDate: "2015-05-19",
    genres: ["Role-playing (RPG)", "Adventure"],
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    coverUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.webp",
    gameMode: ["Single player"],
    playerPerspective: "Third person",
    themes: ["Fantasy", "Open world"],
  },
  {
    id: 2,
    name: "Elden Ring",
    slug: "elden-ring",
    summary:
      "Elden Ring is an action RPG developed by FromSoftware and published by Bandai Namco Entertainment, created in collaboration with fantasy novelist George R. R. Martin.",
    storyline:
      "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    rating: 95,
    ratingCount: 12050,
    releaseDate: "2022-02-25",
    genres: ["Role-playing (RPG)", "Adventure"],
    platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S"],
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    coverUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.webp",
    gameMode: ["Single player", "Multiplayer", "Co-operative"],
    playerPerspective: "Third person",
    themes: ["Fantasy", "Open world", "Souls-like"],
  },
  {
    id: 3,
    name: "Hollow Knight",
    slug: "hollow-knight",
    summary:
      "Hollow Knight is a 2D Metroidvania action-adventure game developed and published by Team Cherry. The player controls the Knight, a nameless insectoid warrior, who explores Hallownest.",
    rating: 90,
    ratingCount: 4230,
    releaseDate: "2017-02-24",
    genres: ["Platform", "Adventure", "Indie"],
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    developer: "Team Cherry",
    publisher: "Team Cherry",
    coverUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rgi.webp",
    gameMode: ["Single player"],
    playerPerspective: "Side view",
    themes: ["Fantasy", "Metroidvania"],
  },
  {
    id: 4,
    name: "Red Dead Redemption 2",
    slug: "red-dead-redemption-2",
    summary:
      "Red Dead Redemption 2 is a Western-themed action-adventure game. Developed by Rockstar Games, it is the prequel to 2010's Red Dead Redemption.",
    storyline:
      "America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and bounty hunters massing on their heels, the gang must rob, steal and fight their way across America.",
    rating: 92,
    ratingCount: 9100,
    releaseDate: "2018-10-26",
    genres: ["Shooter", "Adventure"],
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    coverUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.webp",
    gameMode: ["Single player", "Multiplayer"],
    playerPerspective: "Third person",
    themes: ["Western", "Open world"],
  },
  {
    id: 5,
    name: "Hades",
    slug: "hades",
    summary:
      "Hades is a rogue-like dungeon crawler developed by Supergiant Games. Defy the god of the dead as you hack and slash out of the Underworld of Greek myth.",
    rating: 91,
    ratingCount: 5640,
    releaseDate: "2020-09-17",
    genres: ["Role-playing (RPG)", "Indie", "Hack and slash"],
    platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X|S", "Nintendo Switch"],
    developer: "Supergiant Games",
    publisher: "Supergiant Games",
    coverUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r0o.webp",
    gameMode: ["Single player"],
    playerPerspective: "Isometric",
    themes: ["Fantasy", "Roguelike"],
  },
  {
    id: 6,
    name: "God of War Ragnarök",
    slug: "god-of-war-ragnarok",
    summary:
      "God of War Ragnarök is an action-adventure game developed by Santa Monica Studio. Join Kratos and Atreus on a mythic journey for answers before Ragnarök arrives.",
    storyline:
      "Kratos and Atreus must travel to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world.",
    rating: 94,
    ratingCount: 7800,
    releaseDate: "2022-11-09",
    genres: ["Action", "Adventure"],
    platforms: ["PlayStation 4", "PlayStation 5", "PC"],
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    coverUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.webp",
    gameMode: ["Single player"],
    playerPerspective: "Third person",
    themes: ["Mythology", "Action"],
  },
  {
    id: 7,
    name: "Celeste",
    slug: "celeste",
    summary:
      "Celeste is a platformer about climbing a mountain, from the creators of TowerFall. Help Madeline survive her inner demons on her journey to the top of Celeste Mountain.",
    rating: 89,
    ratingCount: 3200,
    releaseDate: "2018-01-25",
    genres: ["Platform", "Indie", "Adventure"],
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    developer: "Maddy Makes Games",
    publisher: "Maddy Makes Games",
    coverUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3byy.webp",
    gameMode: ["Single player"],
    playerPerspective: "Side view",
    themes: ["Drama"],
  },
  {
    id: 8,
    name: "Baldur's Gate 3",
    slug: "baldurs-gate-3",
    summary:
      "Baldur's Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal.",
    storyline:
      "You are infected with a parasitic tadpole that threatens to transform you into a mind flayer. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.",
    rating: 96,
    ratingCount: 15200,
    releaseDate: "2023-08-03",
    genres: ["Role-playing (RPG)", "Strategy", "Turn-based"],
    platforms: ["PC", "PlayStation 5", "Xbox Series X|S"],
    developer: "Larian Studios",
    publisher: "Larian Studios",
    coverUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co670h.webp",
    gameMode: ["Single player", "Multiplayer", "Co-operative"],
    playerPerspective: "Isometric",
    themes: ["Fantasy", "Dungeons & Dragons"],
  },
  {
    id: 9,
    name: "Stardew Valley",
    slug: "stardew-valley",
    summary:
      "Stardew Valley is an open-ended country-life RPG. You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools, you set out to begin your new life.",
    rating: 88,
    ratingCount: 6100,
    releaseDate: "2016-02-26",
    genres: ["Role-playing (RPG)", "Simulation", "Indie"],
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "iOS", "Android"],
    developer: "ConcernedApe",
    publisher: "ConcernedApe",
    coverUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/xrpmydnu9rpxvxfjkiu7.webp",
    gameMode: ["Single player", "Multiplayer", "Co-operative"],
    playerPerspective: "Bird view",
    themes: ["Farming", "Life simulation"],
  },
  {
    id: 10,
    name: "Sekiro: Shadows Die Twice",
    slug: "sekiro-shadows-die-twice",
    summary:
      "Sekiro: Shadows Die Twice is an action-adventure game developed by FromSoftware. Set in a reimagined late 1500s Sengoku period Japan, the player takes on the role of a shinobi known as Wolf.",
    storyline:
      "In Sekiro: Shadows Die Twice you are the 'one-armed wolf', a disgraced and disfigured warrior rescued from the brink of death. Bound to protect a young lord who is the descendant of an ancient bloodline, you become the target of many vicious enemies.",
    rating: 90,
    ratingCount: 4800,
    releaseDate: "2019-03-22",
    genres: ["Action", "Adventure"],
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    developer: "FromSoftware",
    publisher: "Activision",
    coverUrl: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rba.webp",
    gameMode: ["Single player"],
    playerPerspective: "Third person",
    themes: ["Historical", "Souls-like"],
  },
];

export function getGameById(id: number): Game | undefined {
  return games.find((game) => game.id === id);
}

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}

export function searchGames(query: string): Game[] {
  const lowerQuery = query.toLowerCase();
  return games.filter(
    (game) =>
      game.name.toLowerCase().includes(lowerQuery) ||
      game.developer.toLowerCase().includes(lowerQuery) ||
      game.publisher.toLowerCase().includes(lowerQuery) ||
      game.genres.some((genre) => genre.toLowerCase().includes(lowerQuery))
  );
}
