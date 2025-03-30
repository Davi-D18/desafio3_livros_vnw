import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.jsx";
import { LoadingAnimation } from "./components/LoadingAnimation/LoadingAnimation.jsx";
import { FormProvider } from "./context/FormProvider.jsx";
import { Error404 } from "./pages/Error/Error404.jsx";
import { FormDoacao } from "./pages/FormDoacao/FormDoacao.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { LivrosDoados } from "./pages/LivrosDoados/LivrosDoados.jsx";
import { Resumo } from "./pages/Resumo/Resumo.jsx";

// Rotas das páginas do site
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Error404 />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/doacao",
          element: <FormDoacao />,
        },
        {
          path: "/livrosDoados",
          element: <LivrosDoados />,
        },
        {
          path: "/resumo",
          element: <Resumo />,
        },
        {
          path: "/teste",
          element: <LoadingAnimation />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  </StrictMode>
);
