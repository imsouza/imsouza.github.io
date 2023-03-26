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

![https://imgur.com/3Ij8GQE.png](https://imgur.com/3Ij8GQE.png)

  - O sistema multitarefa pode ser classificado em outros três sistemaas: Batch, Tempo Compartilhado (Time-sharing) e Real.

![https://imgur.com/e2agiIA.png](https://imgur.com/e2agiIA.png)

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
![https://imgur.com/6ckC4Ab.png](https://imgur.com/6ckC4Ab.png)

- Camadas
  - Modular
    - Divisão de programas complexos em módulos de menor complexidade
  - Hierárquico
    - A cada nível, os detalhes de operação dos níveis inferiores podem ser ignorados
  - A ideia é criar um SO modular com caracteristicas hierárquicas;
  - As interfaces são definidas para facilitar a interação entre os módulos hierárquicos (Ex: MULTICS, OpenVMS).

![https://imgur.com/boTLtBF.png](https://imgur.com/boTLtBF.png)

- Máquina virtual
  - Cria um nível intermediário entre o hardware e o SO, denominado Gerência de VM;
  - Esse nível cria diversas VMs independentes;
  - Cada VM oferece uma cópia virtual do hardware;  
  - Um outro exemplo de VM é a estrutura da linguagem Java;
  - Para executar um programa Java é necessário uma Java Virtual Machine (JVM);
  - A JVM gera um overhead (queda de performace), devido a passagem de execução de um nível para o outro até alcançar o hardware.
  
  ![https://imgur.com/XG1lwAf.png](https://imgur.com/XG1lwAf.png)





