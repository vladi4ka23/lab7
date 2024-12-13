
    document.addEventListener("DOMContentLoaded", function () {
       
        const container = document.createElement('div');
        container.className = 'container';

        const heading = document.createElement('h2');
        heading.textContent = 'Правдива куля, прям ващє';
        container.appendChild(heading);

        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = 'Введіть ваше запитання...';
        container.appendChild(inputField);

        const button = document.createElement('button');
        button.textContent = 'Отримати відповідь';
        container.appendChild(button);

        const magicBall = document.createElement('div');
        magicBall.className = 'magic-ball';

        const answerBlock = document.createElement('div');
        answerBlock.className = 'answer';
        magicBall.appendChild(answerBlock);

        container.appendChild(magicBall);

        const answers = [
            'Так',
            'Ні',
            'Можливо',
            'Пізніше',
            'Точно ні',
            'Точно так'
        ];

        button.addEventListener('click', function () {
            const question = inputField.value.trim();
            if (question) {
                const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
                answerBlock.textContent = randomAnswer;
            } else {
                answerBlock.textContent = 'Введіть запитання!';
            }
        });

        document.body.appendChild(container);
    });