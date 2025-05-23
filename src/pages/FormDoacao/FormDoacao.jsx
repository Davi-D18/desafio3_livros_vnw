import S from "./styles/formDoacao.module.scss";
import Icon from "../../assets/icons/livro-icon.png";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../hooks/useFormContext";
import { useState } from "react";
import { showNotification } from "../../components/Notification/ShowNotification";

export const FormDoacao = () => {
  const navigate = useNavigate();
  const { setFormData } = useFormContext(); // Função para atualizar os dados globais
  const [formValues, setFormValues] = useState({
    titulo: "",
    categoria: "",
    autor: "",
    imagem: "",
    paginas: "",
  });

  const verificarValores = (valores) => {
    // Verifica se o campo de páginas contém apenas números
    if (/[^0-9]/.test(valores.paginas)) { 
      showNotification("Atenção", "O campo de Páginas deve conter apenas números!", "info");
      return false;
    }

    if (valores.titulo.length < 5) {
      showNotification("Atenção", "O campo de Titulo deve conter no mínimo 5 caracteres!", "info");
      return false;
    }

    // Verifica se os campos categoria e autor não contêm números
    
    if (/\d/.test(valores.categoria)) {
      showNotification("Atenção", "O campo de Categoria deve conter apenas texto!", "info");
      return false;
    }

    if (/\d/.test(valores.autor)) {
      showNotification("Atenção", "O campo de Autor deve conter apenas texto!", "info");
      return false;
    }
    
    return true;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const status = verificarValores(formValues);

    if (status) {
      setFormData(formValues); // Salva os dados no contexto
      navigate("/resumo"); // Redireciona para a página de resumo
    }
  };

  return (
    <section className={S.secaoFormDoarLivro}>
      <p className={S.aviso}>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>

      <form
        className={S.secaoFormulario}
        action=""
        method="POST"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className={S.containerIconAndText}>
          <img className={S.iconImagemLivro} src={Icon} alt="Ícone Livro" />
          <h2 className={S.infoLivro}>Informações do Livro</h2>
        </div>

        <input
          className={S.input}
          type="text"
          name="titulo"
          placeholder="Titulo"
          value={formValues.titulo}
          onChange={handleChange}
          required
        />
        <input
          className={S.input}
          type="text"
          name="categoria"
          placeholder="Categoria"
          value={formValues.categoria}
          onChange={handleChange}
          required
        />
        <input
          className={S.input}
          type="text"
          name="autor"
          placeholder="Autor"
          value={formValues.autor}
          onChange={handleChange}
          required
        />
        <input
          className={S.input}
          type="text"
          name="imagem"
          placeholder="Link da imagem"
          value={formValues.imagem}
          onChange={handleChange}
          required
        />
        <input
          className={S.input}
          type="number"
          name="paginas"
          placeholder="Quantidade de páginas"
          value={formValues.paginas}
          onChange={handleChange}
          required
        />

        <button className={S.buttonSubmitDoar}>Doar</button>
      </form>
    </section>
  );
};
