---
layout: note
title: "Exercícios Capítulo 1 Silberschatz"
author: "Mateus Almeida"
categories: [notas]
tags: [Sistemas Operacionais]
---

>1.1) Quais são as três principais finalidades de um sistema operacional? 

- Prover um ambiente conveniente para que o usuário possa executar de maneira eficiente programas no hardware do computador;
- Alocar, separar e gerenciar recursos da máquina;
- Supervisão da execução de programas de usuário para evitar erros e uso indevido do computador e gerenciamento de dispositivos de E/S.

>1.4) Enfatizamos a necessidade de um sistema operacional fazer uso eficiente do hardware de computação. Quando é
apropriado que o sistema operacional abra mão desse princípio e “desperdice” recursos? Por que esse tipo de sistema não
é realmente desperdiçador?

Um sistema operacional é responsável por gerenciar os recursos de um computador, permitindo que sejam usados de maneira eficiente. No entanto, há situações em que é apropriado que o sistema operacional "desperdice" recursos, ou seja, use mais recursos do que o necessário para executar uma tarefa específica. Isso pode ocorrer em situações em que o desempenho do sistema é mais importante do que a eficiência no uso de recursos. Por exemplo, em jogos ou aplicativos que exigem muito processamento, o sistema operacional pode alocar mais recursos para garantir que o aplicativo funcione sem problemas.

>1.5) Qual é a principal dificuldade que um programador deverá contornar na escrita de um sistema operacional para um
ambiente de tempo real?

A principal dificuldade que um programador deve contornar na escrita de um sistema operacional para um ambiente de tempo real é garantir que as tarefas sejam executadas dentro de prazos pré-definidos para garantir que as operações críticas sejam executadas com sucesso sem falhas.

>1.7) Como a distinção entre o modo kernel e o modo usuário pode funcionar como uma forma rudimentar de sistema de proteção (segurança)?

O modo kernel é conhecido como modo privilegiado, que tem acesso completo ao computador e a todas as partes do hardware, enquanto o modo usuário limita as ações para garantir a segurança e não comprometer nenhuma parte do próprio sistema. Dessa forma, o sistema operacional pode controlar o acesso aos recursos do sistema, permitindo que apenas processos autorizados acessem recursos privilegiados.

>1.13) Em um ambiente de multiprogramação e tempo compartilhado, diversos usuários compartilham o sistema simultaneamente. Essa situação pode resultar em vários problemas de segurança.
>a) Quais são dois desses problemas?

- Acesso não autorizado a dados ou recursos: como vários usuários compartilham o sistema simultaneamente, é possível que um usuário acesse dados ou recursos que não deveria ter acesso, comprometendo a segurança do sistema;
- Interferência entre processos: quando vários processos estão sendo executados simultaneamente, é possível que um processo interfira no funcionamento de outro processo, causando falhas ou erros no sistema

>b) Podemos garantir o mesmo grau de segurança em uma máquina de tempo compartilhado e em uma máquina dedicada? Explique sua resposta.

Não é possível garantir o mesmo grau de segurança em uma máquina de tempo compartilhado e em uma máquina dedicada. Isso ocorre porque, em uma máquina de tempo compartilhado, vários usuários compartilham o mesmo sistema, o que aumenta o risco de acesso não autorizado a dados ou recursos e interferência entre processos. Em uma máquina dedicada, por outro lado, apenas um usuário tem acesso ao sistema, o que reduz o risco de acesso não autorizado e interferência entre processos.

>1.17) Descreva as diferenças entre o multiprocessamento simétrico e assimétrico. Cite três vantagens e uma desvantagem dos sistemas multiprocessados.

O multiprocessamento é o uso de duas ou mais unidades centrais de processamento em um único sistema de computador.

- Multiprocessamento simétrico (SMP - Symmetric Multi-Processing): todos os processadores no sistema têm acesso igual à memória e aos dispositivos de entrada/saída. Cada processador executa tarefas independentes e pode assumir o controle do sistema quando necessário. É comum em servidores e estações de trabalho de alto desempenho;
- Multiprocessamento assimétrico (ASMP - Asymmetric Multi-Processing): apenas um processador é responsável por executar o sistema operacional e gerenciar os recursos do sistema, enquanto os outros processadores executam tarefas específicas. É comum em sistemas embarcados e dispositivos móveis.

**Vantagens**:
- Melhor desempenho: o uso de vários processadores permite que o sistema execute várias tarefas simultaneamente, melhorando o desempenho geral;
- Maior confiabilidade: se um processador falhar, os outros processadores podem assumir o controle do sistema, garantindo que o sistema continue funcionando;
- Escalabilidade: é possível adicionar mais processadores ao sistema para aumentar o desempenho, sem a necessidade de substituir todo o sistema.

**Desvantagens**:
Uma desvantagem dos sistemas multiprocessados é o aumento da complexidade do sistema, o que pode tornar a depuração e o desenvolvimento mais difíceis.

>1.19) Faça a distinção entre os modelos cliente-servidor e peer-to-peer dos sistemas distribuídos.

