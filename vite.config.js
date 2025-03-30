import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Isso serve para importar o arquivo de variáveis de forma global, para que possa ser usado em todos os arquivos scss do projeto.
        additionalData: `@use "./src/styles/global.scss" as *;`,
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "react-loader-spinner"],
  },
});
