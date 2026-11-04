const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const raiz = path.resolve(__dirname, '..');
const canal = [
  { modulo: 'AutoProg', html: 'AUTOPROG.html', manifesto: 'versao.json', minimo: 'V2026.27.01.143', rota: '/autoprog' },
  { modulo: 'AutoMat', html: 'automat/AUTOMAT.html', manifesto: 'automat/versao.json', minimo: 'V2026.27.01.18', rota: '/automat' }
];
const partes = valor => String(valor).replace(/^V/i, '').split('.').map(Number);
const maisNova = (a, b) => {
  const pa = partes(a), pb = partes(b);
  return pa.some((parte, indice) => parte > (pb[indice] || 0) && pa.slice(0, indice).every((n, i) => n === pb[i]));
};

for (const item of canal) {
  const html = fs.readFileSync(path.join(raiz, item.html), 'utf8');
  const dados = JSON.parse(fs.readFileSync(path.join(raiz, item.manifesto), 'utf8'));
  assert.ok(maisNova(dados.versao, item.minimo), `${item.modulo}: versão precisa superar as cópias existentes.`);
  assert.ok(Array.isArray(dados.novidades) && dados.novidades[0].startsWith(dados.versao));
  assert.match(html, /ESTA VERSÃO LOCAL FOI ENCERRADA/);
  assert.match(html, />ACESSAR SERVIDOR<\/a>/);
  assert.ok(html.includes(`https://black-meadow-0dc500c10.5.azurestaticapps.net${item.rota}`));
  assert.match(html, /src="data:image\/png;base64,[A-Za-z0-9+/=]+"/);
  assert.doesNotMatch(html, /<script\b|on(?:click|load|error)\s*=/i);
  assert.ok(Buffer.byteLength(html) < 40_000, `${item.modulo}: arquivo contém código além da página de orientação.`);
  console.log(`${item.modulo} ${dados.versao}: atualização local encerrada validada.`);
}
