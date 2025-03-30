import { useEffect, useState } from "react";
import axios from "axios"
import { CardLivro } from "../../components/CardLivro/CardLivro.jsx";
import CapaLivro from "../../assets/icons/capas-livros/icon1.png" 

import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation.jsx";
import S from "./styles/livrosDoados.module.scss";

const apiUrl = import.meta.env.VITE_API_URL;

export const LivrosDoados = () => {
  const [renderizarConteudo, setRenderizarConteudo] = useState(false);
  const [livrosRenderizados, setLivrosRenderizados] = useState([]); // Livros renderizados
  const [indiceAtual, setIndiceAtual] = useState(0); // Controle de índice para evitar renderizações repetidas
  const [progress, setProgress] = useState(0); // Controle de progresso
  const [livros, setLivros] = useState([])

  const loadingDuration = 1700;
  

  const buscarLivros = async () => {
    try {
      const response = await axios.get(`${apiUrl}/livros`);
      setLivros(response.data);
    } catch (error) {
      setLivros([]); // Fallback para array vazio
    }
  }

  // Função para simular o carregamento da página
  useEffect(() => {
    const startTime = Date.now();
    let requestCompleted = false;
    const intervalRef = { current: null };

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = (elapsed / loadingDuration) * 100;
      
      if (!requestCompleted) {
        setProgress(Math.min(currentProgress, 90)); // Limita a 90% durante a requisição
      } else {
        setProgress(Math.min(currentProgress, 100)); // Completa os 100% após resposta
      }

      if (elapsed < loadingDuration || !requestCompleted) {
        intervalRef.current = setTimeout(updateProgress, 100);
      }
    };

    const carregamento = async () => {
      try {
        await buscarLivros();
      } finally {
        requestCompleted = true;
        const elapsed = Date.now() - startTime;
        
        // Completa o tempo mínimo de loading se necessário
        if (elapsed < loadingDuration) {
          await new Promise(resolve => 
            setTimeout(resolve, loadingDuration - elapsed)
          );
        }
        setRenderizarConteudo(true);
        setProgress(100); // Garante 100% ao final
      }
    };

    // Inicia o loop de progresso
    updateProgress();
    carregamento();

    return () => {
      clearTimeout(intervalRef.current);
    };
  }, [])

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
      ) : (
        <div className={S.containerLoader}>
          <LoadingAnimation progress={progress} />
          <p>Buscando Livros...</p>
        </div>
      )}
    </section>
  );
};
