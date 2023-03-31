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

  const [comments, setComments] = useState(["Post muito bacana, heim?"]);

  /*dentro do estado inciamos c o texto q sera passado, 
  como e um texto, inciamos com uma string vazia 
  sempre e importante passar para o estado iniciando o mesmo tipo 
  de informacao que iremos usar posteriormente (string -> usado string) 
  então se formos iniciar c um texto e importante iniciar c uma string vazia
  se for um array de comentarios, e importante inciar com pelo menos um array vazio
  */
  const [newCommentText, setnewCommentText] = useState("");

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

    const newCommentsText = event.target.comment.value;

    setComments([...comments, newCommentsText]);
    /*cada texto que o autor passar e clickar no botao de comentar sera rende
    rizado na tela */

    setnewCommentText("");
    //apos passar o comentario o mesmo ira voltar para o valor em branco
  }

  function handleNewCommentChange() {
    setnewCommentText(event.target.value);
    {
      /*para salvar o valor q o usuari esta digitando (func passada no onchange) */
    }
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
        {/*a key sempre deve ser colocada no primeiro 
        elemento de retorno de um map  */}
        <div className={styles.content}>
          {content.map((line) => {
            if (line.type === "paragraph") {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                <p key={line.content}>
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
          <textarea
            name="comment"
            placeholder="Deixe um comentário"
            onChange={handleNewCommentChange}
            value={newCommentText}
          />
          {/*toda vez q o valor de newCommentText mudar, a text area ira 
          refletir essa alteracao, deixando o campo de comentario limpo */}

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>
        {/*percorrendo os comentarios e para cada comentario esta sendo 
          retornado um componente comentário */}

        <div className={styles.commentList}>
          {comments.map((comment) => {
            return <Comment key={comment} content={comment} />;
          })}
        </div>
      </article>
    </>
  );
}
