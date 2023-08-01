---
layout: post
title: "Classificação com Redes Neurais Convolucionais #3"
description: "Nesta etapa, resolveremos um problema clássico quando o assunto é reconhecimento de padrões com redes convolucionais..."
author: "Mateus Almeida"
image: /assets/thumbnails/img31.jpg
tags: [Deep Learning]
---

![Birds](/assets/thumbnails/img31.jpg)

Nesta etapa, resolveremos um problema clássico quando o assunto é reconhecimento de padrões com redes convolucionais. O problema proposto consiste no reconhecimento de digitos presentes no dataset *MNIST*. O banco de dados em questão contém inúmeras imagens de digitos manuscritos, cada imagem possui um tamanho de 28x28 *pixels*, resultando em 784 células da matriz, onde cada uma dessas células possuem uma intensidade de 0 a 255.

<br>

## Contextualizando

Abaixo consta um exemplo de uma rede neural artificial (RNA) de 1 camada com 10 neurônios de saída (classes) correspondentes aos dígitos de 0 a 9:

![Img](https://imgur.com/lVb7CPK.png)

A razão de utilizar uma *CNN* e não uma rede neural artificial, como vista na imagem acima, é que a RNA não possui um mecanismo de visualização de *pixels* vizinhos, ou seja, o que ela faz é apenas dizer que um *pixel* está mais ativo do que outro, ignorando completamente a noção espacial do que está sendo analisado. Algo que é tratado ao utilizar redes de convoluções.

A ideia para solucionar o problema proposto é a criação de um modelo de *Deep Learning* que utiliza uma *CNN* para reconhecer novos digitos inseridos como teste, utilizando para aprendizado o vasto acervo de unidades presentes no *dataset*.

O processo que o modelo irá realizar pode ser exemplificado por um raciocínio intuitivo da mesma forma que nós humanos fazemos para identificar algo que estamos olhando - capturando cada parte da informação e
assimilando-as na totalidade. Claro que, para nós, é uma tarefa extremamente rápida e quase que instantânea, um nível que as máquinas ainda
não alcançaram.

O reconhecimento de padrões por partes é a chave para que as redes neurais convolucionais usam em seu cerne. Identificando parte por parte e assimilando cada ”pedaço” é possível chegar a uma determinada conclusão. A imagem abaixo exemplifica como a rede ”enxerga” os *pixels* pela sua intensidade em cada neurônio:

![Rede](https://imgur.com/hWb7LJQ.png)

<br>

## Implementação

A seguir, será explicado cada um dos passos para implementação da rede convolucional utilizando a biblitoeca *Keras* do *Python*:

### 1 - Importação da biblioteca:

<script src="https://gist.github.com/imsouza/3e35d437f39fff879e9b8e75c9487c7b.js"></script>

Aqui, estamos importando a biblioteca Keras, que é uma *API* de alto nível para construir e treinar modelos de redes neurais em *frameworks* de *deep learning*, como o *TensorFlow*.

### 2 - Criação do modelo Sequencial:

<script src="https://gist.github.com/imsouza/99f1696886ea58c5f790e90dc60a2810.js"></script>

O modelo Sequencial é uma pilha linear de camadas. Neste caso, estamos criando um modelo sequencial vazio, ao qual adicionaremos camadas uma após a outra.

### 3 - Adição de uma camada convolucional com 32 filtros:

<script src="https://gist.github.com/imsouza/5d4960ac63620e98afc7b567887fd4a8.js"></script>

Esta é a primeira camada do modelo. ***Conv2D*** é uma camada convolucional que aplica convoluções espaciais sobre a imagem de entrada. O parâmetro ```filters``` define o número de filtros que serão aplicados, e ```kernel_size``` define o tamanho dos filtros (neste caso, 5x5). O parâmetro ```padding='same'``` indica que o preenchimento é adicionado para manter o tamanho das saídas. A função de ativação ```activation='relu'``` aplica a função de ativação *ReLU* aos mapas de características gerados. A ```input_shape``` define a forma dos dados de entrada (28x28 *pixels* e 1 canal para imagens em escala de cinza).

### 4 - Redução de dimensionalidade:

<script src="https://gist.github.com/imsouza/7320420b2ebbf1acfd593568f07499f7.js"></script>

A camada de ***MaxPooling2D*** reduz as dimensões espaciais dos mapas de características gerados pela camada convolucional anterior. O parâmetro ```pool_size=[2, 2]``` especifica o tamanho da janela de *max pooling* (2x2) e ```strides=2``` define o deslocamento (*stride*) da janela.

### 5 - Adição de uma camada convolucional com 64 filtros:

<script src="https://gist.github.com/imsouza/95e8bfdf2e0a7df805820ef760bafa0c.js"></script>

Esta é a segunda camada convolucional. Aqui, estamos aplicando 64 filtros de tamanho 5x5 aos mapas de características gerados pela camada de *max pooling* anterior.

### 6 - Redução de dimensionalidade:

<script src="https://gist.github.com/imsouza/7320420b2ebbf1acfd593568f07499f7.js"></script>

Outra camada de max pooling é adicionada para reduzir ainda mais as dimensões espaciais dos mapas de características.

### 7 - *Flattening* das *features maps*:

<script src="https://gist.github.com/imsouza/16f588df351c03695ab179b52b3666e1.js"></script>

A camada *Flatten* transforma os mapas de características 3D em um vetor 1D para poderem ser alimentados em uma rede neural densa (totalmente conectada). Isso é necessário porque as camadas densas exigem vetores de entrada.

### 8 - Adição de uma camada *Dense*:

<script src="https://gist.github.com/imsouza/bca40c82324280443432f2408d0b0c4b.js"></script>

A camada Dense possui 1024 neurônios e usa a função de ativação *ReLU*. Cada neurônio nesta camada estará conectado a todos os neurônios da camada anterior, tornando-a uma camada densamente conectada.

### 9 - Adição de uma camada *Dense* de saída:

<script src="https://gist.github.com/imsouza/66becbf8e420684bdab469688f1be039.js"></script>

Esta é a camada de saída do modelo. Ela possui 10 neurônios, que correspondem ao número de classes nas quais queremos classificar as imagens. A função de ativação *Softmax* é usada para converter as saídas em uma distribuição de probabilidade sobre as classes.

### 10 - Compilando o modelo:

<script src="https://gist.github.com/imsouza/1cdf0f03644ca1e9778abc33e26c227d.js"></script>

Aqui, estamos compilando o modelo com as configurações de treinamento. A função de perda (*loss*) utilizada é a ```categorical_crossentropy```, que é adequada para problemas de classificação com várias classes. O otimizador *adam* é usado para ajustar os pesos do modelo durante o treinamento. E a métrica de *accuracy* é usada para monitorar a acurácia do modelo durante o treinamento.

### Código final:

<script src="https://gist.github.com/imsouza/81996b3373628f0beb5cad65e94e80c6.js"></script>

### Resumo do modelo

Para criação deste modelo foi utilizada uma camada convolucional com 32 filtros, em seguida uma camada de *pooling*, outra camada com 64 filtros
seguida de mais uma camada de *pooling*, uma camada de *flatten* e por fim
duas camadas densas, cada uma com sua respectiva função de ativação: *ReLU* e *Softmax*. Totalizando, assim, 8 camadas na rede considerando a inicial de entrada. Além disso, também foi utilizado os algoritmos *adam* para otimização e, para a medida dos erros, *categorical cross entropy* e acurácia.

![results](https://imgur.com/lWEg6iF.png)

<br>

## Etapa de treinamento do modelo

Dada a quantidade de parâmetros gerados pelo modelo, surgiu a necessidade do uso da *GPU* do *Google Colab* para o processamento. A etapa de treinamento do modelo em 5 épocas.

![params](https://imgur.com/kCQcMXI.png)

![treino](https://imgur.com/dkWGFRE.png)

<br>

## Avaliação do modelo

Abaixo constam os resultados obtidos da relação entre a acurácia da rede e o *loss* com base no conjunto de teste passado:

![img](https://imgur.com/5N8kkpg.png)

![Img](https://imgur.com/Fad0peU.png)

É possível observar um resultado satisfatório tendendo a 1 na acurácia, enquato o loss sofre um decaimento. Também é possível observar na matriz de confusão o percentual de acertos para cada classe.

<br>

## Conclusão

Com base no conjunto de dados de treino e teste, foi possível alcançar um resultado satisfatório utilizando os devidos parâmetros na rede convolucional. Sabendo que o conjunto de testes possui 10000 amostras, o modelo em questão erra somente 28 amostras, acertando com total clareza as outras 9972 do conjunto e, com isso, solucionando o problema proposto com uma alta acurácia e uma baixa perda.

<br>

## Referências

[Neural Networks](https://ml4a.github.io/ml4a/neuralnetworks/){:target="_blank"}

[How Do Convolutional Layers Work in Deep Learning Neural Networks?](https://machinelearningmastery.com/convolutional-layers-for-deep-learning-
neural-networks){:target="_blank"}

[Entendendo Redes Convolucionais](https://medium.com/neuronio-br/entendendo-redes-convolucionais-cnns-d10359f2118){:target="_blank"}

[Uma introdução as redes neurais convolucionais uti-
lizando o Keras](https://medium.com/data-hackers/uma-introdu%C3%A7%C3%A3o-as-redes-neurais-convolucionais-utilizando-o-keras-41ee8dcc033e){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>
