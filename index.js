import { answers } from './answers1.js';
import Timer from './timer.js';

const buttonStart = document.querySelector('#start');
const h1 = document.querySelector('h1');
const main = document.querySelector('.main');

const counter = document.querySelector('#timer');

const goodAnswers = [];
const errorAnswers = [];
// counter.style.display = 'none';

buttonStart.addEventListener('click', () => {
    Timer();
    counter.style.display = 'fixed';
    h1.remove();
    buttonStart.remove();

    let score = 0;

    answers.forEach((item) => {
        const answerNumber = document.createElement('p');
        answerNumber.className = 'main__answerNumber';
        answerNumber.textContent = `Pytanie ${item.id + 1}`;

        const answer = document.createElement('p');
        answer.textContent = item.title;

        const correctAnswer = document.createElement('p');

        const button1 = document.createElement('button');
        button1.textContent = `A: ${item.a}`;
        button1.id = item.buttonIdA;
        button1.className = 'button';

        const button2 = document.createElement('button');
        button2.textContent = `B: ${item.b}`;
        button2.id = item.buttonIdB;
        button2.className = 'button';

        const button3 = document.createElement('button');
        button3.textContent = `C: ${item.c}`;
        button3.id = item.buttonIdC;
        button3.className = 'button';

        const button4 = document.createElement('button');
        button4.textContent = `D: ${item.d}`;
        button4.id = item.buttonIdD;
        button4.className = 'button';

        button1.addEventListener('click', () => {
            if (button1.id === item.correctAnswer) {
                console.log('Poprawna odpowiedź');
                button1.style.backgroundColor = 'green';

                score = score + 1;
                goodAnswers.push(answer.textContent);

                console.log(score);

                return score;
            } else {
                console.log('Zła odpowiedź!');
                button1.style.backgroundColor = 'red';
                correctAnswer.textContent = `Poprawna odpowiedź to: ${item.correctAnswer
                    .at(-1)
                    .toUpperCase()}`;
                    errorAnswers.push(answer.textContent);
            }

            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            button4.disabled = true;
        });

        button2.addEventListener('click', () => {
            if (button2.id === item.correctAnswer) {
                console.log('Poprawna odpowiedź');
                button2.style.backgroundColor = 'green';

                score = score + 1;
                goodAnswers.push(answer.textContent);

                console.log(score);

                return score;
            } else {
                console.log('Zła odpowiedź!');
                button2.style.backgroundColor = 'red';
                correctAnswer.textContent = `Poprawna odpowiedź to: ${item.correctAnswer
                    .at(-1)
                    .toUpperCase()}`;
                    errorAnswers.push(answer.textContent);

            }

            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            button4.disabled = true;
        });

        button3.addEventListener('click', () => {
            if (button3.id === item.correctAnswer) {
                console.log('Poprawna odpowiedź');
                button3.style.backgroundColor = 'green';

                score = score + 1;
                goodAnswers.push(answer.textContent);

                console.log(score);
            } else {
                console.log('Zła odpowiedź!');
                button3.style.backgroundColor = 'red';
                correctAnswer.textContent = `Poprawna odpowiedź to: ${item.correctAnswer
                    .at(-1)
                    .toUpperCase()}`;
                    errorAnswers.push(answer.textContent);

            }

            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            button4.disabled = true;
        });

        button4.addEventListener('click', () => {
            if (button4.id === item.correctAnswer) {
                console.log('Poprawna odpowiedź');
                button4.style.backgroundColor = 'green';

                score = score + 1;
                goodAnswers.push(answer.textContent);

                console.log(score);
            } else {
                console.log('Zła odpowiedź!');
                button4.style.backgroundColor = 'red';
                correctAnswer.textContent = `Poprawna odpowiedź to: ${item.correctAnswer
                    .at(-1)
                    .toUpperCase()}`;
                    errorAnswers.push(answer.textContent);

            }

            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            button4.disabled = true;
        });

        main.append(
            answerNumber,
            answer,
            correctAnswer,
            button1,
            button2,
            button3,
            button4
        );
    });

    const end = document.createElement('button');

    const timer = document.querySelector('#timer');
    end.textContent = 'Koniec';
    end.className = 'main__buttonEnd';
    end.addEventListener('click', () => {

        timer.style.display = 'none';
        console.log('good answer', goodAnswers);
        console.log('error answer', errorAnswers);

        main.textContent = '';

        const scoreText = document.createElement('h2');
        scoreText.textContent = `Liczba punktów: ${score} / 40`;
        scoreText.className = 'main__scoreText';

        const percent = document.createElement('p');
        percent.textContent = `${(score / 40 * 100)}%`;

        const goodList = document.createElement('ul');
        goodList.textContent = 'Poprawne odpowiedzi: '
        goodList.className = 'main__goodList'
        goodAnswers.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            goodList.append(li);
        })

        const errorList = document.createElement('ul');
        errorList.textContent = 'Niepoprawne odpowiedzi: ';
        errorList.className = 'main__errorList'
        errorAnswers.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            errorList.append(li);
        })

        main.append(scoreText, percent, goodList, errorList)
    });



    main.append(end);
});
