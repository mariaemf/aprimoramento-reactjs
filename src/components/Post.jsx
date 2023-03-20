import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src="https://github.com/mariaemf.png"
            />
            {/*colocado + uma div ao redor 
            para facilitar na estilização do nome e cargo */}
            <div className={styles.authorInfo}>
              <strong>Maria Freitas</strong>
              <span>Web Developer</span>
            </div>
          </div>
          {/*esse title dentro do time é para quando
          o usuário passar o mouse por cima 
          demonstrar a hora exata em que o post/publicacao 
          foi postado */}
          <time title="20 de março as 14:19" dateTime="2023/05/11 14:17">
            Publicado há 1 hora
          </time>
        </header>
        <div className={styles.content}>
          <p>Fala galeraa 👋 </p>
          <p></p>Acabei de subir mais um projeto no meu portifa. É um projeto
          que fiz
          <p>
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            👉 <a href="">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="">#rocketseat</a> <a href="">#nlw</a> <a>#novoprojeto </a>{" "}
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe o seu feedback</strong>
          {/*textarea =>  controle de edição para uma caixa de texto,
           útil quando você quer permitir ao usuário informar um texto
            extenso em formato livre, como um 
            comentário ou formulário de retorno.
            placeholder é uma sugestao 
            de como pode ser usado p o usuario */}
          <textarea placeholder="Deixe um comentário" />
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </>
  );
}
