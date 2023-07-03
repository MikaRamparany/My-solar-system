const sun = document.querySelector('.sun');
const waveContainer = document.querySelector('.system-container');
let earthNameVisible = false; // Je crée une variable de contrôle pour vérifier si la Terre est déjà affichée
let displayTimeout = null; // Je crée une variable pour stocker le délai d'affichage en cours

sun.addEventListener('click', createWave);

function createWave(event) {
  const wave = document.createElement('div');
  wave.classList.add('wave');

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
  });

  if (!earthNameVisible && !displayTimeout) { // Je dois vérifier si la Terre n'est pas déjà affichée et si aucun délai d'affichage n'est en cours
    const displayDelay = 1100; // On peut régler le délai avant l'affichage du nom de la Terre en millisecondes

    displayTimeout = setTimeout(() => {
      const earthSystem = document.querySelector('.earth-system');
      const earthSystemRect = earthSystem.getBoundingClientRect();
      const earthSystemCenterX = earthSystemRect.left + earthSystemRect.width / 2;
      const earthSystemTop = earthSystemRect.top;

      const earthName = document.createElement('span');
      earthName.classList.add('earth-name');
      earthName.textContent = 'Terre';
      earthName.style.left = `${earthSystemCenterX}px`;
      earthName.style.top = `${earthSystemTop - 40}px`;

      earthSystem.appendChild(earthName);
      earthNameVisible = true; // Indique que la Terre est affichée

      const displayDuration = 4000; // Durée d'affichage du nom de la Terre en millisecondes, modifiable également comme on veut
      setTimeout(() => {
        earthSystem.removeChild(earthName);
        earthNameVisible = false; // indique que la Terre n'est plus affichée
        displayTimeout = null; // réinitialiser le délai d'affichage, pcq sinon je ne pouvait plus refaire la manip. Il aurait fallu recharger la page..
      }, displayDuration);
    }, displayDelay);
  }
}
