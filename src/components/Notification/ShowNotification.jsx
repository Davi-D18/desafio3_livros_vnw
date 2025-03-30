import { Store } from "react-notifications-component"; // Importa a biblioteca de notificações
import "react-notifications-component/dist/theme.css"; // Importa os estilos das notificações
import propTypes from "prop-types";

// Notification.jsx
export const showNotification = (titulo, mensagem, status, handleBack) => {
    const isMobile = window.innerWidth <= 768;
  
    Store.addNotification({
      title: titulo,
      message: mensagem,
      type: status,
      insert: "top",
      container: "top-right",
      animationIn: [
        "animate__animated", 
        isMobile ? "animate__fadeInUp" : "animate__fadeIn"
      ],
      animationOut: [
        "animate__animated",
        isMobile ? "animate__fadeOutDown" : "animate__fadeOut"
      ],
      dismiss: {
        duration: isMobile ? 2700 : 3900,
        onScreen: true,
        showIcon: true,
        onDismiss: handleBack ? () => handleBack() : undefined
      },
      width: isMobile ? 300 : 400,
    });
};

showNotification.propTypes = {
    titulo: propTypes.string.isRequired,
    mensagem: propTypes.string.isRequired,
    status: propTypes.string.isRequired,
    handleBack: propTypes.func,
};