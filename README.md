# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

Mobile:
![](./screenshot2.jpg)

Desktop:
![](./screenshot1.jpg)

### Links

- Solution URL: (https://frontendmentor.io/profile/Duran144/solutions)

## My process

### Built with 

- HTML5
- CSS
- Flexbox
- Javascript

### What i learned

Building this project i learned about Media queries and how they are used to change how your layout looks on different screen sizes.

``` css
@media screen and (max-width: 59em) {

    .parent-box{
        flex-direction: column;
        width: 80%;
    }

    .box-1{
        margin: 0 auto;
        width: 75%;
    }

    .box-2{
        margin: 0 auto;
        width: 70%;
    }

    .bill-input{
        width: 80%;
    }

    .tip-btn{
        width: 9rem;
    }

    .custom-btn{
        width: 9rem;
    }

    .custom-input{
        width: 6.7rem;
    }

    .nop-input{
        width: 80%;
    }

    .reset-btn{
        margin-top: 4rem;
        margin-bottom: 0;
    }
}
```

I also learned that you can add javascript functions to html elements and provide data to the parameters of the function
``` html
<button class="tip-btn" onclick="Tip(5)">5%</button>
<button class="tip-btn" onclick="Tip(10)">10%</button>
<button class="tip-btn" onclick="Tip(15)">15%</button>
<button class="tip-btn" onclick="Tip(25)">25%</button>
<button class="tip-btn" onclick="Tip(50)">50%</button>
<button class="custom-btn" id="myInput" onclick="customTip()">Custom</button>
```

This project also taught me that using javascript you can change an html element to a different type of element
``` js
let inputBox = document.createElement('input');
    custombtn.parentNode.replaceChild(inputBox,custombtn);
    inputBox.classList.add('custom-input');
``` 

### Continued development
* I want to continue improving my skills on media queries.
* My Javascript skils in general is an area i want to improve on.

### Useful Resources

## Author

- Frontend Mentor - [@Duran144](https://www.frontendmentor.io/profile/Duran144)

- Github - [Duran144](https://www.github.com/Duran144)