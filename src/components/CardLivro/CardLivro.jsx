import PropTypes from "prop-types";
import S from "./styles/cardLivro.module.scss";

export function CardLivro({ imagem, titulo, categoria, paginas }) {
  return (
    <article className={S.articleLivro}>
      <img
        className={S.imagem}
        src={imagem}
        alt="Imagem do Livro"
        loading="lazy" // Carrega a imagem quando estiver prestes a ser exibida
      />
      <ul className={S.listaInfo}>
        <li className={S.descricao}>{titulo}</li>
        <li>
          Páginas: <span className={S.paginas}>{paginas}</span>
        </li>
        <li>
          Categoria: <span className={S.categoria}>{categoria}</span>
        </li>
      </ul>
    </article>
  );
}

CardLivro.propTypes = {
  imagem: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  paginas: PropTypes.number.isRequired,
};