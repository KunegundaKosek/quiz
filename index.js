import Test1 from "./Test1.js";
import Test2 from "./Test2.js";
import Test3 from "./Test3.js";
import Test4 from "./Test4.js";
import Test5 from "./Test5.js";
import Test6 from "./Test6.js";

import AllAnswers from "./AllAnswer.js";

const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const answer5 = document.querySelector('#answer5');
const answer6 = document.querySelector('#answer6');

const allAnswer = document.querySelector('#answers');

const removeButton = () => {
    answer1.remove();
    answer2.remove();
    answer3.remove();
    answer4.remove();
    answer5.remove();
    answer6.remove();

    allAnswer.remove();
}

answer1.addEventListener('click', () => removeButton());
answer2.addEventListener('click', () => removeButton());
answer3.addEventListener('click', () => removeButton());
answer4.addEventListener('click', () => removeButton());
answer5.addEventListener('click', () => removeButton());
answer6.addEventListener('click', () => removeButton());

allAnswer.addEventListener('click', () => removeButton());


Test1();
Test2();
Test3();
Test4();
Test5();
Test6();

AllAnswers();