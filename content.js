var content = {
  'en': { 'welcomeMessage': 'Your Command, Our Cargo!' },
  'fr': { 'welcomeMessage': 'Votre Commande, Notre Chargement!' },
  'es': { 'welcomeMessage': 'Tu Orden, Nuestra Carga!' },
  'pt': { 'welcomeMessage': 'Seu Comando, Nossa Carga!' }
};

var language = 'en'; // Default to English

function changeLanguage(newLanguage) {
  language = newLanguage;
  updateContent();
  fadeInElement('welcome-message');
}

function updateContent() {
  document.getElementById('welcome-message').innerHTML = content[language].welcomeMessage;
}

// Function to add a simple date and time widget
function updateDateTimeWidget() {
  var dateTimeWidget = document.getElementById('date-time-widget');
  var currentDate = new Date();
  dateTimeWidget.innerHTML = 'Current Date and Time: ' + currentDate.toLocaleString();
}

// Function to apply a fade-in animation to an element
function fadeInElement(elementId) {
  var element = document.getElementById(elementId);
  element.style.opacity = 0;
  setTimeout(function () {
    element.style.opacity = 1;
  }, 10); // Adding a slight delay for the animation effect
}

// Initial setup
updateContent();
updateDateTimeWidget();

// Periodically update the date and time widget
setInterval(updateDateTimeWidget, 1000); // Update every 1000 milliseconds (1 second)
