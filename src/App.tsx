import { Header } from './componentes/Header';
import { Post, PostType } from './componentes/Post';
import { Sidebar } from './componentes/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/leosgarbi.png',
      name: 'Léo Sgarbi',
      role: 'Dev',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctore' },
    ],
    publishedAt: new Date(),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/isaacviannadev.png',
      name: 'Isaac Viana',
      role: 'Desenvolvedor web',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ea totam eaque earum saepe ex!',
      },
      { type: 'link', content: 'jane.design/doctore' },
    ],
    publishedAt: new Date('2024-04-15 22:15:22'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
