let canvas = document.getElementById("noisy");
let context = canvas.getContext("2d");

function generateNoise() {
  let imageData = context.createImageData(canvas.width, canvas.height);
  for (let i = 0; i < imageData.data.length; i += 4) {
    let randomValue = 255 * Math.random();
    imageData.data[i] = randomValue;
    imageData.data[i + 1] = randomValue;
    imageData.data[i + 2] = randomValue;
    imageData.data[i + 3] = 255;
  }
  context.putImageData(imageData, 0, 0);
  requestAnimationFrame(generateNoise);
}

function updateCanvasSize() {
  canvas.height = canvas.offsetHeight;
  canvas.width = canvas.offsetWidth;
}

window.addEventListener("resize", updateCanvasSize);
updateCanvasSize();
generateNoise();