---
layout: note
title: "Chamadas de Sistema e Processos"
author: "Mateus Almeida"
categories: [notas]
tags: [Sistemas Operacionais]
---

## Chamadas ao Sistema
Se uma aplicação precisa realizar alguma instrução privilegiada, ela realiza uma chamada de sistema, que altera do modo usuário para o modo kernel.

>Chamadas de sistema são a interface entre os programas do modo usuário e o SO no modo kernel. Ex: abort(), open(), delete()...

>Existem interfaces para chamadas de sistemas, as mais utilizadas são a POSIX API para UNIX e Win32 para Windows.

![https://imgur.com/p7RWcEm.png](https://imgur.com/p7RWcEm.png)

![https://imgur.com/2An0aqy.png](https://imgur.com/2An0aqy.png)

## Interrupções x Traps

### Interrupções
- Evento externo ao processador;
- Causado por hardware.

### Traps
- Evento vindo de dentro do processador;
- Causado por software.

## Processos
Um processo é caracterizado como um programa em execução. Em termos mais técnicos, um processo está contido na memória ram, enquanto um programa em si é um processo que está contido no disco esperando o swapping.

**Programa**:
- Um programa pode ter várias instâncias em execução em diferentes processos;
- Algoritmo codificado;
- Forma como o programador vê a tarefa a ser executada.

**Processo**:
- Um processo é único;
- Código acompanhado de dados e momentos de execução (contexto).

Cada processo possui:
- Programa (instruções que serão executadas);
- Espaço de Endereçamento
- PCB (Process Control Block)
- Atributos

### Primeiro Plano
- Interagem com o usuário:
	- Leitura de um arquivo;
	- Iniciar um programa.

![https://imgur.com/zuDRcrX.png](https://imgur.com/zuDRcrX.png)

### Segundo Plano (Daemons)
- Processos com funções específicas que independem de usuários:
	- Recepção e envio de emails;
	- Serviços de impressão.

![https://imgur.com/iOTyIFu.png](https://imgur.com/iOTyIFu.png)

### Espaço de Endereçamento
O espaço de endereçamento é uma lista de posições na memória onde o processo pode ler e escrever. Possui três segmentos:

- **Texto**:
	- Código executável dos programas.
- **Dados**:
	- Variáveis.
- **Pilha de Execução**:
	- Controla a execução dos processos;
	- Empilha chamadas de procedimentos, parâmetros e variáveis locais, etc;
	- Contém uma estrutura para cada rotina chamada que ainda não retornou.

![https://imgur.com/i25QXfo.png](https://imgur.com/i25QXfo.png)

## Process Control Block

O PCB é uma estrutura que contém todas as informações de que o SO precisa para gerenciar cada processo. Contém o ponteiro, o id do processo, o contador de programa (registrador que aponta para a próxima instrução a ser executada), registradores, etc.

![https://imgur.com/MqKlxzi.png](https://imgur.com/MqKlxzi.png)

![https://imgur.com/QKBqrxa.png](https://imgur.com/QKBqrxa.png)

>O espaço de endereçamento não está contido no PCB.

>Quando uma interrupção ocorre, o sistema precisa salvar o contexto corrente da execução da CPU – de modo a restaurar esse contexto quando seu processamento for concluído – essencialmente, suspendendo o processo para depois retorna-lo.

## Criação
Processos são criados por outros processos, executando uma chamada de sistema. Ex: fork() que cria um clone do processo pai.

![https://imgur.com/LWuUtgK.png](https://imgur.com/LWuUtgK.png)

## Finalização
Processos podem sofrer términos normais (voluntário) onde é executada a chamada de sistema exit ou exitProcess. Ou podem sofrer término por erro (voluntário) onde o processo que está sendo executado não pode ser finalizado. Além disso, pode ocorrer términos involuntários como algum bug no programa, interrupção de sinal ou algum outro comando como o kill (UNIX).

## Estados
Um processo possui três estados básicos:
- **Executando**: usando a CPU naquele momento;
- **Bloqueado**: incapaz de executar enquanto um determinado evento externo não correr;
- **Pronto**: em memória, na fila de prontos, no aguardo pronto para executar.

![https://imgur.com/CGIY1WU.png](https://imgur.com/CGIY1WU.png)

Existem outros estados atípicos:
- **Zumbi**: processo cujo pai não chamou a função wait(), sendo assim, o contexto do filho ainda está vigente na memória mesmo após o seu término.
- **Órfão**: Processo filho cujo pai terminou sua execução primeiro, deixando os filhos sem serem encerrados pela syscall.

>Balancear a carga da CPU requer trocar o processo que está rodando, dando lugar a outro que precise dela.

## Escalonador
A troca de processos, por sua vez, é feita pelo escalonador de processos. É o escalonador juntamente com um dado algoritmo de escalonamento que irá escolher qual o próximo processo a ser exxecutado. No entanto, o escalonador apenas escolhe, o dispatcher que é o responsável por "puxar o gatilho" e executar de fato o processo.

### Curto prazo
Controla os processos que estão na memória e os aloca na CPU.

## Longo prazo
Controla o grau de multiprogramação e administra o número de processos sendo executados simultaneamente.

## Médio prazo
Controla os processos que serão removidos de forma parcial ou total da memória para serem suspenso.

>A principal diferença entre o curto e longo prazo é a frequência de execução. O scheduler de curto prazo é executado pelo menos uma vez a cada 100 milissegundos.
