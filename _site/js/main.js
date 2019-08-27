// function changeSettings() {
  
// }

let imageCanvas = document.getElementById('imageDisplay');
let fileInput = document.getElementById('uploadFile');
let image;

let upload = () => { 
  image = new SimpleImage(fileInput);
  let filename = fileInput.value;
  alert(`You chose ${filename}.`)
  image.drawTo(imageCanvas);
}

let turnGray = () => {
  image = new SimpleImage(fileInput);
  for (let pixel of image.values() ) {
    let red = pixel.getRed();
    let green = pixel.getGreen();
    let blue = pixel.getBlue();
    let average = (red + green + blue)/3;
    pixel.setRed(average))
    pixel.setGreen(average);
    pixel.setBlue(average);
    
  }
  image.drawTo(imageCanvas);
}
