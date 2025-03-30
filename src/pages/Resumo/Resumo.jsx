import "animate.css"; // Importa animações
import { useEffect, useRef, useState } from "react";
import { ProgressBar, ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../hooks/useFormContext"; // Importa o contexto
import axios from "axios";
import { showNotification } from "../../components/Notification/ShowNotification.jsx";

import S from "./style/resumo.module.scss";

import IconImgColorida from "../../assets/icons-erro/error-colorida.png";
import IconImgLupaErro from "../../assets/icons-erro/error-img-lupa.png";

const apiUrl = import.meta.env.VITE_API_URL;

const isValidUrl = (url) => {
  try {
    new URL(url); // Verifica se a string é um URL válido
    return true;
  } catch {
    return false;
  }
};

export const Resumo = () => {
  const navigate = useNavigate();
  const { formData } = useFormContext();
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);

  const tagParagrafo = useRef(null);
  const colorButton = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 1000);
  }, []);

  function handleBack() {
    setTimeout(() => {
      navigate("/");
      window.scrollTo(0, 0);
    }, 300);
  }

  function handleConfirm() {
    setLoadingButton(true);
    colorButton.current.style.backgroundColor = "#043355";

    submitForm();
  }

  async function submitForm() {
    const dadosASerEnviado = {
      titulo: formData.titulo,
      categoria: formData.categoria,
      autor: formData.autor,
      image_url: formData.imagem,
      paginas: formData.paginas,
    };

    try {
      await axios.post(`${apiUrl}/livros`, dadosASerEnviado)
      setLoadingButton(false);
      colorButton.current.style.backgroundColor = "#005695";

      // Notificação de sucesso
      showNotification(
        "Agradecemos :)",
        "Livro doado com sucesso!",
        "success",
        handleBack() // Função de redirecionamento após dismiss
      );
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      setLoadingButton(false);
      
      // Notificação de erro
      showNotification(
        "Erro!",
        "Ocorreu um problema ao cadastrar o livro. Tente novamente.",
        "danger",
        null // Sem redirecionamento no erro
      );
      colorButton.current.style.backgroundColor = "#005695";
    }

  }

  const renderImage = () => {
    const { imagem } = formData;

    if (!isValidUrl(imagem)) {
      return (
        <div className={S.infoImagemInvalida}>
          <img
            className={S.infoImg}
            src={IconImgColorida}
            alt="Imagem de erro"
          />
          <p className={S.textImagemInvalida}>Link da imagem inválido</p>
        </div>
      );
    }

    return (
      <div className={S.infoImagem}>
        <img
          className={S.infoImg}
          src={imagem}
          alt={`Imagem do Livro ${formData.titulo}`}
          onError={(e) => {
            e.target.src = IconImgLupaErro;
            e.target.classList.replace(S.infoImg, S.infoImgErro);
            e.target.alt = "Imagem não encontrada";
            tagParagrafo.current.textContent = "Imagem não encontrada";
          }}
          loading="lazy"
        />
        <p className={S.textImagemNaoEncontrada} ref={tagParagrafo}></p>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <div className={S.containerLoader}>
          <ProgressBar className={S.loader} width={100} height={100} />
          <p className={S.errorMessage}>Carregando...</p>
        </div>
      ) : (
        <section className={S.resumoContainer}>
          <h1 className={S.title}>Resumo da Doação</h1>

          <div className={S.infoContainer}>
            <div className={S.infoItem}>
              <strong>Título:</strong>
              <p className={S.infoText}>{formData.titulo}</p>
            </div>

            <div className={S.infoItem}>
              <strong>Categoria:</strong>
              <p className={S.infoText}>{formData.categoria}</p>
            </div>

            <div className={S.infoItem}>
              <strong>Autor:</strong>
              <p className={S.infoText}>{formData.autor}</p>
            </div>

            <div className={S.infoItem + " " + S.infoItemImg}>
              <strong>Imagem:</strong>
              {renderImage()}
            </div>

            <div className={S.infoItem}>
              <strong>Quantidade de Páginas:</strong>
              <p className={S.infoText}>{formData.paginas}</p>
            </div>
          </div>

          <div className={S.buttonConfirm}>
            <button
              onClick={handleConfirm}
              className={S.button}
              ref={colorButton}
              disabled={loadingButton}
              aria-label="Confirmar doação"
            >
              {loadingButton ? (
                <ThreeDots
                  className={S.oval}
                  width={20}
                  height={20}
                  color="#FFF"
                />
              ) : (
                <>Confirmar</>
              )}
            </button>
          </div>
        </section>
      )}
    </>
  );
};
