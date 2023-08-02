---
layout: post
title: "Compreendendo Listas em C #1"
description: "Quando falamos de listas vários exemplos podem nos vir em mente como, por exemplo, uma lista de compras, uma lista telefônica ou até mesmo os dias da semana..."
author: "Mateus Almeida"
image: /assets/thumbnails/img11.jpg
tags: [Estrutura de Dados]
---

![Birds](/assets/thumbnails/img11.jpg)

&nbsp;

Quando falamos de listas vários exemplos podem nos vir em mente como, por exemplo, uma lista de compras, uma lista telefônica ou até mesmo os dias da semana. Na Ciência da Computação, uma lista é uma estrutura linear utilizada para armazenar e organizar os dados em um computador. A capacidade da lista é finita, podendo possuir elementos repetidos ou não.

&nbsp;

## Tipos de listas

Existem inúmeras representações e implementações diferentes para uma lista na linguagem de programação escolhida. Cada representação é relativa a como os elementos são inseridos ou removidos da estrutura, qual tipo de alocação a ser usada e como os elementos da lista serão acessados.

Alguns exemplos de listas são:

- **Lista convencional**: pode ter os elementos inseridos ou removidos de qualquer lugar dela.

- **Fila**: é uma estrutura do tipo *FIFO* (*First In First Out*), ou seja, o primeiro elemento que eu adicionar ao final da lista, será removido no início dela.

- **Pilha**: é uma estrutura parecida com a fila, porém é uma estrutura do tipo *LIFO* (*Last In First Out*), ou seja, os elementos só podem ser inseridos, acessados ou removidos do final da lista.

> Vale ressaltar que este artigo não tem como foco se aprofundar nos conceitos de filas e pilhas, futuramente outros artigos virão para complementar essa ideia.

A alocação de memória das estruturas pode ser feita de duas formas:

- **Alocação estática**: aloca um espaço de memória no momento da compilação do programa, sendo necessário definir um valor numérico previamente indicando o número máximo de elementos que a lista irá possuir.

- **Alocação dinâmica**: aloca um espaço de memória dinamicamente, ou seja, em tempo real de execução do programa. A medida que é inserido novos elementos na lista, novos espaços de memória são alocados. De maneira análoga, a medida que os elementos são removidos da lista, os espaços de memória dos elementos alocados são liberados.

Os elementos de uma lista podem ser acessados de duas formas, independente do tipo de alocação realizada, as formas são:

- **Acesso sequencial**: os elementos são armazenados de forma consecutiva na memória, um bom exemplo disso é o uso de *array*s. Assim, a posição de um elemento pode ser obtida através do início da lista.

- **Acesso encadeado**: cada elemento pode estar em uma área distinta da memória, não seguindo obrigatoriamente uma ordem de onde eles estão. Mas como isso funcionaria? Bem, cada elemento da lista deve armazenar duas coisas: a primeira é a sua informação, o dado em questão que esse elemento possui, já a segunda é o endereço de memória do próximo elemento. Para acessar um elemento de uma lista encadeada, é necessário percorrer todos os elementos antecessores da lista.

> Quando falamos sobre estruturas de dados em *C* é quase impossível deixar de fora os tão "queridos" ponteiros. O acesso as listas encadeadas é feito através deles para armazenar o endereço do próximo elemento. Neste artigo, trabalharemos especialmente com alocação dinâmica de memória na implementação das estruturas em *C* e do acesso encadeado da lista.

&nbsp;

## Operações fundamentais de uma lista

Toda lista segue um padrão, esse padrão é um conjunto de operações básicas que a lista deve ser capaz de fazer, independente do tipo de alocação utilizada. Algumas das principais operações são:

- Criação da lista;
- Inserir um elemento na lista;

> Existem três tipos de inserção na lista: inserção no início, meio ou final. Sempre que a operação de inserção for utilizada é preciso verificar se é possível inserir um novo elemento na lista, em outras palavras, se ela ainda não está cheia.

- Remover um elemento da lista;

> Assim como na operação de inserção, a remoção também possui três tipos: remoção do início, meio ou final. Também é preciso verificar se existem elementos dentro da lista antes de tentar removê-los, afinal, não é possível remover algo se esse algo não existe.

- Buscar por um elemento da lista;
- Imprimir a lista na tela;
- Retornar o tamanho da lista;
- Verificar se a lista está cheia ou vazia;
- Destruição da lista.

&nbsp;

## Listas simplesmente encadeada

Como dito anteriormente, em uma lista de acesso encadeado (ou lista encadeada) para cada novo elemento inserido na estrutura alocamos um espaço de memória dinamicamente para armazená-lo e tem sua memória liberada à medida que o elemento é removido. Esse elemento é um ponteiro para uma estrutura que contém dois campos de informação: um campo de **dado** (utilizado para armazenar as informações do elemento), e um campo **prox**, que é um ponteiro que aponta para o endereço de memória do próximo elemento da lista ou para um valor nulo (**NULL**) quando se trata do nó final.

