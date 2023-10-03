// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

let colors = ["#001000", "#000000"]

function brightest(colors){
  let maxBrightness = 0;
  let brightnessColor = '';
  for (let color of colors){

    let red = parseInt(color.slice(1, 3), 16);
    let green = parseInt(color.slice(3, 5), 16);
    let blue = parseInt(color.slice(5, 7), 16);
    let brightness = Math.max(red, green, blue);
    
    if (brightness > maxBrightness){
      maxBrightness = brightness;
      brightnessColor = color;
    }
  }
  return brightnessColor;
}

console.log(brightest(colors))