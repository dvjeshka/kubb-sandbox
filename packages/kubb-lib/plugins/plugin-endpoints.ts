// plugins/plugin-endpoints.ts
import { definePlugin } from '@kubb/core';
import { pluginOasName } from '@kubb/plugin-oas';

export const pluginEndpoints = definePlugin(() => {
    return {
        name: 'plugin-endpoints',
        pre: [pluginOasName],

        async install() {
            const oas = await this.getOas();

            const paths = oas.api?.paths || {};

            const endpoints = [];

            for (const [path, methods] of Object.entries(paths)) {
                for (const [method, operation] of Object.entries(methods)) {
                    if (typeof operation !== 'object') continue;

                    // Генерируем operationId только если отсутствует (для уникальности в массиве)
                    const operationId =
                        operation.operationId ||
                        `${method}${path.replace(/\//g, '_').replace(/{|}/g, '')}`;

                    const security = operation.security || oas.api?.security || [];
                    const tags = operation.tags || [];
                    const deprecated = !!operation.deprecated;

                    endpoints.push({
                        operationId,
                        method: method.toUpperCase(),
                        path,
                        requiresAuth: security.length > 0,
                        tags,
                        deprecated,
                    });
                }
            }

            const itemsCode = endpoints
                .map(
                    (e) => `{
  operationId: '${e.operationId}',
  method: '${e.method}' as const,
  path: '${e.path}',
  requiresAuth: ${e.requiresAuth},
  tags: ${JSON.stringify(e.tags)},
  deprecated: ${e.deprecated},
}`,
                )
                .join(',\n  ');

            const source = `
export type Endpoint = {
  operationId: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  requiresAuth: boolean;
  tags: string[];
  deprecated: boolean;
};

export const endpoints = [
  ${itemsCode}
] as const;
`;

            await this.addFile({
                baseName: 'endpoints.ts',
                path: `${this.config.output.path}/endpoints.ts`,
                sources: [{ value: source }],
            });
        },
    };
});