---
layout: layouts/post.njk
title: Como não começar com Flutter
metaTitle: ""
metaDesc: flutter, bloc
socialImage: /images/como-nao-comecar-com-flutter.png
date: 2019-05-25T14:27:24.370Z
tags:
  - flutter
  - bloc
---
> Gerenciamento de estado é a coisa mais importante dentre as menos importantes

- - -

#### Resumão:

Existem tópicos fundamentais para aprender antes de se preocupar com gerenciamento de estado. Por isso, criei uma lista para facilitar o caminho de quem está começando com Flutter.

- - -

Alguns dias atrás eu postei no Twitter meu maior erro sobre o aprendizado com Flutter:

![Meu tweet sobre como não começar](/images/como-nao-comecar-com-flutter.png "Como não começar com Flutter")

*(Agora, o package [provider](https://pub.dev/packages/provider) é a nova recomendação pela documentação do Flutter)*

Motivado por muitas perguntas no StackOverflow sobre o padrão **“BLoc”**, eu decidi compartilhar no Twitter (e recebi feedbacks bem bacanas, para minha surpresa) e agora escrevo este post para ajudar os futuros desenvolvedores em Flutter.

Quase todos os dias, os novatos em Flutter perguntam sobre o “BLoC” ou até pior, packages que tornam “simples” a implementação deste padrão.

Você tem outros assuntos mais importante no começo:

* Linguagem Dart (mesmo que esta não seja complicada)
* Widget tree
* Box Constraints
* Widgets básicos
* Stateless and Stateful widgets
* Navegação
* Ciclo de vida dos widgets
* Os packages Material e Cupertino
* Keys

Quando você precisar compartilhar valores ou passá-los para baixo, na sua widget tree, utilize o InheritedWidget, ele é fácil e provavelmente vai atender as suas necessidades no começo. Se você já utilizou `MediaQuery.of(context)` ou `Theme.of(context)`, então já utilizou o [InheritedWidget](https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html).

E até mesmo depois de ter um bom conhecimento sobre os tópicos acima, quando começar com o gerenciamento de estado, existem excelentes packages: [scoped_model](https://pub.dev/packages/scoped_model) e o mais recente e poderoso [provider](https://pub.dev/packages/provider). Eu recomendo fortemente o [scoped_model](https://pub.dev/packages/scoped_model). Ele é simples, bem documentado, funciona muito bem para apps de pequeno e médio porte (não importa o quão complexo ele seja) e foi explicitamente o primeiro package para gerenciamento de estado recomendado pela documentação do Flutter (e agora o [provider](https://pub.dev/packages/provider) é o novo queridinho).

Tenha em mente que gerenciamento de estado não é um tópico simples, não existe uma “bala de prata” e o Flutter te permite escolher a solução que você quiser. E o mais importante na sua jornada é descobrir qual solução se encaixa melhor na sua necessidade e qual delas você se sente confortável e confiante para utilizar no seu app.

Pra fechar, gostaria de deixar claro que este artigo não é contra o padrão BLoC (definitivamente, não). É apenas um conselho para aqueles que estão chegando agora no mundo Dart & Flutter e podem ficar frustrados tentando implementar o BLoC quando eles não precisam.

\- - - 

Obrigado e até a próxima