---
layout: layouts/post.njk
title: "Flutter: Widget tree e o gerenciamento de estado"
date: 2020-08-12T14:55:18.233Z
tags:
  - flutter
  - widget tree
---
### *No Flutter, tudo é widget!*

**Widget tree** (ou árvore de widgets) é a estrutura que representa como os nossos widgets estão organizados.

Uma página web possui o **DOM** e o Flutter possui a **Widget Tree**.

O Flutter também usa a abordagem [declarativa](https://flutter.dev/docs/get-started/flutter-for/declarative) para construção de interfaces, isto significa que a interface representa o estado da aplicação.

Então, conforme vamos construindo nosso aplicativo, compondo os widgets uns com os outros, esta estrutura pode (e certamente vai) crescer. E quanto mais a nossa widget tree ela cresce, mais complicado fica para para controlar a interface, afinal, vários widgets podem  

 
So, as we build our application, composing widgets to each other, this structure can (and certainly will) grow. As it gets bigger, it gets more complicated to represents the state of our application in the interface.

The image below is from [documentation](https://flutter.dev/docs/development/data-and-backend/state-mgmt/intro) and represents perfectly a shopping cart: 
![Widget Tree](https://thepracticaldev.s3.amazonaws.com/i/q0m1c1s77u7uky4zwh2m.gif)

* MyApp - The root widget. Our app starts here.
* MyLoginScreen - Initial screen.
* MyCatalog - After sign in, the screen has a list of products and an app bar which allow the user to access the cart.
* MyCart - When the user chooses a product, that one is put within the cart.

The key point here is the user action to add products to the cart, because you need to inform MyCart, that your status has changed, now it has 1 item (MyListitem).

In this scenario, our widget tree is small. Imagine if within the catalog we had a division by categories and sub-categories or that in the cart we could have a wishlist, gift list or the user having a screen with details of your profile, history of all purchases. Easily our widget tree will become bigger and more complex.

So, we have several widgets that can consume and/or update the state of the application.

Knowing this, from now on, we will be guided by the "rule" below:

> Only rebuild the required amount of widgets when the application state changes.
> How to follow this rule? Using some [state management](https://flutter.dev/docs/development/data-and-backend/state-mgmt/options) solution.

### **State Management**

This isn't a simple topic in any framework. And with Flutter isn't different.

> Flutter is a non-opinated framework, that is, it does not "think" how you should do things. It does not force you to use embedded solutions and/or patterns. It leaves you free to choose the most suitable solution for your project.

And Uncle Ben already teach us: 

> **With great power, comes great responsibility**

Choosing the right solution for your project is fundamental to a good development cycle. You can not get ahead to find out that the chosen solution has become a bottleneck and is making it difficult to maintain, create new features or even limit the expansion of our app.

#### **There is no better solution or a solution to every problem. Each of them has its strengths and weaknesses.**

On the next article, I will write a bit about scoped_model and provider.

**[scoped_model](https://github.com/brianegan/scoped_model)** was the first package explicitly recommended by Flutter documentation.

**[provider](https://github.com/rrousselGit/provider)** is the newest recommendation. Flutter team endorsed the use of this package on state at last Google IO. It is more robust than scoped_model and still easy to understand.

See you soon :)