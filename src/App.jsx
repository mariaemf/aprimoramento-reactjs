/*jsx = javascript + xml = xml = arquivo q contem html dentro dele */
import { Sidebar } from "./components/Sidebar";
import { Fragment } from "react";
import { Header } from "./components/Header";
import { Post } from "../src/components/Post";

import styles from "./App.module.css";
import "./global.css";

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
          <Post />
          <Post />
        </main>
      </div>
    </Fragment>
  );
}

export default App;
