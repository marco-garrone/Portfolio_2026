// Diciamo al codice di cercare il file nella cartella 'data'
fetch('data/dati.json')
  .then(risposta => risposta.json())
  .then(progetti => {
    
    const griglia = document.getElementById('griglia-progetti');

    progetti.forEach(progetto => {
      const card = document.createElement('div');
      card.className = 'card'; 
      
      card.innerHTML = `
        <h3>${progetto.titolo}</h3>
        <p>${progetto.descrizione}</p>
        <span class="badge">${progetto.strumenti}</span>
      `;
      
      griglia.appendChild(card);
    });
  });