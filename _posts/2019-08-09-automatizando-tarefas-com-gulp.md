---
layout: post
title: "Automatizando tarefas com Gulp"
author: "Mateus Almeida"
---

Lidar diariamente com tarefas maçantes é um pesadelo para qualquer desenvolvedor. Por sorte, atualmente, existem inúmeras ferramentas no mercado que possibilitam a resolução desse problema de forma simples e descomplicada. Neste artigo, falarei sobre o Gulp, uma ferramenta poderosa e de fácil uso quando o assunto é automação de tarefas.

<br>

## Instalando o Gulp

Antes de tudo, é preciso ter o Node e o Npm instalado em sua máquina, pois eles são peças fundamentais para o funcionamento e instalação do Gulp. Caso não tenha, acesse o site oficial para a instalação [clicando aqui](https://nodejs.org/en/){:target="_blank"}.

Assim que você tiver o Node e o Npm instalados, partiremos logo para a instalação do Gulp, iniciando pelo seguinte comando:

```npm install -g gulp-cli```

Esse comando vai instalar de forma global ```-g``` o ```gulp-cli``` para ser utilizado em qualquer projeto.

<br>

## Instalando dependências no projeto

Primeiramente, criaremos o arquivo <i>package.json</i>, no qual ficarão armazenadas as informações do projeto e das dependências instaladas nele. Para isso, utilize o comando ```npm init```. Serão exibidos no terminal vários campos a serem preenchidos com as respectivas informações do projeto. No final, teremos um arquivo desse modelo:

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

Com o arquivo <i>package.json</i> já configurado, podemos instalar a dependência do Gulp nele, utilizando o seguinte comando:

```npm install gulp --save-dev```

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

Se você abrir a pasta <i>node_modules/</i>, notará uma série de outras dependências. Isso acontece porque o Gulp precisa delas pra funcionar; o mesmo acontece com todas as outras que você for instalar em seu projeto.

Ao abrir o arquivo <i>package.json</i>, você verá que a dependência do Gulp estará listada como <i>"devDependences"</i>

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

<br>

## Criando o arquivo de configuração "gulpfile.js"

O próximo passo agora é criar o arquivo <i>gulpfile.js</i> na raiz do nosso projeto. Ele é a base para adicionarmos as tarefas que serão executadas pelo Gulp, a estrutura ficará da seguinte forma:

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

<br>

## Criando nossa primeira tarefa

Primeiramente, precisamos importar os métodos base do Gulp para essa tarefa em questão, na qual consiste em apenas mover os arquivos com extensão <i>.html</i> localizadas na pasta <i>src/</i> para a pasta <i>dist</i> que é a pasta pública para o acesso dos usuários.

Importaremos, inicialmente, os métodos <i>src</i> e <i>dest</i> do Gulp, utilizando o seguinte comando:

```
const { src, dest} = require('gulp');
```

Agora, para mover os arquivos com extensão <i>.html</i>, utilizaremos a seguinte função:

```
function html() {
  return src('src/*.html')
    .pipe(dest('dist/'));
}
```

A função <i>html()</i> procurará por todos arquivos terminados em <i>.html</i> utilizando o método <i>src</i> e o enviará para a pasta <i>dist</i> utilizando o método <i>dest</i>.

Agora, exportaremos essa tarefa com o seguinte comando:

```
exports.default = html;
```

O arquivo final ficará desse modelo:

```
const { src, dest} = require('gulp');

function html() {
  return src('src/*.html')
    .pipe(dest('dist/'));
}

exports.default = html;
```

Com tudo pronto, abra o terminal na raiz do projeto e digite simplesmente ```gulp```. Será retornado algo semelhante a isso:

```
Using gulpfile ~/Documents/example/gulpfile.js
Starting 'default'...
Finished 'default' after 90 ms
```

Agora, se você abrir a pasta <i>dist/</i>, notará que o arquivo <i>index.html</i> estará lá.

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

<br>

## Lidando com métodos de execução de tarefas (series e parallel)

Ter o controle de como nossas tarefas serão executadas é algo muito importante, para isso, explicarei de uma forma simples como funciona os dois métodos de execução de tarefas do Gulp.

O método <i>series()</i> combina tarefas e as executa em uma ordem específica, uma seguida da outra. Ex.:

```
const { series } = require('gulp');

function firstTask() {
  // task 
}

function secondTask() {
  // task
}

exports.default = series(firstTask, secondTask);
```

Já o método <i>parallel()</i> é usado para executar diferentes tarefas simultaneamente, não dependendo, assim, uma das outras. Ex.:

```
const { parallel } = require('gulp');

function firstTask() {
  // task
}

function secondTask() {
  // task
}

exports.default = parallel(firstTask, secondTask);
```

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

Percebe-se que primeiro foi executado a função <i>firstTask()</i>; logo depois, ela foi finalizada. Em seguida foi executada a função <i>secondTask()</i> e, logo depois, também foi finalizada. Ou seja, as tarefas foram executadas uma de cada vez seguindo a ordem que foram adicionadas no método <i>series()</i>

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
Nota-se que as funções <i>firstTask()</i> e <i>secondTask()</i> foram executadas e finalizadas simultaneamente, ou seja, independentemente da ordem que elas forem adicionadas no método <i>parallel()</i>, elas iniciarão e terminarão juntas, não dependendo, assim, que uma tarefa precise terminar para ser executada.

<br>

## Renomeando e minificando arquivos

Minificar arquivos é uma tarefa bastante importante quando o assunto é desempenho do projeto. Para isso, utilizaremos em nosso projeto as seguintes dependências: <i>gulp</i>, <i>gulp-rename</i>, <i>gulp-uglify</i> e <i>gulp-uglifycss</i>

Para instalá-las, utilize o seguinte comando:

```
npm install gulp-rename gulp-uglify gulp-uglifycss --save-dev
```

Com todas as dependências já instaladas, iniciaremos importando todas elas em nosso arquivo <i>gulpfile.js</i>:

```
const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');
const minifyJS = require('gulp-uglify');
const minifyCSS = require('gulp-uglifycss');
```

Logo em seguida, adicionaremos a tarefa de renomear e minificar os arquivos JavaScript:

```
function javaScript() {
  return src('src/js/*.js')
    .pipe(minifyJS())
    .pipe(rename({extname: '.min.js'}))
    .pipe(dest('dist/js/'));
}
```

Essa função irá procurar todos arquivos terminados em <i>.js</i> na pasta <i>src/js</i>. Em seguida, executará a função <i>minifyJS()</i> que será o responsável por minificar todo o arquivo; feito isso, o arquivo será renomeado utilizando a função <i>rename()</i> e passado como parâmetro um objeto, no qual é o próprio nome da extensão do arquivo que, no nosso caso, foi utilizado <i>.min.js</i> apenas por boas práticas devido ele ser um arquivo minificado. Por fim, enviaremos para a pasta <i>dist/js</i>.

Faremos o mesmo agora com os arquivos CSS, fazendo as alterações necessárias, pois o funcionamento é o mesmo que o da função anterior:

```
function css() {
  return src('src/css/*.css')
    .pipe(minifyCSS())
    .pipe(rename({extname: '.min.css'}))
    .pipe(dest('dist/css/'))
}
```

Com tudo feito, esse é o nossso arquivo <i>gulpfile.js</i> depois de pronto:

```
const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');
const minifyJS = require('gulp-uglify');
const minifyCSS = require('gulp-uglifycss');

function html() {
  return src('src/*.html')
    .pipe(dest('dist/'));
}

function javaScript() {
  return src('src/js/*.js')
    .pipe(minifyJS())
    .pipe(rename({extname: '.min.js'}))
    .pipe(dest('dist/js/'));
}

function css() {
  return src('src/css/*.css')
    .pipe(minifyCSS())
    .pipe(rename({extname: '.min.css'}))
    .pipe(dest('dist/css/'))
}

exports.default = parallel(html, javaScript, css);
```

Por fim, utilize novamente o comando ```gulp``` na raiz do projeto para executar as tarefas. A estrutura final do nosso projeto ficará da seguinte forma:

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

<br>

## Conclusão

Neste artigo, tentei abordar de forma simples e direta uma introdução sobre a ferramenta Gulp e como ela pode ajudar na automação de tarefas. Com o Gulp, é possível criar quantas tarefas quiser para diferentes finalidades em seu projeto. Muitas delas eu não citei no tutorial para não ficar algo muito grande, como, por exemplo, a compilação de Sass para CSS utilizando as dependências <i>gulp-sass</i> e <i>node-sass</i>, ambas encontradas no site oficial do [Npm](https://www.npmjs.com/){:target="_blank"}, juntamente com uma documentação explicando como usar, assim como todas as outras dependências que você pode utilizar em seus projetos.


<br><center><i>Obrigado pela leitura!</i></center>
