// Función para generar el calendario
function generateCalendar() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const calendarTitle = document.getElementById("calendar-title");
  calendarTitle.innerText = `${now.toLocaleString('es', { month: 'long' })} ${currentYear}`;

  let calendarTable = document.getElementById("calendar-table");
  calendarTable.innerHTML = ""; // Limpiar cualquier contenido previo

  // Crear la primera fila con los días de la semana
  let headerRow = document.createElement("tr");
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  daysOfWeek.forEach(day => {
    let th = document.createElement("th");
    th.innerText = day;
    headerRow.appendChild(th);
  });
  calendarTable.appendChild(headerRow);

  // Crear las filas del calendario
  let row = document.createElement("tr");
  let dayNumber = 1;

  // Rellenar los días antes del primer día del mes
  for (let i = 0; i < firstDay; i++) {
    let td = document.createElement("td");
    row.appendChild(td);
  }

  // Crear los días del mes
  for (let i = firstDay; i < 7; i++) {
    let td = document.createElement("td");
    td.innerText = dayNumber;
    if (dayNumber === now.getDate()) {
      td.classList.add("today");
    }
    row.appendChild(td);
    dayNumber++;
  }

  // Añadir la primera fila del mes
  calendarTable.appendChild(row);

  // Rellenar las siguientes semanas del mes
  while (dayNumber <= daysInMonth) {
    row = document.createElement("tr");
    for (let i = 0; i < 7 && dayNumber <= daysInMonth; i++) {
      let td = document.createElement("td");
      td.innerText = dayNumber;
      if (dayNumber === now.getDate()) {
        td.classList.add("today");
      }
      row.appendChild(td);
      dayNumber++;
    }
    calendarTable.appendChild(row);
  }
}

// Función para obtener el próximo 19 del mes
function getNextAnniversary() {
  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  // Si hoy ya pasó el 19 de este mes, ir al siguiente mes
  if (today.getDate() > 19) {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
  }

  return new Date(currentYear, currentMonth, 19);
}

// Función para actualizar la cuenta regresiva
function updateCountdown() {
  const nextAnniversary = getNextAnniversary();
  const now = new Date();
  const timeRemaining = nextAnniversary - now;

  if (timeRemaining <= 0) {
    document.getElementById("countdown").innerHTML = "¡Es el día! ¡Feliz Aniversario!";
    return;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para el 19.`;
}

// Llamar a la función de calendario cuando cargue la página
window.onload = function() {
  generateCalendar();
  updateCountdown();
  setInterval(updateCountdown, 1000); // Actualiza la cuenta regresiva cada segundo
};