const sun = document.querySelector('.sun'); // Sélectionnez la classe CSS avec un point devant "sun"
const waveContainer = document.querySelector('.system-container'); // Sélectionnez la classe CSS avec un point devant "system-container"

sun.addEventListener('click', createWave);

function createWave(event) {
  const wave = document.createElement('div'); // Créez un nouvel élément de vague à chaque clic
  wave.classList.add('wave'); // Ajoutez la classe CSS "wave" à l'élément de vague

  const sunRect = sun.getBoundingClientRect();
  const sunCenterX = sunRect.left + sunRect.width / 2;
  const sunCenterY = sunRect.top + sunRect.height / 2;

  const waveRadius = Math.max(window.innerWidth, window.innerHeight) / 2;

  wave.style.width = `${waveRadius}px`;
  wave.style.height = `${waveRadius}px`;
  wave.style.left = `${sunCenterX}px`;
  wave.style.top = `${sunCenterY}px`;


  sun.appendChild(wave);

  wave.addEventListener('animationend', () => {
    sun.removeChild(wave);
    wave.id = ""; // je dois rajouter ça pour éviter que la vague ne reste à la fin de la fonction 
  });
}
