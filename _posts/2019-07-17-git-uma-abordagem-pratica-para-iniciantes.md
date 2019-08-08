---
layout: post
title: "Git, uma abordagem prática para iniciantes"
author: "Mateus Almeida"
---

Quando falamos em Desenvolvimento de Software, o Git é uma ferramenta indispensável para o controle de versão e gerenciamento de código. Ele foi desenvolvido por Linus Torvalds em 2005 e é utilizado nos dias atuais por milhões de empresas de tecnologia, se tornando um dos recursos mais importantes para o dia a dia de qualquer desenvolvedor.

<br>

## Instalação

Caso não tenha o Git instalado no seu computador, acesse o site oficial [clicando aqui](https://git-scm.com/downloads/){:target="_blank"} para a realização do download.

Para ter certeza de que o Git foi instalado corretamente em sua máquina, execute o comando ```git --version```; caso ele mostre a versão atual da ferramenta, a instalação ocorreu sem problemas.

<br>

## Configuração básica

Após realizar a instalação do Git, chegou a hora de configurá-lo. Abra o terminal de seu sistema operacional e siga os passos a seguir:

#### Configurando username e e-mail

```git config --global user.name "Seu Nome"```

```git config --global user.email seuemail@gmail.com```

#### Configurando editor

```git config --global core.editor nome-do-editor```

<br>

## Uma pequena introdução ao GitHub

Antes de irmos para a prática de fato, é necessário que você conheça o GitHub, para que ele serve e como usar.

#### Mas afinal, o que é GitHub?

Basicamente, o GitHub é uma plataforma de hospedagem de código-fonte no qual possui um sistema de controle de versão usando o Git. Ele permite que desenvolvedores de todo o mundo hospedem seus projetos, sendo a plataforma de hospedagem de código mais usada do mundo, principalmente quando o assunto é projetos Open Source.

#### Criação da conta

Para criar uma conta no GitHub, acesse o site oficial [clicando aqui](https://github.com/){:target="_blank"}.

#### Criação do repositório

Após se registrar, criaremos um repositório para testar os comandos do Git; clique no símbolo de <i>+</i>(Adição) ao lado da foto de perfil e vá em <i>New repository</i>. Abrirá uma janela como esta:

![Criação do Repositório no Github](https://i.imgur.com/4XONOUG.png)

nela você irá preencher o seu repositório com as informações desejadas, tais como: nome, descrição, licença e outros. Após o preenchimento, clique em <i>Create repository</i> para que o repositório seja criado definitivamente, como é mostrado na imagem abaixo:

![Finalização da criação do Repositório no Github](https://i.imgur.com/RKCnvJN.png)

<br>

## Primeiros passos com o Git

Com o repositório já criado, iniciaremos com os principais comandos básicos do Git.

#### Termos básicos de um repositório Git

- <i>Branch</i>: um ramo/divisão do projeto, Ex: uma branch para versão de testes e outra branch para a versão principal;
- <i>Master</i>: branch principal do repositório;
- <i>Clone</i>: cópia de um repositório <i>Git</i> remoto para o diretório local;
- <i>Fetch ou Pull</i>: pega as últimas atualizações de um repositório remoto;
- <i>Push</i>: envia os arquivos locais para um repositório remoto.

#### Fluxo de trabalho de arquivos no Git

Os repositórios locais consistem em três "árvores" mantidas pelo Git.

A primeira é a sua <i>Working Directory</i> (diretório de trabalho) que contém os arquivos vigentes;
a segunda é a <i>Index</i> (índice), que funciona como uma área temporária;
e por último a <i>HEAD</i> (cabeça) que aponta para o último <i>commit</i> (confirmação) que foi realizado.

![Git três árvores](https://i.imgur.com/5w95Hag.png)

#### Criando um diretório

O primeiro passo é a criação de um diretório para o projeto. Para isso, utilize o comando ```mkdir nome-do-diretorio``` no terminal. Após a criação do diretório, adicione todos os arquivos do projeto dentro do mesmo, no meu caso adicionarei um ```index.html``` como exemplo.

```
<!DOCTYPE html>
<html>

<head>
  <title>Git</title>
</head>

<body>
  <h3>...</h3>
</body>

</html>
```

#### Inicializando o Git

Dentro do diretório criado, utilize o comando ```git init```, este comando é responsavel por criar um repositório local para o projeto em sua máquina.

```Initialized empty Git repository in /home/imsouza/git-test/.git/```

#### Visualizando alterações

Para visualizar qualquer alteração nos arquivos, utilize o comando ```git status```, esse comando exibe uma lista de arquivos alterados e que ainda não foram adicionados.

![Output do comando git status](https://i.imgur.com/M2wAHbW.png)

#### Adicionando arquivos

O comando ```git add nome-do-arquivo``` adiciona os arquivos do diretório local para o índice.

#### Adicionando múltiplos arquivos

Para adicionar todos arquivos de uma só vez no índice, utilize o comando ```git add -A```

#### Fazendo o primeiro commit

O comando ```git commit``` é usado para gravar alterações dos arquivos no HEAD.

Use: ```git commit -m "mensagem do commit"``` para realização do commit.

#### Conexão com o repositório remoto

Para se conectar com o repositório remoto criado no GitHub, utilize o seguinte comando:

```git remote add origin https://github.com/imsouza/test-git.git```

Obs: altere a url para a do seu repositório remoto.

#### Enviando arquivos para o repositório remoto

Para realizar o envio dos arquivos locais para o repositório remoto, utilize o seguinte comando:

```git push origin master```

#### Exibindo lista de logs

Ao executar o comando ```git log```, será exibido uma lista com detalhes sobre as alterações feitas no projeto.

![Output do comando git log](https://i.imgur.com/fRAzFqX.png)

#### Clonando repositórios

O comando ```git clone``` é usado para clonar um repositório remoto para o seu ambiente de trabalho local. Use o seguinte comando:

```git clone url-do-repositorio```.

<br>

## Conclusão

Neste artigo, vimos uma introdução básica do Git, seus comandos e a importância de aprender a tecnologia que é lider no mercado quando o assunto é controle de versões. Caso queira se aprofundar, acesse a documentação oficial [clicando aqui](https://git-scm.com/book/pt-br/v1/Primeiros-passos-Sobre-Controle-de-Vers%C3%A3o){:target="_blank"}.


<br><center><i>Obrigado pela leitura!</i></center>
