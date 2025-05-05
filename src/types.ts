export enum LinkImageSource {
  Github = "/images/logos/github.png",
  ItchIo = "/images/logos/itch.io.png",
}

export enum Platform {
  Windows = "Windows",
  Mac = "Mac",
  Linux = "Linux",
  iOS = "iOS",
  Android = "Android",
  Web = "Web"
}

export enum GameEngine {
  Unity = "Unity",
  Unreal = "Unreal",
  CSharp = "C#",
  CPP = "C++",
  Swift = "Swift"
}

export enum MediaType {
  Image = "image",
  YouTube = "youtube",
  MP4 = "mp4",
}

export interface MediaItem {
  source: string;
  type: MediaType;
}

export interface AboutMeData {
  name: string;
  role: string;
  description: string;
  introduction: string;
  image: string;
  cvUri: string;
  links: {
    github: string;
    itchIO: string;
    linkedIn: string;
  };
}

export interface Game {
  name: string;
  description: string;
  genres: string[];
  source?: { name: string; url: string };
  links: { source: LinkImageSource; url: string }[];
  media: MediaItem[];
  platforms: Platform[];
  engine: GameEngine[];
}