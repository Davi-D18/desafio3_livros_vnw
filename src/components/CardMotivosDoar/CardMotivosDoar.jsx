import PropTypes from "prop-types";
import * as S from "./styles/cardMotivosDoar.module.scss";

// Componente funcional CardMotivosDoar que recebe props
export function CardMotivosDoar(props) {
  return (
    <article className={S.articleCard}>
      {/* Renderiza a imagem do ícone do card */}
      <img className={S.iconCard} src={props.iconeCard} alt="Ícone do Card" />
      {/* Renderiza a descrição do card */}
      <p className={S.descricao}>{props.descricao}</p>
    </article>
  );
}

// Validação das props do componente
CardMotivosDoar.propTypes = {
  iconeCard: PropTypes.node.isRequired,
  descricao: PropTypes.string.isRequired,
};

