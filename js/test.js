function calculateScore() {
    // Define las respuestas correctas para cada pregunta (elige las que aplican a ustedes)
    const correctAnswers = {
        q1: 'c', 
        q2: 'd', 
        q3: 'b', 
        q4: 'c', 
        q5: 'b' 
    };

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    const form = document.getElementById('testForm');
    const resultDiv = document.getElementById('result');
    const submitBtn = document.getElementById('submitButton');
    const resetBtn = document.getElementById('resetButton');

    // Oculta el resultado anterior
    resultDiv.innerHTML = '';
    
    // Recorre todas las preguntas del test
    for (let i = 1; i <= totalQuestions; i++) {
        const questionName = 'q' + i;
        // Obtiene el valor de la opción seleccionada por el usuario
        const userAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
        
        // Verifica si el usuario seleccionó una opción
        if (userAnswer) {
            // Compara la respuesta seleccionada con la respuesta correcta
            if (userAnswer.value === correctAnswers[questionName]) {
                score++;
            }
        }
    }

    // Limpia las opciones seleccionadas en el formulario
    form.reset();

    // Muestra el resultado final basado en el puntaje (número de coincidencias)
    let message = '';

    // Definir los mensajes de acuerdo con las coincidencias
    if (score >= 4) {
        message = "¡Somos almas gemelas! 💏"; // 4-5 coincidencias
    } else if (score >= 2) {
        message = "Nos complementamos perfecto, como el mate y los bizcochitos 🧉"; // 2-3 coincidencias
    } else {
        message = "Parece que aún tenemos muchas cosas que descubrir 🫢"; // 0-1 coincidencia
    }

    resultDiv.innerHTML = `
        <h2 class="text-center mt-4" style="color: #EC7FA9;">Coincidencias: ${score} de ${totalQuestions}</h2>
        <p class="text-center">${message}</p>
    `;

    // Oculta el botón de "Ver Resultados"
    submitBtn.style.display = 'none';

    // Muestra el botón de "Volver a intentar"
    resetBtn.style.display = 'block';

    // Desplaza la vista para mostrar los resultados y el botón
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Función para reiniciar el test
function resetTest() {
    const form = document.getElementById('testForm');
    const resultDiv = document.getElementById('result');
    const submitBtn = document.getElementById('submitButton');
    const resetBtn = document.getElementById('resetButton');

    // Limpia las opciones seleccionadas en el formulario
    form.reset();
    
    // Oculta el resultado anterior
    resultDiv.innerHTML = '';

    // Muestra el botón de "Ver Resultados" y oculta el de "Volver a intentar"
    submitBtn.style.display = 'block';
    resetBtn.style.display = 'none';
}
