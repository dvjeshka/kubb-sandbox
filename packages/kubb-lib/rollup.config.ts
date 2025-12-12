import { resolve } from 'path';
import { globSync } from 'glob';
import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import { fileURLToPath } from 'node:url';
import dts from 'rollup-plugin-dts';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// 🔍 Multi-entry: generated/**/!(*.d).ts → dist/...
const entries = Object.fromEntries(
    globSync('generated/**/!(*.d).ts').map(file => [
        file.replace(/^generated\//, '').replace(/\.ts$/, ''),
        resolve(__dirname, file),
    ])
);

export default defineConfig([
    // 🔹 Этап 1: сборка JS (ES + CJS)
    {
        input: entries,
        output: [
            {
                dir: 'dist',
                format: 'es',
                entryFileNames: '[name].js',
                chunkFileNames: 'chunks/[name]-[hash].js',
                sourcemap: true,
            },
            {
                dir: 'dist',
                format: 'cjs',
                entryFileNames: '[name].cjs',
                chunkFileNames: 'chunks/[name]-[hash].cjs',
                exports: 'named',
                sourcemap: true,
            },
        ],
        external: ['swr', 'axios', 'zod', 'react', 'react-dom'],
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
                // Не генерируем .d.ts — этим займётся второй конфиг
                declaration: false,
                declarationMap: false,
            }),
        ],
    },

    // 🔹 Этап 2: генерация .d.ts
    {
        input: entries,
        output: {
            dir: 'dist',
            format: 'es',
        },
        plugins: [
            dts({
                // rollup-plugin-dts сам вызывает tsc --emitDeclarationOnly
                tsconfig: './tsconfig.json',
                compilerOptions: {
                    rootDir: 'generated',
                    declarationDir: 'dist',
                },
            }),
        ],
    },
]);