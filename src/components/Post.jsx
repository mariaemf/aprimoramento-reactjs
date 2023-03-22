import { format, formatDistanceToNow } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

//export function Post(props)
//-> poderiamos deixar dessa maneira, but
// é passado a desestruturação pra evitar a repetição de props
//em todo momento -> {props.author.avatarUrl}

export function Post({ author, publishedAt, content }) {
  //passando como primeiro parametro o publishedAt e o 2° é o formato
  //esse formato é de acordo com a documentacao da lib instalada
  //alem disso foi passado aspas duplas por volta do formato
  //e dentro das mesmas contem letras com aspas simples
  //isso para deixarmos 'escapar' as letras e q a lib
  //nao entenda que deve formatar a mesma :)

  const [comments, setComments] = useState([1, 2]);

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  //essa var vai armazenar a data de publicacao do post relativa ao
  //momento atual e iremos usar outra funcao do date-fns que se chama
  //formatDistanceToNow
  //a formatDistanceToNow recebe uma data (no caso a publishedAt)
  //onde a mesma ira comparar essa data com o agora
  //o publishedDateRelativeToNow sera usado dentro do time

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR, //para passar o local
    addSuffix: true, // para gerar e prefixo de quanto tempo foi publicado
  });

  function handleCreateNewComment() {
    event.preventDefault();
    /*copiando todos os comentarios ja existente usando o
spread (ele le o valor da variavel e copia os mesmos)
  */
    setComments([...comments, comments.length + 1]);
    /*comments.length pega o tamanho do array de comentários e 
adiciona +1*/
  }

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            {/* passado a props, buscando o author dentro da mesma e 
          fazendo busca por avatarUrl que se encontra dentro de author */}
            <Avatar src={author.avatarUrl} />
            {/*colocado + uma div ao redor 
            para facilitar na estilização do nome e cargo */}
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          {/*esse title dentro do time é para quando
          o usuário passar o mouse por cima 
          demonstrar a hora exata em que o post/publicacao 
          foi postado */}
          <time
            title={publishedDateFormatted}
            dateTime={publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </header>
        {/* para percorrer o array passamos o conteudo das propriedades
        por volta do mesmo é passado um map pois queremos percorrer e 
        retornar algo (comentario) e para cada linha do array é feito algo
        por isso é colocado {  } por volta do mesmo 
        -> se a linha for do tipo páragrafo, será retornado um paragrafo 
        e dentro do mesmo retorna um line.content 
        -> se a linha for do tipo link, a mesma sera um paragrafo mas de lnk 
        
        */}
        <div className={styles.content}>
          {content.map((line) => {
            if (line.type === "paragraph") {
              return <p>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                <p>
                  <a href="">{line.content}</a>
                </p>
              );
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
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
          {/*percorrendo os comentarios e para cada comentario esta sendo 
          retornado um componente comentário */}
          {comments.map((comment) => {
            return <Comment />;
          })}
        </div>
      </article>
    </>
  );
}
