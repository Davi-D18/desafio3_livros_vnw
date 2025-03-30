import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
export function App() {
  return (
    <>
      <Header />
      <ReactNotifications />
      <Outlet />
      {/* Reaproveita esses componentes do Header e footer para exibir em outras páginas */}
      <Footer />
    </>
  );
}
