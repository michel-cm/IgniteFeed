import { Author } from "./author";

export interface Post {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Content[];
  publishedAt: Date;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}
