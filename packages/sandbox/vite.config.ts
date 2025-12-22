/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
    test: {
        browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [
                { browser: 'chromium' },
            ],
        },
    },
    resolve: {
        alias: {
            '@apiClient': path.resolve(__dirname, './src/core/api/apiClient'),
        }
    },
  plugins: [
    react(),
  ],
})
