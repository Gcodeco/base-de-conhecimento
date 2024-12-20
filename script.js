const LIGHTS = 50;
const genConfig = (index) => ({
  rotate: (1440 / LIGHTS) * (LIGHTS - index),
  radius: (12.5 / LIGHTS) * (LIGHTS - index),
  y: (100 / LIGHTS) * index,
  speed: Math.random() * 10,
  delay: Math.random() * -10,
  appear: index,
});

const treeElement = document.querySelector('.tree');
let l = 0;

while (l < LIGHTS) {
  const { radius, rotate, y, speed, delay, appear } = genConfig(l);
  const light = document.createElement('div');
  light.className = 'tree__light';
  light.style = `
    --appear: ${appear};
    --y: ${y};
    --rotate: ${rotate};
    --radius: ${radius};
    --speed: ${speed};
    --delay: ${delay};
  `;
  treeElement.appendChild(light);
  l++;
}

const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
star.className = 'tree__star';
star.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
star.setAttribute('viewBox', '0 0 113.32 108.44');
star.style = `
  --delay: ${LIGHTS};
  position: absolute; /* Adicionando posição absoluta */
  height: 5vmin; /* Ajustando a altura para 5vmin */
  width: 5vmin; /* Ajustando a largura para 5vmin */
  bottom: 100%; /* Posicionando acima da árvore */
  left: 50%; /* Centralizando horizontalmente */
  transform: translate(-50%, 0); /* Centralizando */
`;
star.innerHTML = `
  <path d="M90.19 104.33L57.12 87.38 24.4 105l5.91-36.69L3.44 42.65l36.72-5.72 16.1-33.5L73.06 36.6l36.83 4.97-26.35 26.21z"
    fill="hsl(45, 80%, 80%)" /* Mudando fill para uma cor visível */
    stroke-width="6.88"
    stroke-linecap="round"
    stroke-linejoin="round">
  </path>`;
treeElement.appendChild(star);


