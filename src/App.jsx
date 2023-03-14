/*jsx = javascript + xml = xml = arquivo q contem html dentro dele */
import { Fragment } from "react";
import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <Fragment>
      <Header />

      <Post
        author="Maria Freitas"
        content="estou estudando para aprimorar meu desenvolvimento"
      />
      <Post author="Sérgio Luiz" content="Nova atualização de emprego" />
    </Fragment>
  );
}

export default App;
