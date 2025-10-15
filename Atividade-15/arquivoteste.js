import PromptSync from 'prompt-sync';
import path from 'path';
import fs from 'fs';

const prompt = PromptSync();

// Caminho com barras escapadas
let caminho = 'C:/Users/a95826722/Desktop/UC03-desenvolver-algoritimos/Atividade-15/teste';

console.log('Diretório: ', path.dirname(caminho));
console.log('Extensão do Arquivo: ', path.extname(caminho));
console.log('Nome do arquivo: ', path.basename(caminho));
console.log('Caminho ABSOLUTO do arquivo: ', path.resolve(caminho));
console.log('Caminho ABSOLUTO? ', path.isAbsolute(caminho));
console.log('Caminho relativo: ', path.relative('C:/Users/a95826722', caminho));
console.log('Caminho combinado: ', path.join(caminho, 'teste'));

