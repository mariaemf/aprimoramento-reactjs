/*jsx = javascript + xml = xml = arquivo q contem html dentro dele */
import { Sidebar } from "./components/Sidebar";
import { Fragment } from "react";
import { Header } from "./components/Header";
import { Post } from "../src/components/Post";

import styles from "./App.module.css";
import "./global.css";

{
  /* cada posicao dentro deste array é um obj 
-> cada post tem seu id unico
-> author é um obj e dentro dele tem todas as inf
que necessitamos 
-> content esta o conteudo do post 
-> cada linha do post esta designada como uma posicao no array
e as mesmas sao um objeto, que dentro deles tem um type e um content que e
é conteudo
-> publisheAt -> é a data de publicacao do post 
*/
}

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/mariaemf.png",
      name: "Maria Freitas",
      role: "Web development",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-03-21 19:35:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/mateussp97.png",
      name: "Mateus Souza",
      role: "software engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-03-21 19:20:00"),
  },
];

export function App() {
  return (
    <Fragment>
      <Header />
      <div className={styles.wrapper}>
        {/*a tag aside e usada para definir conteudo lateral que e relaionado ao conteudo principal d apagina, mas nao faz parde dele*/}
        <Sidebar />
        {/*tag main e usada para definir o conteudo
        principal da pagina -> normalmente sendo o mais 
        importante apenas teste de commit */}
        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </Fragment>
  );
}

export default App;
