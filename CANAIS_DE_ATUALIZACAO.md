# Canais públicos de atualização

Este repositório público concentra os arquivos de versionamento dos módulos operacionais:

- `versao.json` e `AUTOPROG.html`: AutoProg.
- `automat/versao.json` e `automat/AUTOMAT.html`: AutoMat.
- `automatmobile/versao.json`, `automatmobile/automatmobile.html` e o APK: AutoMat Mobile.

Cada módulo consulta diretamente seu `versao.json` no GitHub. Uma publicação deve atualizar, no mesmo commit, o arquivo do módulo, o manifesto de versão e o instalador correspondente quando aplicável.

## Sequências independentes

Cada módulo mantém sua própria sequência e incrementa o último número a cada ajuste publicado:

- AutoProg: `V2026.27.01.90`.
- AutoMat: `V2026.27.01.05`.
- AutoMat Mobile: `V2026.27.01.05`.

Uma publicação somente está concluída depois que a mesma versão estiver alinhada no código-fonte, no manifesto do GitHub, na cópia hospedada na Azure e, no caso do AutoMat Mobile, no APK. O número de um módulo não deve ser copiado para outro módulo.

As APIs autenticadas e a base de dados não são hospedadas pelo GitHub; este repositório contém somente arquivos públicos de distribuição e controle de versão.
