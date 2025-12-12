import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginSwr } from '@kubb/plugin-swr'
import { pluginTs } from '@kubb/plugin-ts'
import { pluginClient } from '@kubb/plugin-client'

export default defineConfig({
    input: {
        //path: 'https://petstore.swagger.io/v2/swagger.json'
        path: './petStore.json'
    },
    output: {
        path: './generated',
        clean: true,
        barrelType:false
    },
    plugins: [
        pluginOas({
            validate: false,
            generators: [],
        }),
        pluginTs({
            output: {
                path:'types',
                barrelType:false
            }
        }),
        pluginClient({
            output: {
                path:'api',
                barrelType:false,

            },
            importPath: '@apiClient',
        }),
        pluginSwr({
            output: {
                path:'hooks',
                barrelType:false
            },
            client:{
                importPath: '@apiClient',
            }

        }),
    ],
})