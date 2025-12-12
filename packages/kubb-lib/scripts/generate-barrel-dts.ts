import { writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const dirs = ['dist/types', 'dist/hooks', 'dist/api'];

dirs.forEach(dir => {
    if (!existsSync(dir)) return;

    const files = readdirSync(dir)
        .filter(f => f.endsWith('.d.ts') && f !== 'index.d.ts')
        .map(f => f.replace(/\.d\.ts$/, ''));

    const content = files
        .sort()
        .map(name => `export * from './${name}';`)
        .join('\n');

    writeFileSync(join(dir, 'index.d.ts'), content || 'export {}');
    console.log(`✅ ${dir}/index.d.ts`);
});