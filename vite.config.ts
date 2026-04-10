import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },

  build: {
    // ── Target moderno (elimina polyfills desnecessários) ──
    target: "es2020",

    // ── CSS inline para chunks pequenos ──
    cssCodeSplit: true,

    // ── Minimizar com esbuild (padrão Vite, mais rápido) ──
    minify: "esbuild",

    // ── Otimização de chunks ──
    rollupOptions: {
      output: {
        /**
         * Estratégia de chunking manual:
         * - vendor/react: React core (imutável, longa validade de cache)
         * - vendor/ui: Radix UI + shadcn (raramente muda)
         * - vendor/charts: recharts (pesado, só carrega se necessário)
         * - vendor/forms: react-hook-form + zod
         * Chunks separados permitem cache HTTP independente.
         */
        manualChunks(id) {
          // Chunk 1: React core
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/react-router-dom/") ||
            id.includes("node_modules/scheduler/")
          ) {
            return "vendor/react";
          }

          // Chunk 2: Radix UI / Shadcn
          if (id.includes("node_modules/@radix-ui/")) {
            return "vendor/ui";
          }

          // Chunk 3: Recharts (pesado ~400kb)
          if (id.includes("node_modules/recharts/") || id.includes("node_modules/d3-")) {
            return "vendor/charts";
          }

          // Chunk 4: Formulários
          if (
            id.includes("node_modules/react-hook-form/") ||
            id.includes("node_modules/zod/") ||
            id.includes("node_modules/@hookform/")
          ) {
            return "vendor/forms";
          }

          // Chunk 5: Utilitários (lucide, clsx, etc)
          if (
            id.includes("node_modules/lucide-react/") ||
            id.includes("node_modules/clsx/") ||
            id.includes("node_modules/tailwind-merge/") ||
            id.includes("node_modules/class-variance-authority/")
          ) {
            return "vendor/utils";
          }

          // Chunk 6: React Query
          if (
            id.includes("node_modules/@tanstack/") 
          ) {
            return "vendor/query";
          }
        },

        // ── Nomes de arquivo com hash para cache busting ──
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },

    // ── Avisar quando chunks > 500kb ──
    chunkSizeWarningLimit: 500,

    // ── Source maps apenas em dev ──
    sourcemap: mode === "development",
  },

  // ── Otimizações do servidor de desenvolvimento ──
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "lucide-react",
      "@tanstack/react-query",
    ],
    // Força pré-bundling de dependências grandes
    holdUntilCrawlEnd: false,
  },
}));
