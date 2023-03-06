---
layout: note
title: "Banco de Dados"
author: "Mateus Almeida"
categories: [notas]
---

# Sumário

- [Primeira parte](#primeira-parte)
  - [Qual a diferença entre Banco de Dados e SGBD?](#qual-a-diferença-entre-banco-de-dados-e-sgbd)
  - [O que a cardinalidade expressa?](#o-que-a-cardinalidade-expressa)
  - [Quais as regras básicas do modelo relacional?](#quais-as-regras-básicas-do-modelo-relacional)
  - [Defina e explique o significado de chave primeira e chave estrangeira.](#defina-e-explique-o-significado-de-chave-primeira-e-chave-estrangeira)
  - [Defina DDL, DML E DCL e seus principais comandos](#defina-ddl-dml-e-dcl-e-seus-principais-comandos)
- [Segunda parte](#segunda-parte)
	- [Defina transação, quais as suas propriedades e apresente todas as instruções que especificam os seus limites:](#defina-transação-quais-as-suas-propriedades-e-apresente-todas-as-instruções-que-especificam-os-seus-limites)
	- [Explique controle de concorrência no contexto de banco de dados.](#explique-controle-de-concorrência-no-contexto-de-banco-de-dados)
	- [Explique o problema da atualização perdida.](#explique-o-problema-da-atualização-perdida)
	- [Quais os motivos que levam uma transação falhar no meio da execução? Explique cada um deles.](#quais-os-motivos-que-levam-uma-transação-falhar-no-meio-da-execução-explique-cada-um-deles)
	- [Quais operações que o gerenciador de transação precisa acompanhar na execução de uma transação?](#quais-operações-que-o-gerenciador-de-transação-precisa-acompanhar-na-execução-de-uma-transação)
	- [Quando uma transação alcança seu ponto de confirmação?](#quando-uma-transação-alcança-seu-ponto-de-confirmação)
	- [Quais as fazes do protocolo de concorrência otimista?](#quais-as-fazes-do-protocolo-de-concorrência-otimista)
	- [O que é log do sistema, no contexto de banco de dados?](#o-que-é-log-do-sistema-no-contexto-de-banco-de-dados)

<br>

# Primeira parte

## Qual a diferença entre Banco de Dados e SGBD?

Banco de dados é um conjunto de informações organizadas de maneira
sistemática e que permite acesso, recuperação e gerenciamento de dados.

Já SGDB (Sistema Gerenciador de Banco de Dados) é um software
especializado que proporciona a criação, manipulação e administração de
um banco de dados. Ele fornece ferramentas e recursos para garantir a
integridade dos dados, gerenciar transações e proteger a segurança dos
dados.

<br>

## O que a cardinalidade expressa?

A cardinalidade expressa a relação entre duas entidades em um modelo de
banco de dados. Ela define o número máximo de ocorrências de uma
entidade que podem estar relacionadas com uma ocorrência de outra
entidade.

Existem três tipos básicos de cardinalidade:

**Cardinalidade 1:1 (um para um)**: Cada ocorrência de uma entidade está
relacionada com uma única ocorrência da outra entidade.

**Cardinalidade 1:N (um para muitos)**: Cada ocorrência de uma entidade
pode estar relacionada com várias ocorrências da outra entidade.

**Cardinalidade N:M (muitos para muitos)**: Cada ocorrência de uma
entidade pode estar relacionada com várias ocorrências da outra entidade
e vice-versa.

<br>

## Quais as regras básicas do modelo relacional?

**Integridade de chave primária**: Cada registro em uma tabela deve ter
uma chave primária única que o identifique de forma exclusiva.

**Integridade referencial**: Quando uma relação é criada entre tabelas,
é preciso garantir que as chaves estrangeiras correspondam a valores
presentes na tabela de referência.

**Normalização**: Consiste em dividir as informações em tabelas mais
simples e evitar a redundância de dados.

**Tipos de dados**: Cada coluna em uma tabela deve ter um tipo de dado
específico, como número inteiro, texto, data, etc.

**Domínios de valores**: É necessário especificar um conjunto de valores
válidos para cada coluna de uma tabela.

<br>

## Defina e explique o significado de chave primeira e chave estrangeira.

**Chave primária**: é uma chave única usada para identificar de forma
exclusiva cada registro em uma tabela do banco de dados. Ela garante que
não haja registros duplicados na tabela e que cada registro possua uma
identificação única. A chave primária é composta por um ou mais campos e
é usada para estabelecer relações entre tabelas.

**Chave estrangeira**: é uma chave usada para estabelecer uma relação
entre tabelas. Ela faz referência a uma chave primária em outra tabela,
criando uma ligação entre os dados. A chave estrangeira é usada para
garantir a integridade referencial, ou seja, que os dados nas duas
tabelas sejam consistentes e que não haja referências inválidas. Quando
um registro na tabela principal é excluído, todos os registros
relacionados na tabela secundária também são excluídos.

<br>

## Defina DDL, DML E DCL e seus principais comandos

O padrão ANSI possui três grupos de comandos. O primeiro, é o DDLs, ou
Data Definition Language (linguagem de definição de dados). Os DDLs são
a parte da linguagem SQL que permite a manipulação das estruturas do
banco de dados. Como, por exemplo, criar um banco, tabelas, índices,
apagar as tabelas e alterar a política de crescimento de índice. Ou
seja, os comandos que envolvem a estrutura do banco de dados relacionais
são os comandos do tipo DDL.

O segundo grupo de comandos são os chamados DML, ou Data Manipulation
Language (linguagem de manipulação de dados). Esse grupo visa gerenciar
os dados: incluindo, alterando e excluindo informações nas estruturas do
banco, como as tabelas. Além disso, realizam as consultas, buscam as
informações das estruturas e exibem para o usuário.

DCL é a sigla para Data Control Language. Trata-se de um conjunto de
comandos utilizados para gerenciar permissões e segurança em um banco de
dados. Ele permite controlar quem tem acesso aos dados e quais ações
essas pessoas podem realizar. Alguns exemplos de comandos DCL incluem
GRANT (para conceder permissões) e REVOKE (para revogar permissões).

![Principais comandos](https://imgur.com/oFQq47Z)

<br>

# Segunda parte

## Defina transação, quais as suas propriedades e apresente todas as instruções que especificam os seus limites:

Uma transação é um programa em execução que forma uma unidade lógica de
processamento de banco de dados. Suas propriedades incluem Atomicidade,
Consistência, Isolamento e Durabilidade (ACID).

**Atomicidade**: A execução de uma transação deve ser atômica, ou todas
as ações são executadas, ou nenhuma é processada;\
**Consistência**: Cada transação executada isoladamente deve preservar a
consistência do banco de dados;\
**Isolamento**: Cada transação deve ser isolada dos efeitos da execução
concorrente de outras transações;\
**Durabilidade**: Toda transação que for finalizada de forma
bem-sucedida deve persistir seus resultados em banco mesmo na presença
de falhas no sistema.

As instruções que especificam seus limites são:

**BEGIN_TRANSACTION**: inicia uma nova transação.

**COMMIT**: confirma a transação e torna as mudanças permanentes.

**ROLLBACK**: desfaz as mudanças feitas pela transação e retorna o banco
de dados ao seu estado anterior.

**SAVEPOINT**: cria um ponto de salvamento dentro de uma transação,
permitindo desfazer apenas parte da transação em vez de todas as
operações.

**SET_TRANSACTION**: define as propriedades da transação, como o nível
de isolamento.

**END_TRANSACTION**: especifica que operações de transação READ e WRITE
terminaram e marca o fim da execução da transação.

<br>

## Explique controle de concorrência no contexto de banco de dados.

Método usado em SGBDs para garantir que as transações sejam executadas
de uma forma segura e sigam as regras ACID.

<br>

## Explique o problema da atualização perdida.

Vários problemas podem acontecer quando transações simultâneas são
executadas de maneira descontrolada, como é o caso da atualização
perdida. O problema da atualização perdida ocorre quando duas transações
que acessam os mesmos itens do banco de dados possuem operações
entrelaçadas, de modo que torne incorreto o valor de algum item do banco
de dados.

<br>

## Quais os motivos que levam uma transação falhar no meio da execução? Explique cada um deles.

As falhas geralmente são classificadas como falhas de transação, sistema
e mídia. Existem vários motivos possíveis para uma transação falhar no
meio da execução:

Uma falha do computador (falha do sistema); Um erro de transação ou do
sistema; Erros locais ou condições de exceção detectadas pela transação;
Imposição de controle de concorrência; Falha de disco; Problemas físicos
e catástrofes;

<br>

## Quais operações que o gerenciador de transação precisa acompanhar na execução de uma transação?

**Início da transação**: o gerenciador precisa registrar o início da
transação e colocá-la em um estado pendente.

**Execução de operações**: o gerenciador precisa executar as operações
requisitadas, como inserções, atualizações e exclusões, de forma
coordenada e garantir a integridade dos dados.

**Validação**: o gerenciador precisa validar se as operações foram
bem-sucedidas e se a integridade dos dados foi mantida.

**Confirmação ou desfazer**: o gerenciador precisa decidir se a
transação será confirmada ou desfeita, dependendo se todas as operações
foram bem-sucedidas ou não.

**Conclusão da transação**: o gerenciador precisa registrar a conclusão
da transação e liberar os recursos alocados.

<br>

## Quando uma transação alcança seu ponto de confirmação?

Uma transação alcança seu ponto de confirmação quando todas as suas
operações que acessam o banco de dados tiverem sido executadas com
sucesso e o efeito de todas as operações de transação no banco de dados
tiver sido registrado no log.

<br>

## Quais as fazes do protocolo de concorrência otimista?

O protocolo de concorrência otimista consiste em quatro fases:

**Leitura**: um processo lê o estado compartilhado e verifica se é
possível atualizá-lo.

**Validação**: antes de atualizar, o processo verifica se nenhuma outra
transação foi executada no estado compartilhado desde a leitura.

**Atualização**: se a validação foi bem-sucedida, o processo atualiza o
estado compartilhado.

**Confirmação**: ao concluir a atualização, o processo registra a
transação como tendo sido concluída com êxito.

<br>

## O que é log do sistema, no contexto de banco de dados?

O log é um arquivo sequencial, apenas para inserção, que é mantido no
disco, de modo que não é afetado por qualquer tipo de falha, exceto por
falha de disco ou catastrófica. 