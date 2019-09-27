---
layout: essay
type: essay
title: Why We Need Coding Standards
date: 2019-09-26
labels:
  - Software Engineering
  - IntelliJ
  - EsLint
---

When people code for themselves, coding standards don't seem to be an important issue. As long as the variable names make sense to the programmers, they use whatever name they want. I've seen some programmers showing their code on technical communities with incredibly messy structures. I also know a guy who uses abbreviations for everything, and he uses a memo for the actual name of those variables. I also see people complain about their colleagues using unreadable function names like "function1", "function2", etc.

Back to tens of years ago, many programmers just program for their own. They only need to care if the program works or not. It's true that in the past when the size of memory and storage is a critical issue, it's wise to shorten the length of the code. 

It's 2019 now. There have been more than 30 years since the first version control system was released. One of the main ideas about version control is to let software developers work together on a big project. When a programmer has terrible coding habits, it's hard for other people to use his/her code. It's like you want to show your solution of a math problem to your friend, your axis directions are to the opposite side, and there are some unknown symbols in your algebra. You can still explain how it works; however, your friends will need more time to understand it. The same thing happens in coding. You may save 30 seconds for using the fast way you like; however, who wants to read your code may spend three more minutes to understand your coding style. When your team grows, or you wants to show your code to the whole world, things get even worse because everyone needs to spend time learning your coding philosophy. So why can't we use the same coding standard?

Many coding quality improvement tools can help us standardize our code. Generally, there are two ways to check the code. There are some tools that you can use to check the standard manually. When I was learning Java, I used a built-in check-style tool in jGrasp. The bad thing about manually checking is after you have typed hundreds of lines of code and press the check bottom, there could be hundreds of style errors. I think this is frustrating for beginners. Another type is the automatic check. I use Eslint for automatic check in Javascript. The issue is that the automatic check is too sensitive. When you define a function and have finished the first line, Eslint starts to complain that you don't put a return in the function. After you have added the return, it warns again for not calling the function. It's a little bit annoying because even when you are doing things correctly, you still get warnings.

When I use more style checks, I get fewer warnings than before. I think coding standards are essential. They also help you learn a language better. For example, when initializing a variable in Javascript, 'var' should be replaced by 'let' or 'const'. When using C, gets() function should never be in our code. Therefore, we will get fewer bugs in our code.




