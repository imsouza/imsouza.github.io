---
layout: post
title: "Uma rápida introdução à metodologia BEM"
description: "Criado pela Yandex para fins de desenvolvimento rápido, padronização e facilididade na manutenção de código, o BEM se tornou uma das metodologias mais utilizadas..."
author: "Mateus Almeida"
image: /assets/thumbnails/img2.jpeg
tags: [CSS]
---

![Book](/assets/thumbnails/img2.jpeg)

&nbsp;

Criado pela [*Yandex*](https://yandex.com/?source=post_page){:target="_blank"} para fins de desenvolvimento rápido, padronização e facilididade na manutenção de código, o *BEM* se tornou uma das metodologias mais utilizadas no mercado *front-end*. Neste artigo, será mostrado de forma simples e objetiva como aplicá-lo em seus projetos.

&nbsp;

## O que é *BEM*?

*BEM* é uma metodologia ou padrão que é aplicado na nomenclatura de classes *CSS* para manter os projetos mais simples e organizados. A sigla *BEM* significa *Block Element Modifier*; esses três fundamentos são a base dessa metodologia cujo objetivo é fazer com que qualquer desenvolvedor possa alterar um código de um projeto de forma ágil.

&nbsp;

## Algumas regras

- Não use *ID* (Ex.: #test) nem elementos do *HTML* (Ex.: *body*, *span*...);
- Use somente classes na declaração das entidades;
- O nome das entidades é escrito usando caracteres minúsculos e números;
- Nomes compostos são separados por hífen.

&nbsp;

## Estruturação

- **.block {}** -> elemento pai
	- **.block__example {}** -> elemento filho
	- **.block__example--green {}** -> elemento filho modificado

&nbsp;

## Nomenclatura 

- Para criarmos um bloco, definimos simplesmente uma classe. Ex.: **.block**

- Para criarmos um elemento, utilizamos dois *underlines* **(_)** após o nome do bloco. Ex.: **.block_item**

- E por fim, para criarmos um *modifier*, utilizamos dois traços **(- -)** no nosso bloco ou elemento. Ex.:

> Bloco modificado: **.block--green**

> Elemento modificado: **.block__item--red**

&nbsp;

## *Block*

Um bloco é uma entidade independente, um “bloco de construção“ de uma aplicação no qual pode ser simples ou composto (contendo outros blocos dentro do mesmo). Ele deve ser único, não contendo dois com o mesmo nome no código.

![Block](https://i.imgur.com/pkv5J58.jpg)

<script src="https://gist.github.com/imsouza/3d8367116e2ef2789348a22b5ff8bd07.js"></script>

&nbsp;

## *Element*

Um elemento nada mais é do que um complemento da estrutura de um bloco, como os botões de um menu ou os itens de uma lista.

![Element](https://i.imgur.com/RFrTWfF.jpg)

<script src="https://gist.github.com/imsouza/dd74c3a59700b59a0e57614ecfdefe0b.js"></script>

Um fato importante que deve ser ressaltado é que um elemento **não** pode estar dentro de outro, como por exemplo:

<script src="https://gist.github.com/imsouza/663512143f403d0c07d9f3e02e044e58.js"></script>

Para resolver esse problema, utilize a seguinte estrutura:

<script src="https://gist.github.com/imsouza/a63a9c8998a9d92e5f2c0b1fab0cf440.js"></script>

&nbsp;

## *Modifier*

Os modificadores, como o próprio nome já diz, servem para modificar a aparência dos elementos, como por exemplo adicionar uma cor especifica a um botão. Além disso, eles podem ser usados para alterar diferentes propriedades, tais como: *opacity*, *position*, *display*, *font-weight*, *border*, etc.

![Modifier](https://i.imgur.com/bngiPKT.jpg)

<script src="https://gist.github.com/imsouza/db92208b43de48c3d0470ed41a09f6f6.js"></script>

&nbsp;

## Conclusão

A metodologia *BEM* é de fácil de implementação e entendimento. Ela pode ser usada em diferentes tipos de projetos *web*, desde um simples *site* até um sistema completo. Neste artigo foi abordada a aplicação prática da metodologia e seus fundamentos.

<br><center><i>Obrigado pela leitura!</i></center>
