import { Trash, ThumbsUp } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import styles from "./comment.module.css";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/mariaemf.png" />

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
              <Trash size={24} />
            </button>
          </header>
          {/*passando a desestruturacao para aparecer apenas o 
          content, nao 
          o props.content */}
          <p>{content}</p>
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
