const bgAnimation = document.getElementById('bgAnimation');
const numberOfColourBoxes = 400;
const backgroundAnim = document.getElementsByClassName('backgroundAnim');

for (let i = 0; i < numberOfColourBoxes; i++){
    const colourbox = document.createElement('div');
    colourbox.classList.add('colourbox');
    backgroundAnim[0].appendChild(colourbox);
}