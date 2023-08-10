---
layout: post
title: "Automatizando tarefas com Gulp"
description: "Lidar diariamente com tarefas maçantes é um pesadelo para qualquer desenvolvedor. Por sorte, atualmente, existem inúmeras ferramentas no mercado que possibilitam a..."
author: "Mateus Almeida"
image: /assets/thumbnails/img3.jpeg
tags: [Automação]
---

![Book](/assets/thumbnails/img3.jpeg)

&nbsp;

Lidar diariamente com tarefas maçantes é um pesadelo para qualquer desenvolvedor. Contudo, existem inúmeras ferramentas no mercado que possibilitam a resolução desse problema de forma simples e descomplicada. Neste artigo, falaremos sobre o ***Gulp***, uma ferramenta poderosa e de fácil uso quando o assunto é automação de tarefas.

&nbsp;

## Instalando o *Gulp*

Antes de tudo, é preciso ter o ***Node*** e o ***Npm*** instalado em sua máquina, pois, são peças fundamentais para o funcionamento e instalação do *Gulp*. Caso não tenha, acesse o *site* oficial para a instalação [clicando aqui](https://nodejs.org/en/){:target="_blank"}.

Assim que você tiver o *Node* e o *Npm* instalados, partiremos para a instalação do *Gulp*, iniciando pelo seguinte comando:

**npm install -g gulp-cli**

Esse comando irá instalar de forma global **-g** o **gulp-cli** para ser utilizado em qualquer projeto.

&nbsp;

## Instalando dependências no projeto

Primeiramente, criaremos o arquivo **package.json**, no qual ficarão armazenadas as informações do projeto e das dependências instaladas nele. Para isso, utilize o comando **npm init**. Será exibidos no terminal vários campos a serem preenchidos com as respectivas informações do projeto. No final, teremos um arquivo desse modelo:

```
{
  "name": "gulp-example",
  "version": "1.0.0",
  "description": "Gulp Example",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Mateus Almeida",
  "license": "ISC"
}
```

Com o arquivo **package.json** já configurado, podemos instalar a dependência do *Gulp* nele, utilizando o seguinte comando:

**npm install gulp --save-dev**

Essa é a estrutura atual do nosso projeto:

```
|- gulp-example/
  |- dist/
  |- node_modules/
  |- src/
    |- css/
      style.css
    |- js/
      index.js
    index.html
```

Ao abrir a pasta **node_modules/**, você notará uma série de outras dependências. Isso acontece porque o Gulp precisa delas pra funcionar; o mesmo acontece com todas as outras que você for instalar em seu projeto.

Ao abrir o arquivo **package.json**, você verá que a dependência do *Gulp* estará listada como **devDependences**

```
{
  "name": "gulp-example",
  "version": "1.0.0",
  "description": "Gulp Example",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Mateus Almeida",
  "license": "ISC",
  "devDependencies": {
    "gulp": "^4.0.2"
  }
}
```

&nbsp;

## Criando o arquivo de configuração **gulpfile.js**

O próximo passo agora é criar o arquivo **gulpfile.js** na raiz do nosso projeto. Ele é a base para adicionarmos as tarefas que serão executadas pelo *Gulp*, a estrutura ficará da seguinte forma:

```
|- gulp-example/
  |- dist/
  |- node_modules/
  |- src/
    |- css/
      style.css
    |- js/
      index.js
    index.html
  gulpfile.js
```

&nbsp;

## Criando primeira tarefa

Primeiramente, precisamos importar os métodos base do *Gulp* para essa tarefa em questão, na qual consiste em apenas mover os arquivos com extensão **.html** localizadas na pasta **src/** para a pasta **dist** que é a pasta pública para o acesso dos usuários.

Importaremos, inicialmente, os métodos **src** e **dest** do *Gulp*, utilizando o seguinte comando:

<script src="https://gist.github.com/imsouza/64cbcbfbebca79e4e2a3c22d00bf35cf.js"></script>

Agora, para mover os arquivos com extensão **.html**, utilizaremos a seguinte função:

<script src="https://gist.github.com/imsouza/61d44ee6a16c7b5887329ec9a0cfba86.js"></script>

A função **html()** procurará por todos arquivos terminados em **.html** utilizando o método **src** e o enviará para a pasta **dist** utilizando o método **dest**.

Agora, exportaremos essa tarefa com o seguinte comando:

<script src="https://gist.github.com/imsouza/e07180342fd55b7040c55ab645a8ce2c.js"></script>

O arquivo final ficará desse modelo:

<script src="https://gist.github.com/imsouza/1c112e79633c6e67aa73b23eb3955c79.js"></script>

Com tudo pronto, abra o terminal na raiz do projeto e digite **gulp**. Será retornado algo semelhante a isso:

```
Using gulpfile ~/Documents/example/gulpfile.js
Starting 'default'...
Finished 'default' after 90 ms
```

Ao abrir a pasta **dist/**, notará que o arquivo **index.html** estará lá.

```
|- gulp-example/
  |- dist/
    index.html
  |- node_modules/
  |- src/
    |- css/
      style.css
    |- js/
      index.js
    index.html
  gulpfile.js
```

&nbsp;

## Lidando com métodos de execução de tarefas (*series* e *parallel*)

Ter o controle de como nossas tarefas serão executadas é algo muito importante, para isso, trataremos de uma forma simples como funciona os dois métodos de execução de tarefas do *Gulp*:

O método **series()** combina tarefas e as executa em uma ordem específica, uma seguida da outra. Ex.:

<script src="https://gist.github.com/imsouza/d3d54e3de88650f912d138e160d4fb7f.js"></script>

Já o método **parallel()** é usado para executar diferentes tarefas simultaneamente, não dependendo, assim, uma das outras. Ex.:

<script src="https://gist.github.com/imsouza/3e4c0f140609b9b1821fd649edc6bda5.js"></script>

Faremos uma comparação da saída gerada pelos dois métodos, começando pelo em série:

```
Using gulpfile ~/Documents/example/gulpfile.js
Starting 'default'...
Starting 'firstTask'...
Finished 'firstTask' after 51 ms
Starting 'secondTask'...
Finished 'secondTask' after 8.4 ms
Finished 'default' after 65 ms
```

Percebe-se que primeiro foi executado a função **firstTask()**; logo depois, ela foi finalizada. Em seguida foi executada a função **secondTask()** e, logo depois, também foi finalizada. Ou seja, as tarefas foram executadas uma de cada vez seguindo a ordem que foram adicionadas no método **series()**.

Agora, analisaremos a saída do método em paralelo:

```
Using gulpfile ~/Documents/example/gulpfile.js
Starting 'default'...
Starting 'firstTask'...
Starting 'secondTask'...
Finished 'firstTask' after 50 ms
Finished 'secondTask' after 51 ms
Finished 'default' after 56 ms
```
Nota-se que as funções **firstTask()** e **secondTask()** foram executadas e finalizadas simultaneamente, ou seja, independentemente da ordem que elas forem adicionadas no método **parallel()**, elas iniciarão e terminarão juntas, não dependendo, assim, que uma tarefa precise terminar para ser executada.

&nbsp;

## Renomeando e minificando arquivos

Minificar arquivos é uma tarefa bastante importante quando o assunto é desempenho do projeto. Para isso, utilizaremos em nosso projeto as seguintes dependências: **gulp**, **gulp-rename**, **gulp-uglify** e **gulp-uglifycss**

Para instalá-las, utilize o seguinte comando:

**npm install gulp-rename gulp-uglify gulp-uglifycss --save-dev**

Com todas as dependências já instaladas, iniciaremos importando todas elas em nosso arquivo **gulpfile.js**:

<script src="https://gist.github.com/imsouza/f0c3e098b8c06e97a30d7875b7c72855.js"></script>

Logo em seguida, adicionaremos a tarefa de renomear e minificar os arquivos *JavaScript*:

<script src="https://gist.github.com/imsouza/3bac372b92363f5abe0bd1526a19964f.js"></script>

Essa função irá procurar todos arquivos terminados em **.js** na pasta **src/js**. Em seguida, executará a função **minifyJS()** que será o responsável por minificar todo o arquivo; feito isso, o arquivo será renomeado utilizando a função **rename()** e passado como parâmetro um objeto, no qual é o próprio nome da extensão do arquivo que, no nosso caso, foi utilizado **.min.js** apenas por boas práticas devido ele ser um arquivo minificado. Por fim, enviaremos para a pasta **dist/js**.

Faremos o mesmo agora com os arquivos *CSS*, fazendo as alterações necessárias, pois o funcionamento é o mesmo que o da função anterior:

<script src="https://gist.github.com/imsouza/a118af6bdab43eae509b7288ec25c65c.js"></script>

Com tudo feito, esse é o nossso arquivo **gulpfile.js** depois de pronto:

<script src="https://gist.github.com/imsouza/8070b25499aa6b52202f6647541a4223.js"></script>

Por fim, utilize novamente o comando **gulp** na raiz do projeto para executar as tarefas. A estrutura final do nosso projeto ficará da seguinte forma:

```
|- gulp-example/
  |- dist/
    |- css/
      style.min.css
    |- js/
      index.min.js
    index.html
  |- node_modules/
  |- src/
    |- css/
      style.css
    |- js/
      index.js
    index.html
  gulpfile.js
```

&nbsp;

## Conclusão

Neste artigo foi abordado de forma simples e direta uma introdução sobre a ferramenta *Gulp* e como ela pode ajudar na automação de tarefas. Com o *Gulp* é possível criar quantas tarefas quisermos para diferentes finalidades em vários tipos de projetos.

<br><center><i>Obrigado pela leitura!</i></center>