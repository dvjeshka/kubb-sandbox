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
        //barrelType:false
    },
    plugins: [
        pluginOas(),
        pluginTs({
            output: {
                path:'types',
                //barrelType:false
            }
        }),
        pluginClient({
            output: {
                path:'clients',
                //barrelType:false
            }
        }),
        pluginSwr({
            output: {
                path:'hooks',
                //barrelType:false
            }
        }),
    ],
})