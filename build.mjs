import fs from 'node:fs';
fs.mkdirSync('dist/server', {recursive:true});
fs.mkdirSync('dist/client', {recursive:true});
const spec = fs.readFileSync('src/ai-spec.js', 'utf8').replace('export const', 'const');
const worker = fs.readFileSync('src/worker.js', 'utf8').replace("import {AI_SPEC} from './ai-spec.js';", spec);
fs.writeFileSync('dist/server/index.js', worker);
// Pages Advanced Mode: execute the API on the same pages.dev domain.
fs.writeFileSync('dist/client/_worker.js', worker);
fs.writeFileSync('dist/client/_routes.json', JSON.stringify({version:1, include:['/api/*'], exclude:[]}, null, 2) + '\n');
console.log('Pages API built: dist/client/_worker.js');
