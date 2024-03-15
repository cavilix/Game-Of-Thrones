document.addEventListener("DOMContentLoaded", function() {
  function createCharacterCard(character) {
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('card');
    characterDiv.addEventListener('click', function() {
      const characters = document.createElement('div');
      
      const nome = document.createElement('p')
      nome.classList.add('informacoes');
      nome.textContent = character.firstName;

      const sobrenome = document.createElement('p')
      sobrenome.classList.add('informacoes');
      sobrenome.textContent = character.lastName;

      const titulo = document.createElement('p')
      titulo.classList.add('informacoes');
      titulo.textContent = character.title;

      const familia = document.createElement('p')
      familia.classList.add('informacoes');
      familia.textContent = character.family;
      
      characterDiv.appendChild(nome);
      characterDiv.appendChild(sobrenome);
      characterDiv.appendChild(titulo);
      characterDiv.appendChild(familia);
     
    return characters;
      //  alert(`Nome: ${character.firstName}\nSobrenome: ${character.lastName}\nNome Completo: ${character.fullName}\nTitulo: ${character.title}\nCasa: ${character.family} `);
    });

    const img = document.createElement('img');
    img.src = character.imageUrl;
    img.alt = character.fullName;

    const name = document.createElement('p');
    name.classList.add('perso-name')
    name.textContent = character.fullName;

    characterDiv.appendChild(img);
    characterDiv.appendChild(name);

    return characterDiv;
  }

  // Fetch para obter os personagens
  fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(characters => {
      const charactersContainer = document.getElementById('characters');
      characters.forEach(character => {
        const characterCard = createCharacterCard(character);
        charactersContainer.appendChild(characterCard);
      });
    })
    .catch(error => console.error('Error fetching characters:', error));

});