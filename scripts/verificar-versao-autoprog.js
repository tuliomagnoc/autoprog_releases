const fs = require('node:fs');
const path = require('node:path');

const raiz = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(raiz, 'AUTOPROG.html'), 'utf8');
const manifesto = JSON.parse(fs.readFileSync(path.join(raiz, 'versao.json'), 'utf8'));

const versaoHtml = html.match(/const _APP_VERSION = '([^']+)'/);
const novidadesHtml = html.match(/const _NOVIDADES_ATUAL = (\[[\s\S]*?\]);/);

function falhar(mensagem) {
  console.error(`ERRO DE VERSIONAMENTO: ${mensagem}`);
  process.exit(1);
}

if (!versaoHtml) falhar('não foi possível localizar _APP_VERSION no AUTOPROG.html.');
if (!novidadesHtml) falhar('não foi possível localizar _NOVIDADES_ATUAL no AUTOPROG.html.');
if (versaoHtml[1] !== manifesto.versao) {
  falhar(`AUTOPROG.html está em ${versaoHtml[1]}, mas versao.json está em ${manifesto.versao}.`);
}

let novidadesInstaladas;
try {
  novidadesInstaladas = JSON.parse(novidadesHtml[1]);
} catch (erro) {
  falhar(`a lista _NOVIDADES_ATUAL não é válida: ${erro.message}`);
}

if (!Array.isArray(manifesto.novidades) || !manifesto.novidades.length) {
  falhar('versao.json precisa conter ao menos uma novidade.');
}
if (!Array.isArray(novidadesInstaladas) || !novidadesInstaladas.length) {
  falhar('a etiqueta vibratória precisa conter ao menos uma novidade.');
}
if (!String(manifesto.novidades[0]).startsWith(manifesto.versao)) {
  falhar(`a primeira novidade do manifesto deve começar com ${manifesto.versao}.`);
}
if (novidadesInstaladas[0] !== manifesto.novidades[0]) {
  falhar('a novidade principal do manifesto e da etiqueta vibratória não são iguais.');
}

const ocorrenciasVersao = html.split(manifesto.versao).length - 1;
if (ocorrenciasVersao < 3) {
  falhar('a versão deve aparecer no código e nos rodapés do AutoProg.');
}

console.log(`AutoProg ${manifesto.versao}: versão e etiqueta de novidades validadas.`);
