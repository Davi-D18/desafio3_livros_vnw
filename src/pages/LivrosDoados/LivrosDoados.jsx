import { useEffect, useState } from "react";
import axios from "axios"
import { CardLivro } from "../../components/CardLivro/CardLivro.jsx";

import gatoErro from "../../assets/icons-erro/gato-erro.png"
import CapaLivro from "../../assets/icons/capas-livros/icon1.png" 

import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation.jsx";
import { showNotification } from "../../components/Notification/ShowNotification.jsx"
import S from "./styles/livrosDoados.module.scss";

const apiUrl = import.meta.env.VITE_API_URL;

export const LivrosDoados = () => {
  const [renderizarConteudo, setRenderizarConteudo] = useState(false);
  const [livrosRenderizados, setLivrosRenderizados] = useState([]); // Livros renderizados
  const [indiceAtual, setIndiceAtual] = useState(0); // Controle de índice para evitar renderizações repetidas
  const [livros, setLivros] = useState([])
  const [erroAoBuscarLivros, setErroAoBuscarLivros] = useState(false)

  const buscarLivrosNovamente = () => {
    setErroAoBuscarLivros(false)
    buscarLivros()
  }
  
  const buscarLivros = async () => {
    try {
      const response = await axios.get(`${apiUrl}/livros`);
      setLivros(response.data);
      
      setRenderizarConteudo(true);
    } catch (error) {
      setTimeout(() => {
        showNotification(
          "Ocorreu um erro ao buscar os livros",
          "Tente novamente mais tarde",
          "danger",
          null
        )
        setErroAoBuscarLivros(true)
      }, 700)
    }
  }

  useEffect(() => {
    buscarLivros();
  }, []);

  // renderiza os livros um por um
  useEffect(() => {
    if (renderizarConteudo && indiceAtual < livros.length && livros.length > 0) {
      const atraso = window.innerWidth < 768 ? 500 : 365;
      const timeout = setTimeout(() => {
        setLivrosRenderizados((prev) => [...prev, livros[indiceAtual]]);
        setIndiceAtual((prev) => prev + 1);
      }, atraso);
  
      return () => clearTimeout(timeout);
    }
  }, [renderizarConteudo, indiceAtual, livros]);

  const verificarLinkLivro = (url) => {
    if (!url || typeof url !== 'string') return false; // Verifica se existe e é string
    if (!url.startsWith('http')) return false; // Exige protocolo

    try {
      new URL(url)
      return true
    } catch (error) {
      return false
    }
  }

  return (
    <section>
      {/* Quando a variável for true, renderiza o conteúdo */}
      {renderizarConteudo ? (
        <section className={S.sectionLivrosDoados}>
          <h1 className={S.titulo}>Livros Doados</h1>

          <section className={S.sectionLivros}>
            {livrosRenderizados.map((livro, index) => (
              <CardLivro
                key={index}
                id={livro.id}
                titulo={livro.titulo}
                categoria={livro.categoria}
                imagem={verificarLinkLivro(livro.image_url) ? livro.image_url : CapaLivro}
                paginas={livro.paginas}
              />
            ))}
          </section>
        </section>
      ) : erroAoBuscarLivros ? (
        <div className={S.containerErro}>
          <img src={gatoErro} alt="Imagem de um gato com livro nas patas" />
          <h2>Ops! Algo deu errado...</h2>
          <p>Não foi possível carregar os livros doados.</p>
          
          <button onClick={buscarLivrosNovamente}>
            Tentar novamente
          </button>
        </div>
      ) : (
        <div className={S.containerLoader}>
          <LoadingAnimation />
        </div>
      )}
    </section>
  );
};