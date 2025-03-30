import S from "./styles/header.module.scss";
import { Link } from "react-router-dom";

import IconLivro from "../../assets/icons/icon.png";
import IconLupa from "../../assets/icons/lupa.png";

export const Header = () => {
  return (
    <header className={S.header}>
      <div className={S["container-header"]}>
        <div className={S.slogan}>
          <img className={S["logo-imagem"]} src={IconLivro} alt="Logo" />
          <h1 className={S.titulo}>Livros Vai na Web</h1>
        </div>
        <nav className={S["secao-navegacao"]}>
          <ul className={S["lista-links"]}>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/livrosDoados">Livros Doados</Link>
            </li>
            <li>
              <Link to="/doacao">Quero Doar</Link>
            </li>
          </ul>
        </nav>
        <section className={S["form-pesquisa"]}>
          <input
            type="search"
            name="buscaDoUsuario"
            placeholder="O que você procura?"
            className={S["input-pesquisa"]}
          />

          <button>
            <img src={IconLupa} alt="Icone de Busca" />
          </button>
        </section>
      </div>
    </header>
  );
};
