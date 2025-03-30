import { useState } from "react";
import { FormContext } from "./FormContext.js";
import PropTypes from "prop-types"; // Importa PropTypes

// Componente responsável por armazenar os dados do formulário e fornecer para os componentes filhos
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  // Retorna o FormContext com os valores de formData e setFormData
  // e renderiza os componentes filhos
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Validação das props do FormProvider
FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

