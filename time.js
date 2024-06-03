fetch('path/to/your/json/file.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('time').textContent = data.time;
  })
  .catch(error => console.error('Error:', error));
