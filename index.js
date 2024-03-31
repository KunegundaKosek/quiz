import Test1 from "./Test1.js";
import Test2 from "./Test2.js";

const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');

const removeButton = () => {
    answer1.remove();
    answer2.remove();
}

answer1.addEventListener('click', () => removeButton());
answer2.addEventListener('click', () => removeButton());


Test1();
Test2();