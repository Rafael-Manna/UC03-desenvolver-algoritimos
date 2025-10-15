import PromptSync from 'prompt-sync';
import path from 'path';
import fs from 'fs';

const prompt = PromptSync();

let caminho = 'C:/Users/a95826722/Desktop/UC03-desenvolver-algoritimos/Atividade-14/arrayobj.js';
fs.mkdirSync('C:/Users/a95826722/Desktop/UC03-desenvolver-algoritimos/Atividade-15/RelatorioHotel')
fs.readFileSync(caminho)
