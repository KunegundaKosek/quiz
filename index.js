import Test1 from "./Test1.js";
import Test2 from "./Test2.js";
import Test3 from "./Test3.js";
import Test4 from "./Test4.js";
import Test5 from "./Test5.js";
import Test6 from "./Test6.js";
import Test7 from "./Test7.js";
import Test8 from "./Test8.js";
import Test9 from "./Test9.js";
import Test10 from "./Test10.js";
import Test11 from "./Test11.js";
import Test12 from "./Test12.js";


import AllAnswers from "./AllAnswer.js";

const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const answer5 = document.querySelector('#answer5');
const answer6 = document.querySelector('#answer6');
const answer7 = document.querySelector('#answer7');
const answer8 = document.querySelector('#answer8');
const answer9 = document.querySelector('#answer9');
const answer10 = document.querySelector('#answer10');
const answer11 = document.querySelector('#answer11');
const answer12 = document.querySelector('#answer12');

const allAnswer = document.querySelector('#answers');

const removeButton = () => {
    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();
    answer5.remove();
    answer6.remove();
    answer7.remove();
    answer8.remove();
    answer9.remove();
    answer10.remove();
    answer11.remove();
    answer12.remove();


    allAnswer.remove();
}

answer1.addEventListener('click', () => removeButton());
answer2.addEventListener('click', () => removeButton());
answer3.addEventListener('click', () => removeButton());
answer4.addEventListener('click', () => removeButton());
answer5.addEventListener('click', () => removeButton());
answer6.addEventListener('click', () => removeButton());
answer7.addEventListener('click', () => removeButton());
answer8.addEventListener('click', () => removeButton());
answer9.addEventListener('click', () => removeButton());
answer10.addEventListener('click', () => removeButton());
answer11.addEventListener('click', () => removeButton());
answer12.addEventListener('click', () => removeButton());

allAnswer.addEventListener('click', () => removeButton());


Test1();
Test2();
Test3();
Test4();
Test5();
Test6();
Test7();
Test8();
Test9();
Test10();
Test11();
Test12();

AllAnswers();


