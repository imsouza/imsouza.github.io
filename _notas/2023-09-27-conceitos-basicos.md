---
layout: note
title: "Conceitos Básicos do SO"
author: "Mateus Almeida"
categories: [notas]
tags: [Sistemas Operacionais]
---

## Sistema Computacional
Conjunto de dispositivos eletrônicos que processam informações de acordo com um programa, sendo composto por hardware, software, informações, pessoas, procedimentos e documentação.

## O que é um Sistema Operacional?
Um sistema operacional é um software ou conjunto de softwares responsável por administrar e gerenciar os recursos de um sistema, estabelecendo a interface entre o usuário e o hardware. Ele desempenha funções essenciais para o funcionamento do sistema, como gerenciamento de recursos, execução de programas e gerenciamento de arquivos.

## Importância do SO
O sistema operacional é importante em um sistema computacional porque permite a interação entre o usuário e o hardware realizando o intermédio entre o software e o hardware, gerencia os recursos do sistema, executa programas, gerencia arquivos, garante a segurança do sistema e fornece atualizações e correções regulares.

## Máquina Multinível
Uma máquina multinível é uma arquitetura de software que consiste em diferentes camadas de abstração, cada uma com suas próprias operações e abstrações de objetos. Essa abordagem permite o desenvolvimento modular e reutilizável de software, facilitando a programação em níveis mais altos de abstração.

## Vantagens do SO
As vantagens de um sistema operacional incluem uma interface amigável, gerenciamento eficiente de recursos, capacidade de executar programas, recursos de segurança, suporte e atualizações regulares, e compatibilidade de software. No entanto, é importante observar que as vantagens podem variar dependendo do sistema operacional específico e das necessidades do usuário.

## Iteração com o SO
Os programas de usuário invocam serviços do SO por meio das chamadas de sistema ou syscalls. As syscalls permitem um controle mais eficiente sobre as operações do sistema e um acesso mais direto sobre as operações de hardware especialmente a E/S. Alguns exemplos de chamadas de sistema no Unix e Windows são: fork(), exit(), CreateProcess(), ExitProcess().

## Formas de Processamento do SO
- Serial (Monoprogramação): recursos alocados a um único programa.
- Concorrente (Multiprogramação): recursos dinamicamente reassociados entre uma coleção de programas em diferentes estágios.

## Inicialização
O processo de inicialização começa com o BIOS, que é um programa de firmware embutido na placa-mãe do computador na memória EEPROM. O programa bootstrap é o programa inicial que é executado quando o computador é ligado. Ele é responsável por encontrar o kernel do sistema operacional no disco e carregá-lo na memória.
