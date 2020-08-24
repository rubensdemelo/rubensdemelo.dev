---
title: "Flutter + AWS Amplify "
date: 2020-08-23
tags:
  - flutter
  - aws
  - amplify
  - backend
---
Uma nova opção de backend para aplicativos em Flutter.

- - -

#### Resumão

O [AWS Amplify](https://aws.amazon.com/pt/amplify/) finalmente agora suporta aplicativos Flutter. Está no estágio de Developer Preview e os recursos disponíves são: **Auth**, **Storage** e **Analytics**. 

#### Flutter + AWS Amplify

O [Flutter](https://flutter.dev/) cresceu (e muito) rapidamente. Consequentemente a busca por opções para backend também. Até então, o [Firebase](https://firebase.google.com/?hl=pt-br) era o único grande `backend as a service` disponível, com integração "nativa" e intuitiva para o Flutter ( a sinergia entre estres dois produtos é surpreendente :heart_eyes:). 

Outro grande produto deste mercado é o [AWS Amplify](https://aws.amazon.com/pt/amplify/), mas que até então, suportava apenas apps nativos ou com Javascript. 

E o suporte ao Flutter era uma das features mais requisitadas para o produto: https://github.com/aws-amplify/amplify-js/issues/1852.

#### Finalmente, a espera acabou!

O [AWS Amplify](https://aws.amazon.com/pt/amplify/) finalmente agora suporta aplicativos Flutter. Está no estágio de Developer Preview e os recursos disponíves são: **Auth**, **Storage** e **Analytics**. Neste [post](https://aws.amazon.com/pt/blogs/mobile/announcing-aws-amplify-flutter-developer-preview/) há mais detalhes sobre a motivação, design & arquitetura da solução, casos de uso e próximos passos.

#### Primeira impressões

Em breve vou fazer um post para detalhar melhor, mas vamos lá:

AWS Amplify CLI - Facilita muito a configuração e ainda te auxilia caso faça alguma besteira.
Documentação e exemplos - Simples, diretos e bem detalhados.
Auth Exceptions - Todas as exceptions são retornadas em uma lista, de uma só vez.
Dashboard - Não é tão intuitivo quanto o Firebase.
Configuração - Se a configuração estiver errada, só vai descobrir em tempo de execução.

#### E agora?

O projeto está em `Developer Preview`, ou seja, há muito o que ser feito. Logo, toda contribuição é valida! Seja melhoria da documentação, do código Dart, novas issue para bugs e feedbacks em geral.

Obrigado e até a próxima