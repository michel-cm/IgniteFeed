import { Post } from "../types/post";

export const getPosts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/michel-cm.png",
      name: "Michel Corrêa Martins",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. 🚀",
      },
      { type: "link", content: "github.com/michel-cm" },
    ],
    publishedAt: new Date("2022/08/25 15:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. 🚀",
      },
      { type: "link", content: "github.com/diego3g" },
    ],
    publishedAt: new Date("2022/09/25 17:30:00"),
  },
];
