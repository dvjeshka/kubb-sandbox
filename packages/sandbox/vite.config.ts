import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@apiClient': path.resolve(__dirname, './src/core/api/apiClient'),
        }
    },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],

})
