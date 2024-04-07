import { allAnswer } from './all-answer.js';
import Timer from './timer.js';

export default function AllAnswers() {
    const answer = document.querySelector('#answers');
    const h1 = document.querySelector('h1');
    const main = document.querySelector('.main');

    const counter = document.querySelector('#timer');

    const goodAnswers = [];
    const errorAnswers = [];

    answer.addEventListener('click', () => {
        Timer();
        counter.style.display = 'fixed';
        h1.remove();
        answer.remove();

        let score = 0;

        allAnswer.forEach((item) => {
            const answerNumber = document.createElement('p');
            answerNumber.className = 'main__answerNumber';
            answerNumber.textContent = `Pytanie ${item.id + 1}`;

            const answer = document.createElement('p');
            answer.textContent = item.title;

            const category = document.createElement('i');
            category.textContent = `Kategoria: ${item.category}`;
            category.className = 'main__category';

            const correctAnswer = document.createElement('p');

            const button1 = document.createElement('button');
            if (item.a === '') {
                button1.className = 'hidden';
            } else {
                button1.innerHTML = `A: ${item.a}`;
                button1.id = item.buttonIdA;
                button1.className = 'button';
            }

            const button2 = document.createElement('button');
            if (item.b === '') {
                button2.className = 'hidden';
            } else {
                button2.innerHTML = `B: ${item.b}`;
                button2.id = item.buttonIdB;
                button2.className = 'button';
            }

            const button3 = document.createElement('button');
            if (item.c === '') {
                button3.className = 'hidden';
            } else {
                button3.innerHTML = `C: ${item.c}`;
                button3.id = item.buttonIdC;
                button3.className = 'button';
            }

            const button4 = document.createElement('button');
            if (item.d === '') {
                button4.className = 'hidden';
            } else {
                button4.innerHTML = `D: ${item.d}`;
                button4.id = item.buttonIdD;
                button4.className = 'button';
            }

            button1.addEventListener('click', () => {
                if (button1.id === item.correctAnswer) {
                    button1.style.backgroundColor = 'green';

                    score = score + 1;
                    goodAnswers.push(answer.textContent);

                    return score;
                } else {
                    button1.style.backgroundColor = 'red';
                    correctAnswer.textContent = `Poprawna odpowiedź to: ${item.correctAnswer[6]}`;
                    errorAnswers.push(answer.textContent);
                    console.log(item.correctAnswer[5]);

                    console.error('tu!1');
                }

                button1.disabled = true;
                button2.disabled = true;
                button3.disabled = true;
                button4.disabled = true;
            });

            button2.addEventListener('click', () => {
                if (button2.id === item.correctAnswer) {
                    button2.style.backgroundColor = 'green';

                    score = score + 1;
                    goodAnswers.push(answer.textContent);

                    return score;
                } else {
                    button2.style.backgroundColor = 'red';
                    correctAnswer.textContent = `Poprawna odpowiedź to: ${item.correctAnswer
                        .at(-9)
                        .toUpperCase()}`;
                    errorAnswers.push(answer.textContent);

                    console.error('tu!2');
                }

                button1.disabled = true;
                button2.disabled = true;
                button3.disabled = true;
                button4.disabled = true;
            });

            button3.addEventListener('click', () => {
                if (button3.id === item.correctAnswer) {
                    button3.style.backgroundColor = 'green';

                    score = score + 1;
                    goodAnswers.push(answer.textContent);
                } else {
                    button3.style.backgroundColor = 'red';
                    correctAnswer.textContent = `Poprawna odpowiedź to: ${item.correctAnswer
                        .at(-9)
                        .toUpperCase()}`;
                    errorAnswers.push(answer.textContent);

                    console.error('tu!3');
                }

                button1.disabled = true;
                button2.disabled = true;
                button3.disabled = true;
                button4.disabled = true;
            });

            button4.addEventListener('click', () => {
                if (button4.id === item.correctAnswer) {
                    button4.style.backgroundColor = 'green';

                    score = score + 1;
                    goodAnswers.push(answer.textContent);
                } else {
                    button4.style.backgroundColor = 'red';
                    correctAnswer.textContent = `Poprawna odpowiedź to: ${item.correctAnswer
                        .at(-9)
                        .toUpperCase()}`;
                    errorAnswers.push(answer.textContent);

                    console.error('tu!4');
                }

                button1.disabled = true;
                button2.disabled = true;
                button3.disabled = true;
                button4.disabled = true;
            });

            main.append(
                answerNumber,
                category,
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

            main.textContent = '';

            const scoreText = document.createElement('h2');
            scoreText.textContent = `Liczba punktów: ${score} / 272`;
            scoreText.className = 'main__scoreText';

            const percent = document.createElement('p');
            percent.textContent = `${((score / 272) * 100).toFixed(2)}%`;

            const goodList = document.createElement('ul');
            goodList.textContent = 'Poprawne odpowiedzi: ';
            goodList.className = 'main__goodList';
            goodAnswers.forEach((item) => {
                const li = document.createElement('li');
                li.textContent = item;
                goodList.append(li);
            });

            const errorList = document.createElement('ul');
            errorList.textContent = 'Niepoprawne odpowiedzi: ';
            errorList.className = 'main__errorList';
            errorAnswers.forEach((item) => {
                const li = document.createElement('li');
                li.textContent = item;
                errorList.append(li);
            });

            main.append(scoreText, percent, goodList, errorList);
        });

        main.append(end);
    });
}
