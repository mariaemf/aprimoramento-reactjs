/*jsx = javascript + xml = xml = arquivo q contem html dentro dele */
import { Fragment } from "react";
import { Post } from "./Post";

export function App() {
  return (
    <>
      <Post
        author="Maria Freitas"
        content="estou estudando para aprimorar meu desenvolvimento"
      />
      <Post author="Sérgio Luiz" content="Nova atualização de emprego" />
    </>
  );
}

export default App;
