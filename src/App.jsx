/*jsx = javascript + xml = xml = arquivo q contem html dentro dele */
import { Fragment } from "react";
import { Header } from "./components/Header";
import { Post } from "./Post";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

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
          {" "}
          <Post
            author="Maria Freitas"
            content="estou estudando para aprimorar meu desenvolvimento"
          />
          <Post author="Sérgio Luiz" content="Nova atualização de emprego" />
        </main>
      </div>
    </Fragment>
  );
}

export default App;
