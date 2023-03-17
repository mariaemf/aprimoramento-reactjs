import React from "react";
import styles from "./sidebar.module.css";

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        {/*Endereço de imagem copiado e colado com algumas alteracaoes no tamanho total e qualidade da mesma*/}
        <img
          classname={styles.cover}
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&w=500&q=50"
        />
        {/* Essa div será o perfil do usuário */}
        <div className={styles.profile}>
          <strong>Maria Freitas</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          {/*O botao esta sendo usando como link 
          pq aparentemente nao parece um botao (pelo designer) 
          demonstrando que ao clikar o usuario sera 
          redirecionado para outra sessao/pag*/}
          <a href="#">Editar seu perfil</a>
        </footer>
      </aside>
    </>
  );
}
