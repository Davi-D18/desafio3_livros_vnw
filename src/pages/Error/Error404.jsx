import S from "./styles/error.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";

export const Error404 = () => {
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  useEffect(() => {
    // Simula o carregamento da página
    setTimeout(() => {
      setLoading(false); // Após 2 segundos, esconde o loader e mostra o conteúdo
    }, 2500);
  }, []);

  return (
    <section className={S.errorPage}>
      {loading ? (
        <>
          <Hourglass />
          <p className={S.errorMessage}>Carregando...</p>
        </>
      ) : (
        <>
          {/* Cria um array com 10 elementos vazios e o mapeia para criar 10 icones de livros que vão ser espalhados pela página*/}
          <div className={S.booksWrapper}>
            {[...Array(10)].map((_, index) => (
              <i key={index} className={`fas fa-book ${S.bookIcon}`}></i>
            ))}
          </div>

          <section className={S.info}>
            <h1 className={S.errorCode}>404</h1>
            <p className={S.errorMessage}>
              Ops! Parece que esta página está perdida em meio aos livros.
            </p>
            <Link to="/" className={S.backHome}>
              Voltar para a página inicial
            </Link>
          </section>
        </>
      )}
    </section>
  );
};
