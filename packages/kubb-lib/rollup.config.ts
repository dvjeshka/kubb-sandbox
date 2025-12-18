import { resolve, relative } from 'path';
import { globSync } from 'glob';
import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));
import alias from '@rollup/plugin-alias';

const getEntries = (patterns: string[]) =>
    Object.fromEntries(
        patterns.flatMap(pattern =>
            globSync(pattern).map(file => {
                const name = relative('', file).replace(/\.ts$/, '');
                return [name, resolve(__dirname, file)];
            })
        )
    );

const entries = getEntries(['generated/**/!(*.d).ts', 'helpers/*.ts']);
export default defineConfig([
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
        ],
        external:['@apiClient'],
        plugins: [
            alias({
                entries: [
                    { find: '@apiClient', replacement: resolve(__dirname, 'apiClient.ts') },
                ],
            }),
            typescript({
                tsconfig: './tsconfig.json',
                // Не генерируем .d.ts — этим займётся второй конфиг
                declaration: false,
                declarationMap: false,
            }),
        ],
    },
]);