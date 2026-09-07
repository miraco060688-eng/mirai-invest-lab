import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const file of ['index.html','style.css','app.js','engine.js','city.svg']) await copyFile(file,`dist/${file}`);
console.log('Built 5 static files. No runtime dependencies.');
