
const canvas = document.getElementById('fractalCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth * 0.8;
canvas.height = 500;

let layer = 0;
const layers = [81, 729, 6561];
const colors = ['#00f9ff', '#00ff80', '#ff00c8'];

function drawGrid(size, color) {
  const cellSize = canvas.width / Math.sqrt(size);
  const cols = Math.floor(canvas.width / cellSize);
  const rows = Math.floor(canvas.height / cellSize);

  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      ctx.strokeRect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
}

function renderLayer() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid(layers[layer], colors[layer]);
  document.getElementById('layerLabel').innerText = `Camada: ${layers[layer]}`;
}

canvas.addEventListener('click', () => {
  layer = (layer + 1) % layers.length;
  renderLayer();
});

renderLayer();
