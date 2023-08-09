---
layout: post
title: "Algoritmos de Ordenação em C #2"
description: "Neste artigo, discutiremos sobre os algoritmos sofisticados de ordenação  em arrays. Começaremos por um breve resumo sobre a técnica de dividir para conquistar..."
author: "Mateus Almeida"
image: /assets/thumbnails/img18.jpg
tags: [Algoritmos]
---

![Img](/assets/thumbnails/img18.jpg)

&nbsp;

Neste artigo, discutiremos sobre os algoritmos sofisticados de ordenação  em *arrays*. Começaremos por um breve resumo sobre a técnica de **dividir para conquistar** que será de importante uso para as implementações. Em seguida, podemos dar início a uma breve introdução sobre os algoritmos de *merge sort*, *quicksort* e *heapsort*.

&nbsp;

## A técnica que mudou a programação: dividir para conquistar!

A **Divisão e Conquista** ou, do inglês, *Divide and Conquer*, é uma técnica de **projeto e análise de algoritmos** muito utilizada na computação. Ela se baseia em dividir **recursivamente** um problema em subproblemas cada vez menores, até que o problema como um todo possa ser solucionado. O caso-base, quando aplicamos essa técnica em um *array*, geralmente será um *array* vazio ou com apenas um elemento.

> O foco deste artigo não é explicar sobre recursão, espera-se do leitor que ele já tenha domínio e compreensão sobre esse tema.

