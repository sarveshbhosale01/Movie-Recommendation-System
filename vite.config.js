import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "import.meta.env.VITE_STREAMLIT_URL": JSON.stringify(process.env.STREAMLIT_URL || "http://localhost:8504"),
  },
});
