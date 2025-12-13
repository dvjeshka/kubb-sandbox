import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginSwr } from '@kubb/plugin-swr'
import { pluginTs } from '@kubb/plugin-ts'
import { pluginMsw } from '@kubb/plugin-msw'
import { pluginFaker } from '@kubb/plugin-faker'
import { pluginZod } from '@kubb/plugin-zod'
import { pluginClient } from '@kubb/plugin-client'
import { pluginEndpoints } from "./plugins/plugin-endpoints";

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
        pluginEndpoints(),
        pluginTs(),
        pluginMsw({parser:'faker',handlers:true}),
        pluginFaker({
            seed: [100],
        }),
        pluginZod(),
        pluginClient({
            output: {
                path:'api',
            },
            importPath: '@apiClient',
        }),
        pluginSwr({
            client:{
                importPath: '@apiClient',
            },
            mutation:{
                paramsToTrigger:true
            }

        }),
    ],
})