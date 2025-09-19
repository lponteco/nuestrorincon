// trivia.js

function calculateScore() {
    // Definimos las respuestas correctas de la trivia
    const correctAnswers = {
        q1: 'quilmes',
        q2: 'pizza',
        q3: 'coca',
        q4: 'ranelagh',
        q5: '19',
        q6: 'amor',
        q7: 'libro',
        q8: 'negro',
        q9: 'mar del plata',
        q10: 'rock'
    };

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    const form = document.getElementById('triviaForm');
    const resultDiv = document.getElementById('result');
    
    // Obtenemos los botones
    const submitBtn = document.getElementById('submitButton');
    const resetBtn = document.getElementById('resetButton');

    // Oculta el resultado anterior
    resultDiv.innerHTML = '';

    // Recorre cada pregunta y verifica si la respuesta es correcta
    for (let i = 1; i <= totalQuestions; i++) {
        const questionId = 'q' + i;
        const userAnswer = document.getElementById(questionId).value.trim().toLowerCase();
        const correctAnswer = correctAnswers[questionId].toLowerCase();

        // Compara la respuesta del usuario con la respuesta correcta
        if (userAnswer === correctAnswer) {
            score++;
        }
    }
    
    // Limpia los campos de texto después de calcular el puntaje
    form.reset();

    // Construye el mensaje según el puntaje obtenido
    let message = '';
    if (score === totalQuestions) {
        message = `¡Increíble, contestaste todo perfecto! 😍 ¡Realmente me conoces muy bien! ❤️`;
    } else if (score >= totalQuestions / 2) {
        message = `¡Muy bien! ¡Casi lo logras! Me parece que tenemos que crear más recuerdos juntos para que me conozcas mejor. 😉`;
    } else {
        message = `No te preocupes, sé que me quieres, pero es hora de que me conozcas más a fondo. 😜 ¡Podemos intentarlo de nuevo! 😊`;
    }

    // Muestra el resultado final
    resultDiv.innerHTML = `<h2 class="text-center mt-4" style="color: #EC7FA9;">Tu Puntaje: ${score}/${totalQuestions}</h2><p class="text-center">${message}</p>`;

    // Oculta el botón de "Ver Resultados"
    submitBtn.style.display = 'none';

    // Muestra el botón de "Volver a intentar"
    resetBtn.style.display = 'block';

    // Desplaza la vista para mostrar los resultados y el botón
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Función para reiniciar la trivia
function resetTrivia() {
    const form = document.getElementById('triviaForm');
    const resultDiv = document.getElementById('result');

    // Obtenemos los botones
    const submitBtn = document.getElementById('submitButton');
    const resetBtn = document.getElementById('resetButton');

    // Oculta el resultado
    resultDiv.innerHTML = '';

    // Muestra el botón de "Ver Resultados" de nuevo
    submitBtn.style.display = 'block';

    // Oculta el botón de "Volver a intentar"
    resetBtn.style.display = 'none';
}