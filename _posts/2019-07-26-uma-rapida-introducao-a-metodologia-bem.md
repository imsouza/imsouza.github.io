---
layout: post
title: "Uma rápida introdução à metodologia BEM"
description: "Criado pela Yandex para fins de desenvolvimento rápido, padronização e facilididade na manutenção de código, o BEM se tornou uma das metodologias mais utilizadas..."
author: "Mateus Almeida"
image: /assets/thumbnails/img2.jpeg
tags: [CSS]
---

![Book](/assets/thumbnails/img2.jpeg)

<br>

Criado pela [Yandex](https://yandex.com/?source=post_page){:target="_blank"} para fins de desenvolvimento rápido, padronização e facilididade na manutenção de código, o BEM se tornou uma das metodologias mais utilizadas no mercado front-end. Neste artigo, mostrarei de forma simples e objetiva como aplicá-lo em seus projetos.

<br>

## O que é BEM?

BEM é uma metodologia ou padrão que é aplicado na nomenclatura de classes CSS para manter nossos projetos simples e organizados. A sigla BEM significa *Block Element Modifier*; esses três fundamentos são a base dessa metodologia cujo objetivo é fazer com que qualquer desenvolvedor possa alterar um código de um projeto de forma rápida e fácil.

<br>

## Algumas regras

- Não use ID (ex: #test) nem elementos do HTML (ex: body, span...);
- Use somente classes na declaração das entidades;
- O nome das entidades é escrito usando caracteres minúsculos e números;
- Nomes compostos são separados por hífen.

<br>

## Estruturação

- ```.block {}``` -> <i>elemento pai</i>
	- ```.block__example {}``` -> <i>elemento filho</i>
	- ```.block__example--green {}``` -> <i>elemento filho modificado</i>

<br>

## Nomenclatura 

- Para criarmos um bloco, definimos simplesmente uma classe. Ex.: ```.block```

- Para criarmos um elemento, utilizamos dois underlines *(_)* após o nome do bloco. Ex.: ```.block_item```

- E por fim, para criarmos um modifier, utilizamos dois traços <i>(- -)</i> no nosso bloco ou elemento. Ex.:

	<i>Bloco modificado:</i> ```.block--green```

	<i>Elemento modificado:</i> ```.block__item--red```

<br>

## Block

Um bloco é uma entidade independente, um “bloco de construção“ de uma aplicação no qual pode ser simples ou composto (contendo outros blocos dentro do mesmo). Ele deve ser único, não contendo dois com o mesmo nome no seu código.

![Block](https://i.imgur.com/pkv5J58.jpg)

<script src="https://gist.github.com/imsouza/3d8367116e2ef2789348a22b5ff8bd07.js"></script>

<br>

## Element

Um elemento nada mais é do que um complemento da estrutura de um bloco, como os botões de um menu ou os itens de uma lista.

![Element](https://i.imgur.com/RFrTWfF.jpg)

<script src="https://gist.github.com/imsouza/dd74c3a59700b59a0e57614ecfdefe0b.js"></script>

Um fato importante que deve ser ressaltado é que um elemento **não** pode estar dentro de outro, como por exemplo:

<script src="https://gist.github.com/imsouza/663512143f403d0c07d9f3e02e044e58.js"></script>

Para resolver esse problema, utilize a seguinte estrutura:

<script src="https://gist.github.com/imsouza/a63a9c8998a9d92e5f2c0b1fab0cf440.js"></script>

<br>

## Modifier

Os modificadores, como o próprio nome já diz, servem para modificar a aparência dos elementos, como por exemplo adicionar uma cor especifica a um botão. Além disso, eles podem ser usados para alterar diferentes propriedades, tais como: *opacity*, *position*, *display*, *font-weight*, *border*, etc.

![Modifier](https://i.imgur.com/bngiPKT.jpg)

<script src="https://gist.github.com/imsouza/db92208b43de48c3d0470ed41a09f6f6.js"></script>

<br>

## Conclusão

A metodologia BEM é super fácil de compreender e implementar. Ela pode ser usada em diferentes tipos de projetos web, desde um simples site até um sistema completo. No começo, a sintaxe pode parecer estranha (eis o motivo dela ser amada por uns e odiada por outros), mas, em pouco tempo, você se acostuma com a ideia e já estará aplicando naturalmente essa metodologia em seus projetos, facilitando, assim, a escrita e a leitura de códigos, além de uma melhoria considerável no desempenho e desenvolvimento do projeto.


<br><center><i>Obrigado pela leitura!</i></center>