O esquema abaixo ilustra uma lista encadeada:

![img](https://user-images.githubusercontent.com/39147407/129786187-e36b8882-4fa4-49ba-a71e-831598dacb8e.png)

A estrutura de uma lista consiste em uma sequência encadeada de elementos, comumente chamados de **nós**. A lista é representada por um ponteiro para o primeiro elemento (ou nó). Partindo do primeiro elemento, podemos acessar o segundo, o terceiro, o quarto e assim sucessivamente seguindo o encadeamento. 

Para exemplificar a implementação e noção de listas encadeadas em C, podemos ter como exemplo uma lista encadeada que armazena valores inteiros. A estrutura de um nó pode ser feita da seguinte forma:

<script src="https://gist.github.com/imsouza/921425af88f480093e5e350ac00e9487.js"></script>

Perceba que é uma estrutura auto-referenciada, ou seja, além do campo que armazena o dado, que neste caso é um número inteiro, há um outro campo que é um ponteiro para uma próxima estrutura do mesmo tipo. Como não alocamos nenhum nó, a estrutura ficará sem nenhum dado na memória.

Podemos então criar 3 variáveis ponteiro para o tipo **No** da seguinte forma:

<script src="https://gist.github.com/imsouza/edac61baa119984d5c8356c342b2ef82.js"></script>

A figura abaixo ilustra o processo de alocação, onde cada um dos ponteiros aponta para cada um dos nós alocados na memória.

![img](https://user-images.githubusercontent.com/39147407/129786931-f5cfd56c-536c-4af3-8068-243064369a61.png)

Até agora não incluímos nenhuma informação nos nós. Podemos incluir alguns valores nos campos de dado de cada nó de uma maneira simples:

<script src="https://gist.github.com/imsouza/a79cae58880ddd8f723226bcdacf099d.js"></script>

Internamente, na memória, temos:

![img](https://user-images.githubusercontent.com/39147407/129787295-aee7dac4-2fb5-4a00-a78c-9c2c63a86b1d.png)

Note que temos três nós, mas eles são independentes entre si, porém o nosso objetivo é percorrer todos elementos da lista dado um nó inicial. Por exemplo, em um *array* podemos acessar qualquer um dos elementos das *i*-posições fazendo operações aritméticas com o índice como: *i*+1, *i*+2 e assim por diante. Como os nós não estão em posições contíguas da memória, é necessário guardar o endereço do próximo nó. Esse encadeamento pode ser feito da seguinte forma:

<script src="https://gist.github.com/imsouza/97b9f5a9816d30d04c8d695ff3e0f58c.js"></script>

A figura abaixo ilustra o processo:

![img](https://user-images.githubusercontent.com/39147407/129787979-b43c06a3-52cc-4dcf-84ee-d506560efbb7.png)

Estando no nó **primeiro**, podemos acessar as informações armazenadas no nó **segundo** e **terceiro** usando o encadeamento dado pelo ponteiro **prox**. Em outras palavras, **primeiro->prox->dado** nos dá acesso a informação armazenada no segundo nó, de forma análoga: **primeiro->prox->prox->dado** nos da a informação do terceiro nó. O código abaixo exemplifica isso:

<script src="https://gist.github.com/imsouza/0c25bacf27cb40b09f67356d6737d8e0.js"></script>

Note que, como mostrado no código acima, sempre partimos do primeiro ponteiro para chegarmos nos seguintes. Ou seja, tendo o primeiro nó, conseguimos percorrer todos outros nós. Sabendo disso, podemos alocar o nó inicial:

<script src="https://gist.github.com/imsouza/2e1b9a51f134f5ea5a5c69ac2fe9c57e.js"></script>

![img](https://user-images.githubusercontent.com/39147407/129788159-cc918858-3b99-4cad-9a89-2e90c46f3528.png)

Seguindo a mesma lógica, podemos alocar o próximo nó. Como foi exemplificado nos códigos acima, esse nó deve ser atribuído ao campo próximo do primeiro nó, ou seja:

<script src="https://gist.github.com/imsouza/327da5a7f14a0c1f14c6d3d20f9bfbb1.js"></script>

Como alocamos um espaço de memória para o próximo nó, podemos inserir um dado nele:

<script src="https://gist.github.com/imsouza/58baffb7f830a35eaa5eeb56d8d735cc.js"></script>

![img](https://user-images.githubusercontent.com/39147407/129788435-a6e52bd7-c5a3-4fce-bf0b-fa31c12bcfdc.png)

Por fim, falta alocar o terceiro e último nó do nosso exemplo e atribuir uma informação a ele. Seguindo o encadeamento, a partir do nó **primeiro**, temos que o terceiro nó deve ser alocado da seguinte forma: **primeiro->prox->prox**. Assim,

<script src="https://gist.github.com/imsouza/23198320c7d39068f703118c123ab34e.js"></script>

![img](https://user-images.githubusercontent.com/39147407/129789424-a595148a-ba48-4af7-b44d-257285c71770.png)

Note que no último nó, o campo **prox** recebeu o valor **NULL**, indicando o fim da lista.

O código final é o seguinte:

<script src="https://gist.github.com/imsouza/7ac423b3e6ab3737fb219a7d9e7c6b54.js"></script>

Perceba que se precisarmos adicionar mais nós, basta seguir o encadeamento e ir adicionando novos nós. Mas isso não é nada prático, a medida que adicionamos mais nós, mais alocações e acessos teremos no encadeamento. Para resolvermos esse problema utilizaremos um **TAD Lista** para nos auxiliar nas operações básicas e fundamentais de uma lista encadeada.

&nbsp;

## Criando uma lista

Antes de criarmos a função de criação da lista propriamente dita, precisamos definir a estrutura que irá conter o ponteiro **inicio** do tipo **No** que representará o nosso nó inicial da lista. O código pode ser implementado da seguinte forma:

<script src="https://gist.github.com/imsouza/62b2883e5096c0d80c0710e44e7135a5.js"></script>

> A definição do tipo **No** ficará na interface (**lista.h**) do TAD Lista

Para utilizar uma lista em seu programa, a primeira coisa a se fazer é criar uma lista vazia atribuindo **NULL** ao ponteiro de início, indicando, assim, que não existem elementos na lista. O valor de retorno da função é um ponteiro para a estrutura de lista criada dinamicamente. Segue abaixo uma das formas de implementar a função:

<script src="https://gist.github.com/imsouza/893807ab2d97be69673fb40a8d84f5f4.js"></script>

&nbsp;

## Inserindo um elemento na lista

Com a função **Lista criarLista()** já implementada, podemos iniciar a criação da função de inserção. Para cada elemento inserido na lista, devemos alocar dinamicamente um espaço na memória para o novo nó e encadeá-lo na lista existente. Uma forma simples de criarmos essa função é inserir o novo elemento no **início** da lista. Uma possível implementação dessa operação é a seguinte:

<script src="https://gist.github.com/imsouza/43668096d4c0c29c7d07702ddc2210ff.js"></script>

> Note que o ponteiro do tipo **Lista** deve ser passado como parâmetro, além, claro, da informação (conteúdo) do novo elemento que será inserido.

A função **void inserir()** aloca dinamicamente o espaço para armazenar o novo nó da lista, atribui a esse nó o elemento que deverá ser inserido, faz este nó apontar para o nó que era o primeiro da lista e, por fim, o primeiro nó da lista é atualizado.

&nbsp;

### Passo 1:
Cria o novo nó.

![img](https://user-images.githubusercontent.com/39147407/129790416-ca7bed82-a831-4396-8f0d-1d3b26f3c985.png)

&nbsp;

### Passo 2:
Atualiza o ponteiro 'prox' do novo nó do qual deve apontar para o primeiro elemento da lista.

![img](https://user-images.githubusercontent.com/39147407/129790627-db9d1704-66d9-40d0-9099-3d3e816595c7.png)

&nbsp;

### Passo 3:
Atualiza o ponteiro 'prox' do nó 'início' do qual deve apontar para o novo nó.

![img](https://user-images.githubusercontent.com/39147407/129790959-5e8849fc-383f-4e6c-a5ab-4fc643b2eca3.png)

&nbsp;

## Buscando os elementos da lista

A operação de busca consiste em recuperar as informações contidas em determinado elemento da lista, podendo, assim como as outras operações, ser feita de diferentes maneiras, dependendo do propósito da aplicação.

A princípio, criaremos uma função que recebe o ponteiro do tipo **Lista** e a informação referente ao elemento que queremos buscar. O retorno da função será o ponteiro do nó da lista que representa o elemento em questão. Caso o elemento não seja encontrado, o valor retornado é **NULL**.

<script src="https://gist.github.com/imsouza/6fbe587eb85d0338c5bcb67db12b2ceb.js"></script>

> Note que o tipo de retorno da função busca é **No**, ou seja, como já foi dito, retornaremos um ponteiro referente ao nó onde o elemento se encontra.

&nbsp;

## Imprimindo a lista

Muita das vezes é necessário termos uma função para visualizarmos os elementos da lista. Uma possível implementação é a seguinte:

<script src="https://gist.github.com/imsouza/2c806fe1da67a9ca48146a7f77f866ec.js"></script>

Para percorrer os elementos de um *array*, usamos uma variável auxiliar inteira para armazenar o índice de cada elemento. No caso de uma lista encadeada, a variável auxiliar tem que ser um ponteiro, que é usado para armazenar o endereço de cada elemento. No código acima, a variável **atual** aponta para cada um dos elementos da lista, do início ao fim (ou seja, enquanto **atual** for diferente de **NULL**). Note que, como dito anteriormente, para acessarmos um determinado elemento da lista, devemos percorrer ela desde o início, até que o elemento em questão seja alcançado.

&nbsp;

## Verificando se a lista está vazia

Assim como muita das vezes é necessário termos uma função para exibir a lista, também ocorre muito de precisarmos de uma função para verificar se ela está vazia ou não. Como sabemos, uma lista está vazia se seu primeiro elemento é **NULL**. Uma das implementações para essa função é mostrada a seguir:

<script src="https://gist.github.com/imsouza/7a58eccbf9538569ee7676fc0519296d.js"></script>

o código acima pode ser simplificado, resultando na seguinte forma:

<script src="https://gist.github.com/imsouza/b0841a6f466d358da15a9a7fd1bb46c0.js"></script>

&nbsp;

## Liberando a lista da memória

Por fim, a última função e não menos importante do nosso **TAD Lista** é a função que libera a memória de todos elementos alocados dinamicamente. A função inicialmente irá liberar o encadeamento dos primeiros elementos e, em seguida, libera a estrutura da lista. Para realizar o processo de liberação do encadeamento, a função percorre cada um dos elementos, os liberando consecutivamente. Uma implementação dessa função é mostrada logo abaixo:

<script src="https://gist.github.com/imsouza/8c26619249df54eae41c498fa67cf1ef.js"></script>

> É importante notar que devemos guardar a referência para o próximo elemento antes de liberar o elemento atual em si, caso não fizéssemos esse procedimento, estaríamos acessando um espaço de memória que não estaria mais reservado para uso. Na **linha 4** do código acima estamos guardando a referência para o próximo nó, em seguida, na **linha 5**, é liberada a memória apontada pelo nó atual, e por fim na **linha 6** fazemos o nó atual apontar para o próximo.

&nbsp;

## Código final do TAD Lista

#### Lista.h
<script src="https://gist.github.com/imsouza/ceaaf4ac74a6cec3939f0b1994fd3cfb.js"></script>

#### Lista.c
<script src="https://gist.github.com/imsouza/2663b8c33b89fa9823352bec496a07e4.js"></script>

#### Cliente.c
<script src="https://gist.github.com/imsouza/dc80b4034796ad08e9688dab3547126e.js"></script>

&nbsp;

## Lista vs. *Array*

As vantagens da lista sobre o **array** são:

- Tamanho dinâmico: a capacidade da lista só será excedida quando a memória estiver realmente cheia, ou seja, não é preciso definir previamente o tamanho da lista;
- Melhor utilização dos recursos de memória;
- Não se precisa movimentar os elementos nas posições de inserção e remoção.

Enquanto as do *array* incluem:

- Listas encadeadas requerem espaço extra para armazenar os ponteiros junto com cada elemento da lista;
- Listas encadeadas não permitem um acesso aleatório dos itens. É necessário acessar os elementos sequencialmente a partir do primeiro nó. Por esse motivo, não é viável implementar uma busca binária em listas;
- Arrays têm melhor [localidade de cache](https://pt.wikipedia.org/wiki/Cache#Princ%C3%ADpio_da_localidade_de_refer%C3%AAncia){:target="_blank"}, o que pode fazer uma diferença considerável no desempenho.

&nbsp;

## Conclusão

Neste artigo foi abordado sobre as listas simplesmente encadeadas dinâmicas e suas vantagens e desvantagens em relação ao uso de *array*s. Nos artigos seguintes, darei continuação a esse assunto, falando sobre algumas outras operações que não foram implementadas ainda em nosso TAD e que requerem uma abordagem mais minuciosa.

&nbsp;

## Referências

[Estrutura de Dados Descomplicada - Em Linguagem C , por André Backes](https://www.amazon.com.br/Estrutura-Dados-Descomplicada-Linguagem-Backes/dp/8535285237){:target="_blank"}

[Listas Encadeadas - W. Celes e J. L. Rangel](https://www.ic.unicamp.br/~ra069320/PED/MC102/1s2008/Apostilas/Cap10.pdf){:target="_blank"}

[Criando uma lista encadeada em C - Israel Junior](https://medium.com/aprendacpp/criando-uma-lista-encadeada-em-c-17e7f5692f36){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>
