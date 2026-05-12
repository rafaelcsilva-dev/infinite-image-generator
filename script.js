const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");
const btnGenerate = document.getElementById("btnGenerate");
const btnDownload = document.getElementById("btnDownload");
const displayCount = document.getElementById("attemptCount");
let counter = 0;

function generateChaos() {
  // Cria um buffer de imagem para manipular pixels individualmente
  const imageData = ctx.createImageData(100, 100);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    // R, G, B aleatórios entre 0 e 255
    data[i] = Math.floor(Math.random() * 256); // Red
    data[i + 1] = Math.floor(Math.random() * 256); // Green
    data[i + 2] = Math.floor(Math.random() * 256); // Blue
    data[i + 3] = 255; // Alpha (Opacidade)
  }

  // Desenha os dados no canvas
  ctx.putImageData(imageData, 0, 0);

  // Atualiza contador
  counter++;
  displayCount.innerText = counter.toLocaleString();
}

function downloadCanvas() {
  // 1. Converte o conteúdo do canvas para uma imagem PNG
  const imageURL = canvas.toDataURL("image/png");

  // 2. Cria um link temporário na memória
  const link = document.createElement("a");

  // 3. Define o nome do arquivo que será baixado
  link.download = `random-image-${counter}.png`;

  // 4. Atribui a imagem ao link
  link.href = imageURL;

  // 5. Simula o clique para iniciar o download e remove o link
  link.click();
}

// Event Listeners
btnGenerate.addEventListener("click", generateChaos);

btnDownload.addEventListener("click", downloadCanvas);

// Gerar a primeira imagem ao carregar
window.onload = generateChaos;