- Modelo cliente-servidor: nesse modelo, o gerenciamento de dados é centralizado, ou seja, há um servidor que fornece serviços e recursos para vários clientes que se conectam a ele. O servidor é responsável por gerenciar os dados e recursos, enquanto os clientes solicitam esses dados e recursos. Esse modelo é comum em redes corporativas e sistemas de banco de dados.
- Modelo peer-to-peer: nesse modelo, não há um servidor centralizado, mas sim vários nós que se conectam diretamente uns aos outros, formando uma rede descentralizada. Cada nó é responsável por fornecer e solicitar dados e recursos, e todos os nós têm acesso aos mesmos recursos. Esse modelo é comum em sistemas de compartilhamento de arquivos e redes sociais.

>1.22) Qual é a finalidade das interrupções? Quais são as diferenças entre um trap e uma interrupção? Os traps podem ser gerados intencionalmente por um programa do usuário? Nesse caso, para que finalidade?

As interrupções são eventos que ocorrem em um sistema de computador que exigem a atenção imediata do processador. Elas permitem que o processador responda a eventos gerados por dispositivos enquanto outro trabalho está sendo realizado.

- Interrupções síncronas: ocorrem em resposta a uma instrução específica que está sendo executada pelo processador. Elas são geralmente chamadas de traps e podem ser geradas explicitamente por instruções do programa.
- Interrupções assíncronas: ocorrem em resposta a eventos externos ao processador, como entrada/saída de dados ou falhas de hardware.
- Resumidamente, os traps são geralmente gerados pelo próprio programa do usuário (software), enquanto as interrupções são geradas por dispositivos externos ao processador (hardware).

>1.24) Alguns sistemas computadorizados não fornecem um modo de operação privilegiado no hardware. É possível construir um sistema operacional seguro para esses sistemas computadorizados? Dê argumentos para isso ser possível e impossível.

É possível construir um sistema operacional seguro para sistemas computadorizados que não fornecem um modo de operação privilegiado no hardware. Isso porque a segurança de um sistema operacional não depende apenas do modo privilegiado, mas também de outros mecanismos de segurança, como criptografia, autenticação de usuários e controle de acesso.

>1.25) Dê duas razões para a utilidade dos caches. Que problemas eles resolvem? Que problemas eles causam?

**Vantagens**:
- Melhor desempenho: os caches armazenam dados frequentemente acessados em uma área de memória mais rápida e de acesso mais rápido, permitindo que o processador acesse esses dados mais rapidamente e melhorando o desempenho geral do sistema;
- Redução do tráfego de dados: os caches reduzem o tráfego de dados entre o processador e a memória principal, pois os dados frequentemente acessados são armazenados no cache, reduzindo a necessidade de acessar a memória principal.

**Desvantagens**:
- Consistência de dados: se um programa modifica um dado armazenado no cache, mas não atualiza o dado na memória principal, pode ocorrer uma inconsistência de dados;
- Espaço limitado: os caches têm um espaço limitado, o que significa que nem todos os dados podem ser armazenados no cache. Isso pode levar a uma situação em que os dados frequentemente acessados são armazenados no cache, mas os dados menos frequentemente acessados são armazenados na memória principal, o que pode afetar o desempenho do sistema.

>1.28)  Descreva um mecanismo para impor a proteção de memória, a fim de impedir que um programa modifique a memória associada a outros programas.

Um mecanismo para impor a proteção de memória e impedir que um programa modifique a memória associada a outros programas é a utilização de memória virtual, proteção de página e controle de acesso.

>1.30) Defina as propriedades essenciais dos seguintes tipos de sistemas operacionais:

- a) Batch:
	- Tarefas são agrupadas e executadas em lote;
	- Não há interação com o usuário durante a execução das tarefas.
- b) Interativo:
	- Permite a interação do usuário com o sistema operacional;
	- A CPU comuta rapidamente de um usuário para outro.
- c) Tempo compartilhado:
	- Vários usuários compartilham o sistema simultaneamente;
	- Cada usuário recebe uma fatia de tempo para executar suas tarefas.
- d) Tempo real:
	- Normalmente usado em uma aplicação dedicada específica;
	- O sistema lê informações de sensores e precisa responder dentro de um período de tempo fixo por meio de atuadores.
- e) Rede:
	- Permite que vários computadores se comuniquem e compartilhem recursos;
	- Os recursos podem ser acessados por usuários em diferentes computadores.
- f) Paralelo:
	- Usa vários processadores para executar tarefas simultaneamente;
	- Melhora o desempenho do sistema.
- g) Distribuído:
	- Vários computadores trabalham juntos para executar tarefas;
	- Os recursos são distribuídos entre os computadores.
- h) Em clusters:
	- Vários computadores são conectados para trabalhar juntos como um único sistema;
	- Melhora o desempenho e a confiabilidade do sistema.
- i) Portátil:
	- Pode ser executado em diferentes plataformas de hardware;
	- Permite que os usuários executem o mesmo software em diferentes dispositivos.

>1.32) Cite vantagens de um sistema operacional de código aberto.

Um SO com código-fonte acessível e que pode ser modificado e distribuído livremente, resulta em uma comunidade ativa de desenvolvedores que trabalham constantemente para melhorar e atualizar o sistema operacional. Aumentando sua segurança e estabilidade.


