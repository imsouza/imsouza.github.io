---
layout: post
title: "Classificação com Redes Neurais Convolucionais #2"
description: "Neste artigo, focaremos nos aspectos gerais das *CNNs*, visando compreender suas camadas e sua estrutura interna"
author: "Mateus Almeida"
image: /assets/thumbnails/img30.jpg
tags: [Deep Learning]
---

![Birds](/assets/thumbnails/img30.jpg)

&nbsp;

Nesta etapa, focaremos nos aspectos gerais das *CNNs*, visando compreender suas camadas e sua estrutura interna. Além disso, discutiremos sobre a entrada, saída e passagem de dados na rede. Também será visto camadas importantes para otimização da rede como a *batch normalization* e a *dropout*.

&nbsp;

## Entrada de dados

As entradas em uma *CNN* (*Convolutional Neural Network*) podem ser matrizes 3D, ou seja, com a mesma altura e largura, mas com profundidade baseada nos três canais de cores *RGB* de cada *pixel* e 1D para processamento de sinais. O processo de convolução é feito para cada um dos canais em questão. Essa característica é central para o processamento de imagens, pois, permite que a rede neural capture informações de cor e textura de cada *pixel* da imagem. Além disso, as *CNNs* também podem receber outros tipos de entradas, como áudio e vídeo.

A imagem abaixo ilustra os canais *RGB* de uma imagem:

![rgb](https://imgur.com/EexYYaw.png)

> Toda rede neural possui pelo menos uma função de ativação, o mesmo vale para uma convolucional. Uma das mais utilizadas nas redes convolucionais é a *ReLU*, podendo também ser utilizada em conjunto com a *Softmax* ou até mesmo *Sigmoid*.

&nbsp;

## Filtros

Um fator importante das *CNNs* são os filtros. Os filtros são as convoluções, ou seja, os cálculos matriciais que auxiliam o algoritmo a reconhecer pequenos quadrados e em seguida “deslizam” por toda imagem com o objetivo de identificar os pontos de maior intensidade ou menor intensidade dependendo da configuração da rede.

A figura abaixo exemplifica uma convolução 2D usando um *kernel* de tamanho 3, *stride* 1 e *padding* pré-definido. 

![fig](https://imgur.com/pgB4D05.png)

> Existem outros tipos de convolução, com diferentes ariações nos parâmetros de *stride*, *padding* e *kernel*.

O tamanho do ***kernel*** define o **campo de visão** da convolução. No exemplo acima, temos um *kernel* de 3x3 *pixels*. O ***stride*** define os **passos que o *kernel* irá dar** ao percorrer os *pixels* da imagem. Já o ***padding*** é um processo em que **alguns *pixels* nulos são adicionados** ao redor da imagem antes da operação de convolução, de forma a manter a dimensionalidade na imagem resultante durante a operação.

&nbsp;

## *Pooling*

Para um bom funcionalmento das *CNNs* as camadas de *pooling* estão intrinsecamente ligadas à **redução de dimensionalidade**. O aumento da quantidade de atributos para serem analisados em um modelo faz com que sua complexidade aumente, tornando o processamento ainda mais pesado para execução da tarefa. A solução para este problema é a redução da dimensionalidade. Esta técnica propõe a remoção de dados **não tão importantes** que seriam usados no modelo, reduzindo o custo da aprendizagem da máquina e permitindo resolver problemas complexos com modelos simples.

Uma camada de *pooling* realiza a redução de dimensionalidade da camada anterior. Nesta categoria, também existem várias opções de camadas, sendo o *maxpooling* a opção mais utilizada. 

> O *maxpooling* prioriza o maior valor daquela respectiva área que está sendo observada, enquanto o *minpooling* faz o processo contrário.

A imagem abaixo ilustra o processo de *maxpooling* com *kernel* 2x2 e *stride* 2.

![img](https://imgur.com/w2jxMuj.png)

Assim como na convolução, é escolhida uma unidade de área, por exemplo 2x2, para transitar por toda a saída da camada anterior. A unidade é responsável por resumir a informação daquela área em um único valor. Se a saída da camada anterior for 24x24, a saída do *pooling* será 12x12.

&nbsp;

## *Dropout*

Previnir *overfitting* se tornou um fator considerável e fundamental quando o assunto é *CNN* devido o grande número de parâmetros e a alta complexidade dos algoritmos de *deep learning*. Para resolver esse problema foi criada a técnica de ***dropout*** que consiste na definição de camadas que **eliminam um conjunto aleatório de ativações** desta mesma camada, tornando-as nulas. Isso garante que a rede não ajuste demais seus parâmetros e consequentemente evita o problema de *overfitting*.

&nbsp;

## *Batch normalization*

A camada de *batch normalization* é uma técnica usada em *CNNs* para normalizar as entradas de uma camada para cada *mini-batch*, o que tem o efeito de estabilizar o processo de aprendizado e reduzir o número de épocas de treinamento necessárias para treinar redes profundas. É amplamente utilizada em *CNNs* de última geração, como *Inception* e *ResNet*. A técnica acelera o treinamento, em alguns casos, reduzindo pela metade as épocas ou mais, e fornece alguma regularização, reduzindo o erro de generalização.

> A camada de *batch normalization* é aplicada em **cada camada convolucional** e pode ser usada em conjunto com outras técnicas de regularização, como o *dropout* visto anteriormente.

&nbsp;

## *Flatten*

A imagem abaixo possui uma camada especial chamada de *Flatten*. Esta camada é responsável por receber os **dados mais significativos** da rede convolucional e transformá-los em uma rede densa para classificação completamente conectada.

![img](https://imgur.com/hrcDhou.png)

&nbsp;

## Conclusão

Nesta segunda parte foi abordado os conceitos gerais da estrutura de camadas de uma *CNN* e seu processamento de dados. No próximo artigo, daremos início a implementação de um problema prático de implementação de uma arquitetura para classificação de dados usando redes neurais convolucionais.

&nbsp;

## Referências

[Neural Networks](https://ml4a.github.io/ml4a/neuralnetworks/){:target="_blank"}

[How Do Convolutional Layers Work in Deep Learning Neural Networks?](https://machinelearningmastery.com/convolutional-layers-for-deep-learning-
neural-networks){:target="_blank"}

[Entendendo Redes Convolucionais](https://medium.com/neuronio-br/entendendo-redes-convolucionais-cnns-d10359f2118){:target="_blank"}

[Uma introdução as redes neurais convolucionais uti-
lizando o Keras](https://medium.com/data-hackers/uma-introdu%C3%A7%C3%A3o-as-redes-neurais-convolucionais-utilizando-o-keras-41ee8dcc033e){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>
