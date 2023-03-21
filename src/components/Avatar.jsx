import styles from "./avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
  /*neste codigo acima estamos realizando uma desestruturação
onde retiramos a props passada
deixamos o hasBorder com valor de default, ou seja, se hasBorder 
passada SEM um valor booleano, ele será TRUE ->-
então quando usamos desestruturação podemos aplicar o valor 
de default para as propriedades
 */

  return (
    //o src não é fixo, entao cada avatar tera uma foto variavel
    //por isso vamos usar propriedades neste componente
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      /*se nas propriedades contem hasBorder:
      Eu mostro styles.avatarWithBorder, se não, eu mostro apenas styles.avatar*/
      src={props.src}
    />
  );
}

//o componente recebe uma propriedade de src
