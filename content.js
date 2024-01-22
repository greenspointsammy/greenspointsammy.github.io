var content = {
  'en': { 'welcomeMessage': 'Welcome!' },
  'fr': { 'welcomeMessage': 'Bienvenue !' },
  'es': { 'welcomeMessage': '¡Bienvenido!' },
  'pt': { 'welcomeMessage': 'Bem-vindo!' } // Portuguese
};

var language = 'en'; // Default to English

function changeLanguage(newLanguage) {
  language = newLanguage;
  updateContent();
}

function updateContent() {
  // Use AJAX or other methods to load and update content based on the selected language
  // For simplicity, here's a basic example:
  document.getElementById('welcome-message').innerHTML = content[language].welcomeMessage;
}
