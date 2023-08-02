---
layout: post
title: "Compreendendo Listas em C #3"
description: "Uma lista dinâmica duplamente encadeada é uma lista que utiliza, em sua definição, alocação dinâmica de memória e acesso encadeado dos elementos..."
author: "Mateus Almeida"
image: /assets/thumbnails/img14.jpg
tags: [Estrutura de Dados]
---

![Img](/assets/thumbnails/img14.jpg)

&nbsp;

Uma **lista dinâmica duplamente encadeada** é uma lista que utiliza, em sua definição, alocação dinâmica de memória e acesso encadeado dos elementos. Diferente da **lista dinâmica simplesmente encadeada** vista no artigo anterior, esse tipo de lista não possui dois, mas sim três campos de informação de cada elemento, sendo eles: o campo de dado, o ponteiro para o próximo nó e o ponteiro para o nó anterior.

> O que faz com que uma lista duplamente encadeada seja de fato uma lista desse tipo é justamente a existência dos ponteiros de acesso para o nó anterior e próximo.

A presença dos ponteiros **prox** e **ant** garantem com que a lista seja encadeada em dois sentidos: no convencional, ou seja, aquele que é usado para percorrer a lista do seu início até seu final, e no sentido inverso, quando percorremos a lista do seu final até seu início.

O encadeamento simples tem alguns problemas de eficiência, um deles e o mais óbvio, é que se tivermos o ponteiro do elemento que desejamos retirar, temos que percorrer a lista, elemento por elemento, para encontrar o elemento anterior. Com o encadeamento duplo temos acesso direto ao último elemento da lista, o que nos permite percorrer a lista em ordem inversa com o acesso contínuo ao elemento anterior até alcançar o primeiro elemento da lista. Mas por que percorrer inversamente até alcançar o primeiro elemento? Bem, o primeiro elemento da lista não terá nó anterior, ou seja, o ponteiro vale **NULL**. A figura abaixo exemplifica a estrutura de uma lista duplamente encadeada:

