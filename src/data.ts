import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Eric Wong-Liu",
  role: "Software Engineer",
  introduction: "Software Engineer, Gameplay Programmer",
  description: "",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/chiferito",
    itchIO: "https://chiferito.itch.io/",
    linkedIn: "https://www.linkedin.com/in/eric-wong-liu-b98b81198/",
  }
};

export const games: Game[] = [
  {
    name: "Runes vs Robots",
    description: "Use your runes and towers to stop the robots from invading. Dynamic pathfinding allows players to manipulate the enemies by using towers to block thier path.",
    genres: ["3D", "Tower Defense", "Strategy"],
    platforms: [Platform.Windows, Platform.Mac, Platform.Web],
    engine: [GameEngine.Unity, GameEngine.CSharp],
    links: [
      { source: LinkImageSource.ItchIo, url: "https://chiferito.itch.io/project-tower" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/xtQojBZCvm4?si=7vMTCQ6g-BOpCqXJ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/RR1.jpg", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/RR2.jpg", type: MediaType.Image },
    ],
  },
  {
    name: "Frostblade Saga",
    description: "You can freeze enemy projectiles and use them as platforms to reach further. A big threat awaits you at the end of the journey.",
    genres: ["2D", "Platformer", "Combat"],
    platforms: [Platform.Windows, Platform.Web],
    engine: [GameEngine.Unity, GameEngine.CSharp],
    links: [
      { source: LinkImageSource.ItchIo, url: "https://kraftsman.itch.io/frostblade-sagaz" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/wLbphRjgVas?si=NnmZ2CEfiWt5Zdjg", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/FB1.jpg", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/FB2.jpg", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/FB3.jpg", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/FB4.jpg", type: MediaType.Image },
    ],
  },
  {
    name: "Treasure Gunner",
    description: "Treasure Gunner is a top down bullet hell roguelike game where you shoot monsters to earn coins, and use coins to buy guns, to shoot monsters and earn coins.\n",
    genres: ["2D", "Roguelike","Bullet-hell"],
    platforms: [Platform.Windows],
    engine: [GameEngine.CPP],
    links: [
      { source: LinkImageSource.ItchIo, url: "https://zenith08.itch.io/treasure-gunner" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/W918TmUKH9w?si=B_UGmkBRkxt7wcZG", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/TG2.jpg", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/TG3.jpg", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/TG1.jpg", type: MediaType.Image },
    ],
  },
  {
    name: "Poker Counter",
    description: "A mobile app designed for personal use at casual poker nights. Helps the players keep track of the scores and calculate the final results.",
    genres: ["Utility"],
    platforms: [Platform.iOS],
    engine: [GameEngine.Swift],
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/chiferito/PokerCounterV2" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/PK1.jpeg", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/PK2.jpeg", type: MediaType.Image },
    ],
  }
];