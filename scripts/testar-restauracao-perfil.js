const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const raiz = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(raiz, 'AUTOPROG.html'), 'utf8');
const inicio = html.indexOf('// PERFIL_SESSAO_HELPERS_INICIO');
const fim = html.indexOf('// PERFIL_SESSAO_HELPERS_FIM');
assert.ok(inicio >= 0 && fim > inicio, 'Helpers de restauração do perfil não encontrados.');

const contexto = {};
vm.createContext(contexto);
vm.runInContext(html.slice(inicio, fim), contexto);
assert.equal(typeof contexto._resolverPerfilSessaoSalva, 'function');

const autenticacao = {
  usuario: { nome: 'TÚLIO CARMO', usuario: 'tulio.carmo', planta: 'BRUCUTU', pcm: 'ELÉTRICA' }
};
const sessaoAntiga = { elaborador: '', planta: '', pcm: '' };

assert.deepEqual(
  JSON.parse(JSON.stringify(contexto._resolverPerfilSessaoSalva(sessaoAntiga, autenticacao, {}))),
  { elaborador: 'TÚLIO CARMO', planta: 'BRUCUTU', pcm: 'ELÉTRICA' }
);
assert.deepEqual(
  JSON.parse(JSON.stringify(contexto._resolverPerfilSessaoSalva(
    { elaborador: 'ELABORADOR SALVO', planta: 'PLANTA SALVA', pcm: 'PCM SALVO' },
    null,
    {}
  ))),
  { elaborador: 'ELABORADOR SALVO', planta: 'PLANTA SALVA', pcm: 'PCM SALVO' }
);

const arquivoTeste = process.argv[2];
if (arquivoTeste) {
  const sessaoReal = JSON.parse(fs.readFileSync(path.resolve(arquivoTeste), 'utf8'));
  const restaurado = JSON.parse(JSON.stringify(contexto._resolverPerfilSessaoSalva(sessaoReal, autenticacao, {})));
  assert.deepEqual(restaurado, { elaborador: 'TÚLIO CARMO', planta: 'BRUCUTU', pcm: 'ELÉTRICA' });
  console.log(`Arquivo real validado: ${path.basename(arquivoTeste)}.`);
}

assert.match(html, /window\._obterAuth = _obterAuth;/);
assert.match(html, /_resolverPerfilSessaoSalva\(s, __auth,/);
console.log('Restauração de elaborador, planta e PCM validada.');
