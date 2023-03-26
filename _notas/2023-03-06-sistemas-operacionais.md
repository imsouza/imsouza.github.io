---
layout: note
title: "Sistemas Operacionais"
author: "Mateus Almeida"
categories: [notas]
---

# Conceitos de SO

## Um Sistema Computacional consiste de:

- Um ou mais processadores;
- Memória principal;
- Discos, impressoras, teclado, monitor, interfaces de redes e dispositivs de E/S.

![SC](https://imgur.com/cRSWOmY.png)

<br>

## O que é um Sistema Operacional
- Software que realiza o intermédio entre o hardware e o usuário;
- Gerenciador de recursos.

<br>

## Aplicação sem SO

- Gasto maior de tempo de programação;
- Aumento da dificuldade;
- Uusuário preocupado com detalhes de hardware.

<br>

## Aplicação com SO

- Maior racionalidade;
- Maior dedicação aos problemas de alto nível;
- Maior portabilidade entre dispositivos diferentes.

<br>

## Vantagens do SO

- Permitir o uso eficiente e controlado dos componentes de hardware;
- Apresentar uma máquina mais flexível;
- Pertmitir o uso compartilhado e protegido dos diversos componentes de hardware e software, por diversos usuários.

<br>

## Chamadas de Sistema (syscall)

- Funções que permitem a interação com o SO;
- Permitem um controle mais eficiente sobre as operações do sistema.

![https://imgur.com/4sqCV7V.png](https://imgur.com/4sqCV7V.png)

<br>

## Formas de Processamento do SO

- Serial (Monoprogramação)
  - Recursos alocados a um único programa.
- Concorrente (Multiprogramação)
  - Recursos dinamicamente reassociados entre uma coleção de programas em diferentes estágios.

<br>

# Tipos e Estruturas de SO

## Tipos de SOs

- Monoprogramados ou Monotarefa
  - Só permitem um programa ativo em um dado período;
  - A execução permanece na RAM até o seu fim (Ex: MS-DOS);
  - Permite que o processador, a memória e os periféricos permaneceçam exclusivamente dedicados à execução de um único programa;
  - Recusos são mal utilizados, entretanto, são implementados com facilidade;
  - Pode-se pensar que o processo estará em um destes estados:

![https://imgur.com/60kSdik.png](https://imgur.com/60kSdik.png)

- Multiprogramados ou Multitarefa
  - Mantém mais de um programa na memória ;
  - Permite o compartilhamento de tempo de CPU e demais recursos (Ex: UNIX, Windows);
  - Multicore (executa diversas tarefas ao mesmo tempo);
  - A ideia é manter vários programas em memória ao mesmo tempo;
  - Há várias tarefas simultâneas em um único processador: enquanto uma espera, a outra roda;
  - Demandam mecanismos de trocas rápidas de procesos.
  - O sistema multitarefa pode ser classificado em outros três sistemaas: Batch, Tempo Compartilhado (Time-sharing) e Real.

![https://imgur.com/3Ij8GQE.png](https://imgur.com/3Ij8GQE.png)

- SO Multitarefa em Batch
  - Sistema Batch (lote) consiste em submeter ao computador um lote (batch) de programas de uma só vez;
  - Um job é um conjunto de tarefas à ser executado pela CPU (Ex: Makefile);
  - Os jobs (scripts com lote de programas) dos usuários são submetidos em ordem sequencial para a execução;
  - Não existe interação entre o usuário e o job durante sua execução.

- SO Multitarefa Interativo
  - O sistema permite que os usuários interajam com suas computações na forma de diálogo (Ex: Caixa do banco através de um mainframe);
  - Pode ser projetado como um sistema monousuário ou multiusuário (usando conceitos de multiprogramação e time-sharing).

<br>

## Estruturas de SOs

- Monolítica
  - O SO é um único módulo;
  - Consiste de um conjunto de programas que executam sobre o hardware, como se fosse um único programa;
  - Os programas de usuário invocam rotinas do SO (Ex: UNIX, Windows, MS-DOS).
  
![https://imgur.com/4nSVve7.png](https://imgur.com/4nSVve7.png)

- Micronúcleo
  - Busca tornar o núcleo do SO o menor possível;
  - A principal função é gerencias a comunicação entre processos;
  - O núcleo fornece serviços de alocação de CPU e de comunicação aos processos (IPC) (Ex: Minix, Symbian).

![https://imgur.com/KI6gtGg.png](https://imgur.com/KI6gtGg.png)

- Camadas
  - Modular
    - Divisão de programas complexos em módulos de menor complexidade
  - Hierárquico
    - A cada nível, os detalhes de operação dos níveis inferiores podem ser ignorados
  - A ideia é criar um SO modular com caracteristicas hierárquicas;
  - As interfaces são definidas para facilitar a interação entre os módulos hierárquicos (Ex: MULTICS, OpenVMS).

- Máquina virtual
  - Cria um nível intermediário entre o hardware e o SO, denominado Gerência de VM;
  - Esse nível cria diversas VMs independentes;
  - Cada VM oferece uma cópia virtual do hardware;  
  - Um outro exemplo de VM é a estrutura da linguagem Java;
  - Para executar um programa Java é necessário uma Java Virtual Machine (JVM);
  - A JVM gera um overhead (queda de performace), devido a passagem de execução de um nível para o outro até alcançar o hardware.

<br>

# Chamadas de Sistema e Interrupção

## Visão geral

- São funções que realizam determinada operação no SO;
- Chamadas de sistema são a porta de entrada para o modo kernel;
- As chamadas de sistemas são realizadas através de instruções Traps;
- Traps são conhecidas como interrupções de software;
- Após o término da chamada (Ex: ler um arquivo), a execução continua após a chamada de sistema.

![https://imgur.com/6KT1yxW.png](https://imgur.com/6KT1yxW.png)

<br>

## Passos de uma SysCall

- Aplicativo faz a chamada ao sistema (Trap);
- Através de uma tabela, o SO determina o endereço da rotina;
- Rotina de Serviço é acionada (rotina compartilhada);
- Serviço solicitado é executado e o controle retorna ao aplicativo.

![https://imgur.com/ADOv4FJ.png](https://imgur.com/ADOv4FJ.png)

<br>

## Exemplo com a chamada open()

- A função open() é requisitada;
- É realizada a busca da função open() no vetor de endereço;
- Uma vez que o endereço é encontrado, irá executar cada instrução presente no open();
- Após Finalizar a execução do open(), retorna para a interface de chamada de sistema; 
- Recebe o resultado da execução do open.

![https://imgur.com/JuPfoLD.png](https://imgur.com/JuPfoLD.png)

<br>

## Interfaces e Estrutura das SysCalls

- Interface para esconder a complexidade das syscalls;
- interface de programação fornecida pelo SO;
- Geralmente escrita em linguagem de alto nível (C, C++ ou Java);
- Normalmente as aplicações utilizam uma API;
- Interface que encapsula o acesso direto às chamadas do sistema.

<br>

## Interrupções

- Interupções no nível de software
  - write();
  - read();
  - open();
  - Entre outras chamadas.
- Interupções no nível de hardware
  - Ocorre fora do processador;
  - Provém de um sinal elétrico do hardware;
  - Causa: dispositivos de E/S ou clock;

<br>

## Interrupção vs. Traps

- Interrupção
  - Evento externo ao processador (dispositivos de E/S);
  - Gerada por dispostivos que precisam de atenção do SO.
- Traps
  - Evento inesperado interno ao processador;
  - Causado pelo processo corrente no processador.

![https://imgur.com/nMMI39s.png](https://imgur.com/nMMI39s.png)
