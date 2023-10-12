---
layout: note
title: "Estruturas de SOs"
author: "Mateus Almeida"
categories: [notas]
tags: [Sistemas Operacionais]
---

## Monolítica
A estrutura monolítica é a arquitetura onde o SO em si é um único módulo no modo kernel. Ex: MS-DOS, Windows, Linux.

![https://imgur.com/zShPETc.png](https://imgur.com/zShPETc.png)

**Vantagens**:
- Desempenho;
- Facilidade em implementação.

**Desvantagens**:
- Difícil manutenção, pois, o SO é um único módulo;
- Em alguns casos, se um serviço parar no modo kernel, todo sistema sofrerá consequências por isso.

### Camadas

A ideia básica é criar um SO com uma hierarquia de níveis de abstração, onde cada camada é contruída sobre a camada inferior. Isso permite a modularização, dividindo um programa complexo em módulos hierárquicos de menor complexidade.

![https://imgur.com/Qdroqjl.png](https://imgur.com/Qdroqjl.png)

**Vantagens**:
- Isolamento dos serviços do SO facilita a manutenção;
- A hierarquia protege as camadas mais internas.

**Desvantagens**:
- Diminuição do desempenho por conta da quantidade de mudança de modos de acesso;

## Microkernel
Devido o problema de que, em alguns casos, se um serviço parar no modo kernel do sistema monolítico o sistema como um todo será afetado, o microkernel surge como uma solução. A ideia é adicionar todos principais serviços do modo kernel ao modo usuário, deixando apenas os serviços básicos no modo kernel. Assim, se um serviço parar ele estará no modo usuário, o que não afetara o kernel como um todo. Ex: Minix.

![https://imgur.com/D4yhlEp.png](https://imgur.com/D4yhlEp.png)

>A principal função do núcleo é gerenciar a comunicação entre processos. Onde cada processo é responsável por gerenciar um conjunto específico de funções.

**Vantagens**:
- Tem como objetivo tornar o núcleo o menor possível;
- Maior proteção do núcleo;
- Maior segurança e confiabilidade;

**Desvantagens**:
- Difícil para implementar;
- Menor desempenho devido à necessidade constante de mudança de modo de acesso (modo usuário e kernel).

## Máquina Virtual
O modelo de VM cria um nível intermediário entre o hardware e o SO, denominado Gerência de Máquinas Virtuais (GVM).

![https://imgur.com/MN9mmfC.png](https://imgur.com/MN9mmfC.png)

Este nível (GVM) cria diversas máquinas virtuais independentes, onde cada uma oferece uma cópia virtual do hardwarem, incluindo modos de acesso, interrupções, dispositivos de E/S, etc.

>Cada VM é independente das demais.

**Vantagens**:
- Cria um ambiente isolado para cada VM.

**Desvantagens**:
- Consumo de processamento e uso do hardware original da máquina.

## Cliente-Servidor
Esse modelo consiste na implementação de um SO como processos do usuário (processos cliente). Serviços (Ex: ler um arquivo) são feitos por requisição do cliente ao processo servidor, que executa e devolve a resposta.

![https://imgur.com/MN9mmfC.png](https://imgur.com/MN9mmfC.png)

>O kernel trata apenas da comunicação entre clientes e servidores. Há servidor de arquivo, memória, processos, etc.

>A ideia de cliente-servidor é bastante comum em redes de computadores.

**Vantagens**:
- Adaptabilidade ao uso em sistemas distribuídos;
- Cada servidor roda em modo usuário - não tem acesso direto ao hardware;
- Erros em algum servidor não afetarão a máquina toda.

**Desvantagens**:
- Latência;
- Complexidade pela necessidade de se carregar comandos em registradores de controladoras.

## Modos de Acesso ao Hardware

Os modos de acesso (usuário e kernel) servem para proteger o kernel do SO contra acessos indevidos.

### Modo Usuário
Aplicações não têm acesso direto aos recursos da máquina, ou seja, ao hardware.

>Quando o processador trabalha no modo usuário, a aplicação só pode executar instruções sem privilégios.

**Vantagens**:
- Garantir a segurança e a integridade do sistema;
- Se o c´odigo no modo usuário tenta fazer algo que não devida, ocorre uma interrupção;
- Em vez do sistema todo cair, somente a aplicação problemática cairá.

### Modo Kernel
Aplicações têm acesso completo e diretoa os recursos da máquina, ou seja, ao hardware, e executa operações com privilégios.

>Quando o processador trabalha no modo kernel, a aplicação tem acesso ao conjunto total de instruções.

**Vantagens**:
- Apenas o SO tem acesso às instruções privilegiadas.

**Desvantagens**:
- Problemas ocorridos no modo kernel podem travar toda a máquina.