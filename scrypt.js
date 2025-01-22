// Esempio di script che mostra un alert quando si invia il form
// (Da migliorare o estendere secondo le proprie necessità)

document.addEventListener('DOMContentLoaded', () => {
    // Seleziona il form per l'invio della demo nella index.html
    const demoForm = document.querySelector('#demo-upload form');
    if (demoForm) {
      demoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Grazie per aver inviato la tua demo! Ti contatteremo presto.');
        // Qui potresti gestire l'invio verso un server con fetch/AJAX, etc.
        demoForm.reset();
      });
    }
  
    // Seleziona il form di prenotazione nella servizi.html
    const bookingForm = document.querySelector('#prenotazione form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Richiesta di prenotazione inviata! Ti contatteremo a breve per la conferma.');
        // Qui potresti gestire l'invio verso un server con fetch/AJAX, etc.
        bookingForm.reset();
      });
    }
  });