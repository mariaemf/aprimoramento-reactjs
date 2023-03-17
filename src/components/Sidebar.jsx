import React from "react";
import styles from "./sidebar.module.css";
import { PencilSimpleLine } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/*Endereço de imagem copiado e colado com algumas alteracaoes no tamanho total e qualidade da mesma*/}
      <img
        classname={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      {/* Essa div será o perfil do usuário */}
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/mariaemf.png" />

        <strong>Maria Freitas</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        {/*O botao esta sendo usando como link 
          pq aparentemente nao parece um botao (pelo designer) 
          demonstrando que ao clikar o usuario sera 
          redirecionado para outra sessao/pag*/}
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
