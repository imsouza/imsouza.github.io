---
layout: post
title: "Os fundamentos da Programação Funcional em Python #2"
description: "Neste artigo, faremos um apanhado geral sobre o paradigma funcional, introduzindo funções de alta ordem e funções lambda em Python..."
author: "Mateus Almeida"
image: /assets/thumbnails/img8.jpeg
tags: [Python]
---

![Book](/assets/thumbnails/img8.jpeg)

&nbsp;

Neste artigo, faremos um apanhado geral sobre o paradigma funcional, introduzindo funções de alta ordem e funções *lambda* em *Python*.

&nbsp;

## Compreendendo as Funções de Alta Ordem

Funções de Alta Ordem ou no inglês *HOFs* (*High Order Functions*) são funções que podem ser usadas como argumento ou retorno de outras funções. Em *Python*, temos exemplos de *HOFs* como o **map()** e o **filter** que nos permite escrever códigos sem efeitos colaterais no paradigma funcional.

&nbsp;

## Funções *lambda*, o que são?

As funções *lambda* são largamente usadas na programação funcional. No *Python*, elas são funções que são definidas sem um nome. Diferente das funções que definimos com a palavra reservada **def**, as funções *lambda* definimos com a palavra-chave **lambda**.

É importante ressaltar sobre algumas características dessas funções, uma delas é que toda expressão dela deve ser limitada a apenas uma linha e podem ser atribuídas a uma variável. Esse tipo de função também pode ter uma quantidade qualquer de argumentos, porém, é limitada a apenas uma expressão.

Um dos principais motivos do uso de funções *lambda* é quando precisamos de uma **função anônima** que nos servirá por um curto período de tempo no código.

&nbsp;

### Funções *lambda* na prática

Criaremos um programa simples para calcular o resto da divisão de um número por 2. Iniciaremos com o código abaixo sem o uso das funções *lambda* para fins de comparação e em seguida o código com elas:

<script src="https://gist.github.com/imsouza/bcccb2e7bd12f30837c9a02e9f9dd6fe.js"></script>

Utilizando as funções *lambda*, temos:

<script src="https://gist.github.com/imsouza/da0ad51cfd7f49a965362ff7e6a2582f.js"></script>

Percebe-se que o resultado foi o mesmo, porém feito de formas diferentes. No código acima definimos uma função *lambda* onde **x** é o argumento e **x % 2** é a expressão. Essa função é anonônima, ou seja, não possui um nome como já explicado anteriormente e ela retornará um objeto de função que será atribuido a variável **resto**, podendo, assim, ser chamada normalmente no código como fazemos com as funções definidas pelo identificador **def**.

&nbsp;

## Funções *built-in*

O interpretador do *Python* possui várias funções e tipos incorporados que sempre estão disponíveis. A seguir, listaremos duas das funções que são comumente usadas com o paradigma em questão.

&nbsp;

### Filtrando resultados com o **filter()**

Na programação funcional com *Python* utilizamos as funções *lambda* em conjunto com outras funções, como é o caso do **filter()**. A função **filter()** recebe uma função e uma lista como argumentos, sendo retornada uma nova lista que irá conter os itens filtrados por sequência que a função passada avaliou como caso verdadeiro (***True***).

Por exemplo, podemos filtrar somente os números pares de uma lista dessa forma:

<script src="https://gist.github.com/imsouza/8edf9c179a4a6122715674255f5e9a8b.js"></script>

No exemplo acima, criamos uma lista com 6 elementos e em seguida atribuímos as funções ao identificador **pares** para retorno. Definimos então uma função anônima, que irá receber uma entrada **x** e retornar o resultado da expressão **x % 2 == 0** como **True** ou **False**.

O processo de filtragem é definido pela função que foi passada como primeiro argumento de **filter()**, nesse caso, a *lambda*. Assim, a função **filter()** só irá "deixar passar" para a sequência resultante aqueles elementos que retornarem **True**. No código em questão, temos como resultado a lista **[2, 4, 6]** da qual foi realizada a filtragem e só passaram os elementos cujo resto da divisão do valor de **x** por 2 é 0, ou seja, somente os pares.

&nbsp;

### Mapeando resultados com o map()

A função **map()** recebe uma função e uma lista como argumentos. A função passada em **map()** como primeiro argumento será iterada para cada elemento da lista, retornando, assim, uma nova lista.

O código abaixo mostra o exemplo da função:

<script src="https://gist.github.com/imsouza/dec10de1f7f5039fbfaff3faae1c54fa.js"></script>

No exemplo, a função irá dobrar o valor de cada elemento da lista, iterando cada um com base na função anônima passada no primeiro argumento cuja expressão é **x * 2**.

&nbsp;

## Conclusão

A programação funcional auxilia na resolução de determinados tipos de problemas por outros caminhos e, dependendo do problema, podendo chegar numa solução mais eficiente e elegante. O uso das funções *built-in* "temperam" o uso desse paradigma em *Python*, o que facilita ainda mais na construção de programas funcionais e livres de efeitos colaterais.

&nbsp;

## Referências

[An Introduction to Functional Programming with Python](https://julien.danjou.info/python-and-functional-programming/){:target="_blank"}

[Functional Programming in Python](https://stackabuse.com/functional-programming-in-python/){:target="_blank"}

[Higher-Order Functions](http://composingprograms.com/pages/16-higher-order-functions.html){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>






