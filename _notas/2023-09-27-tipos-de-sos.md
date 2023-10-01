---
layout: note
title: "Tipos de SOs"
author: "Mateus Almeida"
categories: [notas]
tags: [Sistemas Operacionais]
---

## Monotarefa (Monoprogramado)
Só permite um programa ativo em um dado período de tempo que permanece na memória até seu término. Ex.: Dos.

- Processador, memória e periféricos permanecem exclusivamente dedicados à execução de um único programa;
- Recursos são mal utilizados, entretanto é fácil de ser implementado;
- Pode-se pensar que tarefas existem em um dos seguintes estados:

![https://imgur.com/kNBHvzy.png](https://imgur.com/kNBHvzy.png)

### Arquitetura
![https://imgur.com/729DqoC.png](https://imgur.com/729DqoC.png)
- 1) Carga do código na memória;
- 2) Carga dos dados na memória;
- 3) Processamento, consumo de dados e produção de resultados;
- 4) Ao término da execução, descarrega os resultados no disco.

## Multitarefa (Multiprogramado)
Mantém mais de um programa simultaneamente na memória principal para permitir o compartilhamento efetivo do tempo de CPU e demais recursos. Ex.: Unix, VMS, Windows.

- Várias tarefas simultâneas em um único processador, enquanto uma espera a outra roda;
- Aumento da produtividade dos usuários;
- Vários programas dividem os recursos do sistema;
- Pode-se pensar que tarefas existem em um dos seguintes estados:

![https://imgur.com/irZavX0.png](https://imgur.com/irZavX0.png)

>Quando dois ou mais processos estão simultaneamente no estado de pronto, eles competem pela CPU ao mesmo tempo. Cabe ao SO escolher qual executará por meio do escalonamento.

### CPU-bound
Processos que utilizam muito do processador. O tempo de execução é definido pelos ciclos de processamento.

### I/O-bound
Processos que utilizam muita E/S. O tempo de execução é definido pela duração das operações de E/S.

>O ideal é existir um balanceamento entre processos CPU e I/O bound.


## Em Lote
>Em sistema não-batch cada programa (job) escrito e perfurado em um cartão por um programador era entregue ao operador da máquina para que fosse processado. O processador ficava ocioso entre a execução de dosi programas.

O sistema em batch (lote) consistia em submeter ao computador um lote de programas de uma só vez. Os jobs dos usuários são submetidos em ordem sequencial para execução.

- Não existe iteração entre o usuário e o job durante sua execução;
- Armazenam-se os vários programas e seus dados em uma fita magnética;
- Ao invés do programa mandar sua saída diretamente à impressora, direciona-as a outra fita, que submetida à impressora;
- Este tipo de processamento é chamado de Spooling e foi a base do sistemas batchs antigos:

![https://imgur.com/IpEsUo7.png](https://imgur.com/IpEsUo7.png)

- a) Traz os cartões ao 1401;
- b) Lê os cartões para uma fita;
- c) Coloca a fita no 7094, que faz a computação;
- d/e) Coloca a figta no 1401;
- f) Imprime a saída.

## Interativo

O sistema permite que os usuários interajam com suas computações.

- Podem ser projetados como sistemas mono-usuários ou multi-usuários.

![https://imgur.com/gb75Q3Y.png](https://imgur.com/gb75Q3Y.png)

## Tempo Real

Sistemas de tempo real servem aplicações que atendem processos externos e que possuem tempos de resposta limitados e críticos. Ex.: piloto automático de aviões, transações em bancos.

- Sinais de interrupções comandam a atenção do sistema;
- O computador deve reagir apropriadamente dentro de um intervalo fixo de tempo;
- Pode ocorrer falhas físicas causadas por queda de energia ou problemas similares.

![https://imgur.com/OSWs9ks.png](https://imgur.com/OSWs9ks.png)