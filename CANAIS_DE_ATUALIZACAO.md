# Canais públicos de atualização

AutoProg (`AUTOPROG.html`) e AutoMat (`automat/AUTOMAT.html`) distribuem agora somente uma página com a logomarca, o aviso de encerramento local e o botão **ACESSAR SERVIDOR**. Os manifestos `versao.json` e `automat/versao.json` trazem versões maiores que as dos arquivos autônomos anteriores, acionando o aviso obrigatório quando eles consultam o GitHub.

O navegador solicita ao usuário que escolha onde salvar. A cópia antiga só é substituída quando o novo arquivo é salvo no mesmo caminho. Arquivos guardados em outros caminhos e cópias abertas sem conexão não podem ser apagados remotamente.

Os módulos online continuam hospedados na Azure e usam seus próprios manifestos de versão. O AutoMat Mobile web e o APK Android mantêm seus canais atuais: o atualizador web das cópias locais apenas recarrega a página e não consegue substituir o HTML já baixado. O Controle disponibiliza a página de orientação para novos downloads; suas cópias antigas também não têm mecanismo de substituição.

O código antigo pode permanecer em cópias já distribuídas e no histórico do repositório. As APIs e os dados seguem protegidos pelas verificações do servidor.
