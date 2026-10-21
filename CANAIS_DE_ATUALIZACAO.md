# Canais públicos de atualização

Este repositório público concentra os arquivos de versionamento dos módulos operacionais:

- `versao.json` e `AUTOPROG.html`: AutoProg.
- `automat/versao.json` e `automat/AUTOMAT.html`: AutoMat.
- `automatmobile/web-versao.json` e `automatmobile/automatmobile.html`: AutoMat Mobile web.
- `automatmobile/versao.json` e o APK: aplicativo AutoMat Mobile Android.

Cada módulo consulta seu manifesto no GitHub. Uma publicação deve atualizar, no mesmo commit, o arquivo do módulo e seu manifesto correspondente. O instalador Android só deve mudar quando houver uma publicação específica do aplicativo.

## Sequências independentes

Cada módulo mantém sua própria sequência e incrementa o último número a cada ajuste publicado:

- AutoProg: `V2026.27.01.135`.
- AutoMat: `V2026.27.01.18`.
- AutoMat Mobile web: `V2026.27.01.14`.
- AutoMat Mobile Android: `V2026.27.01.09`, inalterado nesta publicação web.

Uma publicação somente está concluída depois que a mesma versão estiver alinhada no código-fonte, no manifesto do GitHub e na cópia hospedada na Azure. O APK tem sequência e publicação próprias, independentes da versão web. O número de um módulo não deve ser copiado para outro módulo.

No AutoProg, **cada ajuste publicado precisa constar na etiqueta de novidades**. Todas as notas da versão atual, até a primeira entrada de uma versão anterior, devem ser idênticas entre `versao.json` e `_NOVIDADES_ATUAL` no HTML. A validação automática do GitHub bloqueia divergências.

As APIs autenticadas e a base de dados não são hospedadas pelo GitHub; este repositório contém somente arquivos públicos de distribuição e controle de versão.
