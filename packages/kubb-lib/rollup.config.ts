import { resolve, relative, normalize, isAbsolute,sep } from 'path';
import { globSync } from 'glob';
import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));
import alias from '@rollup/plugin-alias';

// 🔍 Multi-entry: generated/**/!(*.d).ts → dist/...
const entries = Object.fromEntries(
    globSync('generated/**/!(*.d).ts')
        .filter(file => !file.includes(sep + 'types' + sep)) // исключаем types/
        .map(file => {
            const relPath = relative('', file); // → hooks/useX.ts или api/getX.ts
            const name = relPath.replace(/\.ts$/, '');   // → hooks/useX или api/getX
            return [name, resolve(__dirname, file)];
        })
);

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
            {
                dir: 'dist',
                format: 'cjs',
                entryFileNames: '[name].cjs',
                chunkFileNames: 'chunks/[name]-[hash].cjs',
                exports: 'named',
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