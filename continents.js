function createContinentCard(continent) {
  const continentDiv = document.createElement('div');
  continentDiv.classList.add('cont');
  continentDiv.addEventListener('click', function() {
    const nome = document.createElement('p');
    continentDiv.classList.add('continentes');
    nome.textContent = continent.name;

    continentDiv.appendChild(nome);
  
    return continentDiv;
  });
  const id = document.createElement('p');
  continentDiv.classList.add('continentes');
  id.textContent = continent.id;

  continentDiv.appendChild(id);

  return continentDiv;
}
fetch('https://thronesapi.com/api/v2/Continents')
      .then(response => response.json())
      .then(continents => {
        const continentsContainer = document.getElementById('continents');
        continents.forEach(continent => {
          const continentCard = createContinentCard(continent);
          continentsContainer.appendChild(continentCard);
        });
      })
      .catch(error => console.error('Error fetching continents:', error));