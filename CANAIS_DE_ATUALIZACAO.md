# Canais públicos de atualização

Este repositório público concentra os arquivos de versionamento dos módulos operacionais:

- `versao.json` e `AUTOPROG.html`: AutoProg.
- `automat/versao.json` e `automat/AUTOMAT.html`: AutoMat.
- `automatmobile/versao.json`, `automatmobile/automatmobile.html` e o APK: AutoMat Mobile.

Cada módulo consulta diretamente seu `versao.json` no GitHub. Uma publicação deve atualizar, no mesmo commit, o arquivo do módulo, o manifesto de versão e o instalador correspondente quando aplicável.

As APIs autenticadas e a base de dados não são hospedadas pelo GitHub; este repositório contém somente arquivos públicos de distribuição e controle de versão.
