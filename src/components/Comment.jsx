import { Trash, ThumbsUp } from "@phosphor-icons/react";
import styles from "./comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/mariaemf.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maria Freitas</strong>
              <time title="20 de março as 14:19" dateTime="2023/05/11 14:17">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom, parabéns 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
