---
layout: essay
type: essay
title: Is JavaScript easy to learn?
date: 2019-09-06
labels:
  - Software Engineering
  - Learning
  - JavaScript
---

Many people have told me how vital Javascript is. My professor of software engineering class said to us that Javascript is an easy language if we have any other programing language background. But actually, is Javascript an easy language?

In my opinion, Javascript is close to Java or C/C++. Generally, each line of code ends with a semi-column. The loops and if statements use braces around them just like Java. Although Javascript is so close to those languages before Javascript was created, it never means that we can start writing programs without knowing the syntax. How familiar the programmer is to the language will directly affect the efficiency dramatically.

It was a story in the first "workout of the day" session of my software engineering class. The goal of the session is to write the code in the time limit and solve the problem. The problem was easy; we need to replace all the single spaces to double spaces in the given string. What first came out in my mind is to create a new string, copy each character to the string if that character is not a space. If the character is a space, then an additional space will be there in the next position. It took me about 3 minutes to finish my code. However, the result was all blank.

After a few attempts, I started to realize that the C++ way of manipulating strings is not applicable in Javascript. I was trying hard to think about an alternative way to do this problem. However, I found there wasn't a way I could make sure that the code would work before time run out. Just before the time limit, I passed with a very inefficient way. 

```Javascript
// my terrible code 
function doubleSpaces(string){
    let j = 0;
    let str = [];
    let result = "";
    for (let i = 0; i < string.length; i++){
        str[j] = string[i];
    	if (string[i] == " ") {
	    j ++;
	    str[j] = " ";
	}
        j++;
    }
    for (let i = 0; i < str.length; i++){
        result += str[i];
    }
    return result;    
}



console.log(doubleSpaces("i am in ics 314"));  // Prints "i  am  in  ics  314"
console.log(doubleSpaces(" hello world"));     // Prints "  hello  world"
console.log(doubleSpaces("nospaces"));         // Prints "nospaces"
```


The algorithm is important. However, it's not enough only to know the algorithm. When my professor was talking about efficient ways, I realized that I had learned all of them. When I was learning python during the summer break, I had already learned about regular expression and ternary operator. Javascript is a language that absorbs many features from other languages. It is easy to learn, but it takes time to be familiar with it. 

```Javascript
function doubleSpaces(string){
    let result = "";
    for (char of string){
        result += char == ' ' ? '  ' : char; 
    }
  return result;
}
```

