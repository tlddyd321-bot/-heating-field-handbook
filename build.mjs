import fs from 'node:fs';
fs.mkdirSync('dist/server',{recursive:true});
const spec=fs.readFileSync('src/ai-spec.js','utf8').replace('export const','const');
const worker=fs.readFileSync('src/worker.js','utf8').replace("import {AI_SPEC} from './ai-spec.js';",spec);
fs.writeFileSync('dist/server/index.js',worker);
