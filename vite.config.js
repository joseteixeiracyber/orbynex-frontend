import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: ['orbynex.com.br',
  'www.orbynex.com.br',
  'app.orbynex.com.br',
'mercado.orbynex.com.br',
'www.mercado.orbynex.com.br',
'dev.orbynex.com.br',
'www.dev.orbynex.com.br']
  }
});