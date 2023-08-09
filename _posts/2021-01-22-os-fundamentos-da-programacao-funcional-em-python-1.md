---
layout: post
title: "Os fundamentos da Programação Funcional em Python #1"
description: "Meu primeiro contato com o paradigma funcional foi na faculdade bem no começo do curso e foi tempo suficiente para eu me encantar por essa maravilhosa forma de programar..."
author: "Mateus Almeida"
image: /assets/thumbnails/img7.jpeg
tags: [Python]
---

![Book](/assets/thumbnails/img7.jpeg)

&nbsp;

A programação funcional tem o poder de tornar nossos códigos mais simples além de nos ajudar a reduzir seus efeitos colaterais. Este artigo terá como foco introduzir os principais conceitos da programação funcional com *Python*.

&nbsp;

## Por que *Python*?

A escolha do *Python* para abordar esse tópico é óbvia, sua sintaxe é simples, de fácil entendimento e menos complexa para iniciantes do que outras linguagens puramente funcionais como *Haskell*, além disso é uma excelente ferramenta pra introduzir um novo conhecimento de forma simples, clara e objetiva.

&nbsp;

## Contextualizando a Programação Funcional

Para começo de conversa precisamos contextualizar algumas coisas antes de prosseguirmos de fato para a prática, uma dessas coisas são os paradigmas, algo que iremos abordar em todo artigo.

Um paradigma de programação é uma forma de **classificar** linguagens com base em suas funcionalidades e estilo de código, tais funcionalidades refletem diretamente em como o código será estruturado no desenvolvimento de programas.

A **Programação Funcional** (PF) é um paradigma, assim como a **Programação Orientada a Objetos** (POO) ou a **Programação Estruturada**. O paradigma funcional é **declarativo**, ou seja, refere-se ao fato de usar **funções e/ou expressões** ao invés de ditar um passo a passo para a resolução do problema.

&nbsp;

## Imutabilidade, a alma do paradigma funcional

Nesse paradigma de programação tratamos apenas de funções **matemáticas**, evitando, assim, a alteração de estado e **mutabilidade** de dados. Na programação funcional um número sempre será ele mesmo, independente de onde, como ou quando ele será usado no código. Um fato da imutabilidade é que, em uma expressão matemática, dado um valor *x* teremos sempre o mesmo retorno da função. Por exemplo: se temos a expressão, *f(x) = x + 1*, sendo *x = 2*, o resultado dessa função sempre será 3, independente de quantas vezes o *x* for passado. O número passado para *x* não muda o seu valor, ele continua imutável, o que define o conceito da imutabilidade das funções.

&nbsp;

## Funções puras

Os códigos escritos no paradigma funcional seguem uma regra: as funções são projetadas para **não terem efeitos colaterais**. É algo que complementa o conceito de imutabilidade, ou seja, retornam sempre o mesmos valores para os mesmos parâmetros e não geram mudanças ou alterações em outras partes do código, essas funções são chamadas de puras.

&nbsp;

### Funções puras e impuras na prática

O código abaixo possui uma função impura por conta de um efeito colateral que faz com que, quando é passada uma lista para a função, ela remove o item, mas altera a lista original, assim, o argumento que é passado é modificado diretamente pela função. O método **pop** é o modo não funcional para obter tal resultado.

<script src="https://gist.github.com/imsouza/fb7b35f7a0c72f9bb3aa11b465930e39.js"></script>

Agora um exemplo de uma função pura, da qual não se usa o método anterior:

<script src="https://gist.github.com/imsouza/a90082a79001ca208a1d301d5fb706e0.js"></script>

A função acima também recebe uma lista como parâmetro e a retorna sem o último elemento e sem modificar a lista original. 

Então como funciona o retorno dessa função? É retornada uma cópia da lista que contém as modificações feitas pela função, neste caso, a remoção do último item e com isso a lista permanece em seu estado original.

&nbsp;

## Conclusão

Este artigo foi uma introdução sobre a Programação Funcional em *Python* e suas principais características, na próxima postagem aprofundaremos em alguns outros conceitos fundamentais sobre o paradigma.

&nbsp;

## Referências

[An Introduction to Functional Programming with Python](https://julien.danjou.info/python-and-functional-programming/){:target="_blank"}

[Functional Programming in Python](https://stackabuse.com/functional-programming-in-python/){:target="_blank"}

[Higher-Order Functions](http://composingprograms.com/pages/16-higher-order-functions.html){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>
