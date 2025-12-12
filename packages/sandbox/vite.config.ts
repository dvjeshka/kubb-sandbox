import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            // Alias '@' to the 'src' directory
            '@apiClient': path.resolve(__dirname, './src/apiClient'),
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
