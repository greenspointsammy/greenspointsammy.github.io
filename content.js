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
var content = {
  'en': {
    'gulf-margin-title': 'Gulf Margin',
    'linkedin-link': 'Linkedin',
    'welcome-message': 'Your Command, Our Cargo',
    'skills-message': 'Welding, Programming, & Music',
    'instagram-link': 'Insg',
    'youtube-link': 'Youtube',
    'music-link': 'Music',
    'ebay-link': 'Ebay',
    'trading-link': 'Trading',
    'steam-link': 'Steam',
    'location-info': 'Houston, Texas\nGulf Coast',
    'bible-verse': 'Matthew 24:1–51 (ESV): ... Your Bible verse content ...',
    'hashtag-info': '#FreePalestine #FreeYemen #FreeIran',
    'work-in-progress': 'in progress...'
  },
  'fr': {
    'gulf-margin-title': 'Gulf Margin',
    'linkedin-link': 'Linkedin',
    'welcome-message': 'Votre Commande, Notre Chargement',
    'skills-message': 'Soudage, Programmation et Musique',
    'instagram-link': 'Insg',
    'youtube-link': 'Youtube',
    'music-link': 'Musique',
    'ebay-link': 'Ebay',
    'trading-link': 'Trading',
    'steam-link': 'Steam',
    'location-info': 'Houston, Texas\nCôte du Golfe',
    'bible-verse': 'Matthieu 24:1–51 (LSV) : ... Votre contenu de verset biblique ...',
    'hashtag-info': '#FreePalestine #FreeYemen #FreeIran',
    'work-in-progress': 'en cours...'
  },
  'es': {
    'gulf-margin-title': 'Gulf Margin',
    'linkedin-link': 'Linkedin',
    'welcome-message': 'Tu Orden, Nuestra Carga',
    'skills-message': 'Soldadura, Programación y Música',
    'instagram-link': 'Insg',
    'youtube-link': 'Youtube',
    'music-link': 'Música',
    'ebay-link': 'Ebay',
    'trading-link': 'Trading',
    'steam-link': 'Steam',
    'location-info': 'Houston, Texas\nCosta del Golfo',
    'bible-verse': 'Mateo 24:1–51 (RVR): ... Tu contenido de versículo bíblico ...',
    'hashtag-info': '#FreePalestine #FreeYemen #FreeIran',
    'work-in-progress': 'en progreso...'
  },
  'pt': {
    'gulf-margin-title': 'Gulf Margin',
    'linkedin-link': 'Linkedin',
    'welcome-message': 'Seu Comando, Nossa Carga',
    'skills-message': 'Soldagem, Programação e Música',
    'instagram-link': 'Insg',
    'youtube-link': 'Youtube',
    'music-link': 'Música',
    'ebay-link': 'Ebay',
    'trading-link': 'Trading',
    'steam-link': 'Steam',
    'location-info': 'Houston, Texas\nCosta do Golfo',
    'bible-verse': 'Mateus 24:1–51 (ARC): ... Seu conteúdo de versículo bíblico ...',
    'hashtag-info': '#FreePalestine #FreeYemen #FreeIran',
    'work-in-progress': 'em andamento...'
  }
};

