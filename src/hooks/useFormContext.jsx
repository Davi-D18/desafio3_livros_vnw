import { useContext } from "react";
import { FormContext } from "../context/FormContext.js";

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext deve ser usado dentro de um FormProvider");
  }
  return context;
};