Um problema clássico que pode ser resolvido utiliando essa técnica é a [**Torre de Hanoi**](https://pt.wikipedia.org/wiki/Torre_de_Han%C3%B3i){:target="_blank"}. A técnica soluciona o problema através de três passos:

- **Divisão**: o problema maior é dividido em subproblemas menores.

- **Conquista**: se o subproblema for pequeno suficiente, então, resolva-o diretamente, caso contrário, resolva cada subproblema recursivamente.

- **Combinação**: o resultado dos problemas menores são combinados até que seja obtida a solução do problema maior.

> Esses são os três passos universais da técnica de **divisão e conquista**. A seguir, aplicaremos eles na prática.

![img](https://user-images.githubusercontent.com/39147407/140659582-15011017-b691-4a55-8838-2448390341e1.gif)

&nbsp;

## Algoritmos sofisticados de ordenação

### *Merge Sort*
O algoritmo de ***merge sort*** é um dos algoritmos populares que utiliza a técnica de dividir para conquistar. O funcionamento desse algoritmo é o seguinte: ele **divide** recursivamente o *array* em duas partes, também chamadas de ***subarrays***, até que cada posição dele seja considerada um *array* de um único elemento. Em seguida, o algoritmo **combina** dois *arrays* para obter um *array* maior e ordenado. Esse processo se repete até que exista apenas um *array* e que ele esteja totalmente ordenado.

> A combinação dos *arrays* é feita **intercalando** seus elementos conforme o sentido da ordenação (crescente ou decrescente).

![img](https://user-images.githubusercontent.com/39147407/140659572-92b04033-33fa-4ecf-8000-254e16f4134a.gif)

Uma possível implementação é a seguinte:

<script src="https://gist.github.com/imsouza/afc4c732463d6c771c39a1c6f1a4fd93.js"></script>

O merge sort utiliza duas funções em sua implementação de divisão e conquista: uma função para dividir os *arrays* em *subarrays* cada vez menores, **mergeSort**, e outra função para intercalar os dados de forma ordenada em um *array* meior, **merge**. 
O princípio desse algoritmo é dividir o *array* ao meio se ele tiver mais do que um elemento, esse processo é recursivo, ou seja, dividiremos ele ao meio até chegar ao caso-base — um *array* de um único elemento. A função **mergeSort** se encarrega dessa divisão ao meio. 

Ao chegar no caso-base, a recursão termina, e inicia-se o processo de intercalação do *array* pela função **merge**. A ideia da função **merge** é bastante simples: ela recebe as duas metades do *array*, neste caso, **inicio** e **meio + 1** e as combina em um *array* auxiliar **temp**. Em seguida, a função percorre o *array* **temp**  verificando, a cada passo, qual *array* tem o menor elemento. O menor elemento é inserido em **temp** e o algoritmo incrementa o contador do *array* escolhido.

> Caso um dos *arrays* tenha chegado ao final, o algoritmo irá copiar o restante do *array* que sobrou para o final de **temp** na próxima iteração.

Por fim, o algoritmo copia os dados do *array* **temp** para o *array* original.

A figura abaixo ilustra o processo de ordenação completa de um *array* utilizando o algoritmo de *merge sort*:

![img)](https://user-images.githubusercontent.com/39147407/140660843-f52efb5b-da97-4b4c-8905-d2b6c984682a.png)

&nbsp;

### *Quicksort*
O algoritmo de ***quicksort***, assim como o algoritmo de *merge sort*, faz parte da categoria de algoritmos sofisticados de ordenação. É um algoritmo muito utilizado na prática do desenvolvimento de *software* e, além disso, utiliza a estratégia de dividir para conquistar.

![img](https://user-images.githubusercontent.com/39147407/140769266-453cb51b-24b1-4399-bad6-2841b37e0366.gif)

> Vale lembrar que, dado um determinado *array*, não há necessidade de ordena-lo caso o *array* for vazio ou possua apenas um elemento.

> A biblioteca-padrão da linguagem *C* possui uma função chamada **qsort**, que nada mais é do que uma implementação do *quicksort*.

O *quicksort* segue uma lógica: primeiro, escolha um elemento do *array*. Esse elemento é chamado de **pivô**. Em seguida, encontre os elementos que são menores que o pivô e também os elementos que são maiores. Essa lógica é chamada de **particionamento**. A ideia do particionamento é, no fim, obter um *subarray* contendo todos os valores menores do que o pivô, o pivô, e um *subarray* contendo todos os valores maiores do que o pivô.

![img](https://user-images.githubusercontent.com/39147407/140887647-44138400-596b-46ef-aa6a-3af01c846122.png)

> Não necessariamente os *subarrays* precisam estar ordenados, eles serão apenas particionados.

O algoritmo segue os seguintes passos:

- **Passo 1**: escolha um pivô.
- **Passo 2**: particione o *array* em dois *subarrays*, separando-os entre elementos menores do que o pivô (rearranjados à esquerda) e elementos maiores do que o pivô (rearranjados à direita).
- **Passo 3**: execute o quicksort recursivamente em ambos *subarrays*. O processo se repete até que cada partição tenha apenas um elemento.

> A escolha de um bom pivô faz toda diferença no algoritmo. A eficácia do *quicksort* está ligada à eficiência da sua funcão **particiona** que separa os dados e calcula o pivô.

Uma possível implementação é a seguinte:

<script src="https://gist.github.com/imsouza/078bb29db1a982992caf35aa4ace293a.js"></script>

A função **particiona** recebe um *array* e as posições de **inicio** e **fim**. Em seguida, será definida as variáveis de **esq** e **dir**, indicando, respectivamente, as posições mais a esquerda (**inicio**) e mais a direita (**fim**) da partição, sendo o primeiro valor da partição escolhido como **pivô**. O restante do processo é ilustrado pelas figuras abaixo:

**Primeira etapa do algoritmo**: particionar o *array*:
![img](https://user-images.githubusercontent.com/39147407/140768813-f91b0265-7509-4a3d-b725-40eeaf560605.png)

**Segunda etapa do algoritmo**: aplicar o algoritmo de quicksort para ordenação dos *subarrays*:
![img](https://user-images.githubusercontent.com/39147407/140750716-416b6b05-0d9d-4158-9af4-785aa2c232ce.png)

&nbsp;

#### Heapsort

O algoritmo de **heapsort** é mais um algoritmo sofisticado de ordenação. A ideia básica deste algoritmo é transformar o *array* de dados em uma estrutura do tipo ***heap***, isto é, uma **árvore binária completa**.

> Uma **árvore binária completa** é uma estrutura onde todos os nós possuem dois filhos, com excessão dos nós folhas.

> Uma implementação eficiente para a *heap* é representá-la na forma de um *array*. Assim, o *array* começa com o elemento da raiz e seus filhos se encontram nas posições subsequentes, a mesma lógica vale para os filhos desses filhos.

<center>
  <img src="https://user-images.githubusercontent.com/39147407/140923837-c60b46b9-ea17-4d45-92ca-b5af90b96e5e.gif" alt="img">
</center> <br>

A estrutura de *heap* permite a recuperação e remoção do elemento de maior valor do *array*. Além disso, cada posição **i** do *array* passa a ser considerada o pai de duas outras posições, chamadas filhos. Para encontrar cada filho, em relação ao pai, será utilizado o seguinte cálculo de indíces: *2i + 1* (filho à esquerda) e *2i + 2* (filho à direita). Em seguida, o algoritmo reorganiza o *array* para que o pai seja sempre maior que os dois filhos. Por fim, o maior elemento do *array* será também o pai dos demais elementos. Este elemento poderá ser removido da *heap* e adicionado na última posição do *array*. O processo se repete para toda *heap*.

![img](https://user-images.githubusercontent.com/39147407/140924191-c0e7454a-2c1c-4993-805e-3e575977d71f.png)

Uma possível implementação para este algoritmo é a seguinte:

<script src="https://gist.github.com/imsouza/1e1526f22d68d2a1f452b9d1ff0c36e3.js"></script>

> **criaHeap**: responsável pela criação da *heap* a partir de certo elemento do *array*. 

> **heapSort**: responsável por criar a *heap* e ordenar os dados.

A função **criaHeap** armazena a posição do pai em uma variável auxiliar (**aux**) e em seguida calcula e verifica a existência dos filhos. Caso só exista um filho, apenas ele será considerado o maior naquele nível. Caso exista dois filhos, será necessário selecionar o maior deles. Tendo selecionado o maior filho, o próximo passo é verificar se **aux** é menor que ele. Se a afirmação for verdadeira, a posição do **pai** receberá o valor do maior **filho**. Logo, o **filho** será considerado o novo **pai**, que também terá o seu **filho** calculado para a continuação do processo de ordenação.

Caso a afirmação da **linha 12** do código seja falsa, o **filho** recebe o valor de uma posição além do final do *array* **fim** para encerrar o comando **while**. Por fim, ao encerrar o laço, o valor **aux** é copiado para a posição do **pai** atual.

As figuras abaixo ilustram esse processo:

**Primeira etapa do algoritmo**: chamada da função **criaHeap** e criação da *heap*:

![img](https://user-images.githubusercontent.com/39147407/140929834-0faf7948-52c7-43d7-91ea-f7688674cdca.png)

> O objetivo da função **criaHeap** é fazer com que toda posição pai analisada seja sempre maior que seus filhos. Contudo, fazer com que toda posição pai seja sempre maior que seus filhos não significam que determinada posição pai será maior que os filhos de seus filhos.

**Segunda etapa do algoritmo**: a função **heapSort** realiza a remoção do maior elemento e a reconstrução da *heap*:

![img](https://user-images.githubusercontent.com/39147407/141295840-9cdabdb8-dbfa-4162-866d-51abd18801af.png)

![img](https://user-images.githubusercontent.com/39147407/140938640-e74e6859-3f2a-4347-b7f0-0364670c1852.png)

&nbsp;

## Análise de complexidade

Considerando um *array* com **n** elementos, o tempo de execução de cada algoritmo é:

<table style="border-collapse:collapse;border-spacing:0;margin:0px auto" class="tg"><thead><tr><th style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"><span style="font-weight:bold">Algoritmo</span></th><th style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><span style="font-weight:bold">Melhor caso</span></th><th style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><span style="font-weight:bold">Caso médio</span></th><th style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"><span style="font-weight:bold">Pior caso</span></th></tr></thead><tbody><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">Merge Sort</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n log n)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n log n)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n log n)</td></tr><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">Quicksort</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n log n)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n log n)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n^2)</td></tr><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">Heapsort</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n log n)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n log n)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n log n)</td></tr></tbody></table>

&nbsp;

## Conclusão

A utilização de bons algoritmos de ordenação nas aplicações podem fazer total diferença no resultado final. Este artigo, junto com o anterior, abordou de forma direta os principais algoritmos, sofisticados e básicos, de ordenação interna e suas respectivas vantagens em relação ao tempo de complexidade de cada um.

&nbsp;

## Referências

[Estrutura de Dados Descomplicada - Em Linguagem C , por André Backes](https://www.amazon.com.br/Estrutura-Dados-Descomplicada-Linguagem-Backes/dp/8535285237){:target="_blank"}

[Entendendo Algoritmos, por Aditya Bhargava ](https://www.amazon.com.br/Entendendo-Algoritmos-ilustrado-programadores-curiosos-ebook/dp/B07B61HC3L/ref=sr_1_1?adgrpid=81530415255&dchild=1&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQzg0XI9RQr-8whNpah9KjRyJHHGBe05YOxbtRUe-C6lzl3bjp7GDu4aAnYlEALw_wcB&hvadid=425982603043&hvdev=c&hvlocphy=1001546&hvnetw=g&hvqmt=e&hvrand=1410481636243571583&hvtargid=kwd-297239954614&hydadcr=5629_11235159&keywords=grokking+algorithms&qid=1623294950&sr=8-1){:target="_blank"}

[Programação Java: algoritmo de divisão e conquista](https://www.codetd.com/pt/article/11914416){:target="_blank"}

[Algorithms - Merge Sort](https://www.geeksforgeeks.org/merge-sort/){:target="_blank"}

[O Algoritmo Heapsort](http://www.dsc.ufcg.edu.br/~pet/jornal/maio2013/materias/historia_da_computacao.html){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>