![img](https://user-images.githubusercontent.com/39147407/131585466-f67af451-ec4a-418c-aafd-bf0c4c43d869.png)

&nbsp;

## Definindo o nó

Seguindo a ilustração, o nó pode ser definido da seguinte forma:

<script src="https://gist.github.com/imsouza/f52ffa5dd0785d6e79876c344af46862.js"></script>

> A definição do tipo **No** ficará na interface (**lista.h**) do TAD Lista

&nbsp;

## Definindo estrutura da lista

Além de adicionarmos os campos anterior (**ant**) e próximo (**prox**), é interessante que a gente defina mais um campo **n** que representará o número de nós da lista. Com isso, temos:

<script src="https://gist.github.com/imsouza/88458b1208070b8a829338fb2a7b5cc0.js"></script>

> Muitas das funções que criamos para a lista simplesmente encadeada podem ser reaproveitadas para as listas duplamente encadeadas. Por esse motivo, focaremos apenas nas principais funções da lista.

&nbsp;

## Função de Criação da lista

<script src="https://gist.github.com/imsouza/d0b4dd2d34a70c5aa66fca06c0e2ec39.js"></script>

&nbsp;

## Função de inserção no início

Inserir um elemento no início da lista duplamente encadeada é uma tarefa simples e um tanto quanto similar a inserção da lista simplesmente encadeada. Contudo, temos que nos atentar em manter todos os ponteiros atualizados, pois, agora estamos trabalhando com mais de um ponteiro no encadeamento.

Basicamente, na inserção no início, o novo elemento tem como próximo elemento o antigo primeiro elemento da lista que por sua vez tem seu campo anterior (**ant**) apontando para **NULL**. Em seguida, precisamos verificar se a lista está vazia. Se for o caso, o novo elemento passa a ser também o último elemento da lista. Caso contrário, o elemento anterior do então primeiro elemento passa a ser o novo elemento. Resumidamente, o novo elemento passa a ser o primeiro da lista. A figura abaixo exemplifica esse processo:

![img](https://user-images.githubusercontent.com/39147407/131585471-2865c9a5-803c-4489-b6c4-030c5434d186.png)

Segue a implementação do código:
<script src="https://gist.github.com/imsouza/6acb7e18cbedb18d31fac07716803f83.js"></script>

&nbsp;

## Função de inserção no fim

A operação para inserirmos um novo elemento no fim da lista é parecida com a inserção no início, nos restando apenas alterar alguns ponteiros. A figura abaixo mostra uma inserção no fim da lista:

![img](https://user-images.githubusercontent.com/39147407/131585474-4e9fdebd-a999-4bfc-8992-eee48efed4d0.png)

Segue a implementação do código:
<script src="https://gist.github.com/imsouza/4363de6bcc596a44d13395bd7418a16e.js"></script>

&nbsp;

## Removendo um elemento específico da lista

Para remover um elemento da lista precisaremos fazer um certo "malabarismo" com os ponteiros. Basicamente, o que temos que fazer nessa remoção é procurar o elemento a ser removido na lista e mudar os valores de alguns ponteiros.

> A processo de procura do elemento pode ser feito de diversas maneiras, inclusive usando a própria função de busca definida anteriormente na lista simplesmente encadeada.

Para implementarmos essa função, podemos considerar um ponteiro **atual** que representa o ponteiro do elemento que desejamos remover. Com isso, podemos fazer com que o nó anterior (**ant**) passe a apontar para o ponteiro próximo (**prox**), e o próximo nó passe apontar para o anterior. Exemplificando:

<script src="https://gist.github.com/imsouza/7595d13bca2d1341edc651f0b006939c.js"></script>

É importante ressaltar que, se **atual** apontar para um elemento no meio da lista, as duas atribuições acima irão servir para encadear a lista sem problemas. Porém, se **atual** for um elemento no extremo da lista, devemos considerar outras condições. Seguindo esta lógica, se **atual** for o último elemento, não será possível escrever **atual->prox->ant**, pois, **atual->prox** vale **NULL**. Da mesma forma, se **atual** apontar para o primeiro elemento, não é possível escrever **atual->ant->prox**. Não podemos esquecer de atualizar o valor da lista pois o primeiro e/ou último elemento será removido. Uma possível implementação e a seguinte:

<script src="https://gist.github.com/imsouza/c0576f4eb94c11b827c8177f04df1f97.js"></script>

&nbsp;

## Código final do TAD Lista

### Lista.h
<script src="https://gist.github.com/imsouza/60985b4e295838de04322cdc323cc0b4.js"></script>

&nbsp;

### Lista.c
<script src="https://gist.github.com/imsouza/f77c3ab231a5868ef5a2bf3cb536acbe.js"></script>

&nbsp;

### Cliente.c
<script src="https://gist.github.com/imsouza/0a14a2c381106134e38868f70c5c576e.js"></script>

&nbsp;

## Quando usar?

Em geral, usamos esse tipo de lista nas seguintes situações:

- Não há necessidade de garantir um espaço mínimo para a execução da aplicação;
- Inserção e remoção em lista ordenada são as operações mais frequentes;
- Tamanho máximo da lista não é definido;
- Necessidade de acessar a informação de um elemento anterior.

&nbsp;

## Conclusão

Nessa série de artigos foram apresentadas, de maneira teórica e prática, as listas simplesmente e duplamente encadeadas, suas vantagens e quando aplicá-las em um projeto. Para os curiosos, encorajo lerem sobre as listas duplamente e simplesmente encadeadas circulares, pois, são tópicos que não foram abordados nos artigos em questão e que podem servir como material complementar no estudo de listas.

&nbsp;

## Referências

[Estrutura de Dados Descomplicada - Em Linguagem C , por André Backes](https://www.amazon.com.br/Estrutura-Dados-Descomplicada-Linguagem-Backes/dp/8535285237){:target="_blank"}

[Listas Encadeadas - W. Celes e J. L. Rangel](https://www.ic.unicamp.br/~ra069320/PED/MC102/1s2008/Apostilas/Cap10.pdf){:target="_blank"}

[Criando uma lista encadeada em C - Israel Junior](https://medium.com/aprendacpp/criando-uma-lista-encadeada-em-c-17e7f5692f36){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>
