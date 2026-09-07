import http from 'node:http';
import {readFile} from 'node:fs/promises';
const allowed=['index.html','style.css','app.js','engine.js','city.svg'];
http.createServer(async(req,res)=>{const file=new URL(req.url,'http://localhost').pathname.slice(1)||'index.html';if(!allowed.includes(file)){res.writeHead(404);return res.end('Not found');}try{const data=await readFile(new URL(file,import.meta.url));res.setHeader('Content-Type',({'html':'text/html','css':'text/css','js':'text/javascript','svg':'image/svg+xml'})[file.split('.').pop()]+'; charset=utf-8');res.end(data);}catch{res.writeHead(500);res.end('Unable to read file');}}).listen(4173,'127.0.0.1',()=>console.log('http://127.0.0.1:4173'));
