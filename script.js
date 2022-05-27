const settingBtn = document.querySelector('#settingsBtn');
const settingMenu = document.querySelector('#settingMenu')
const resolutionBtn = document.querySelector('#resolutionGrid');
const visibleGridBtn = document.querySelector('#visibleGrid');
const nightModeBtn = document.querySelector('#nightMode');
const backgroundBtn = document.querySelector('#background');
const settingOpt = [resolutionBtn, visibleGridBtn, nightModeBtn, backgroundBtn];
const upBtn = document.querySelector('#upBtn');
const darkMode = document.querySelector('#nightModeCheckBox');
const sketch = document.querySelector('#sketch');
const gitHub = document.querySelector('#gitHub');
const rangeInput = document.querySelector('#resolutionGridInput');
const resolutionGrid = document.querySelector('#resolutionGridText');
const visibleGridCheck = document.querySelector('#visibleGridCheckBox')
const backgroundColor = document.querySelector('#sketchPaintContainer');
const backgroundColorInput = document.querySelector('#backgroundColor');
const sketchContainer = document.querySelector('#sketchPixelContainer');
const pencilColor = document.querySelector('#pencilColor');
const clear = document.querySelector('#clear');
const ereaser = document.querySelector('#ereaser');

for (let i = 0; i < 256; i++) {
const pixel = document.createElement('div');
pixel.classList.add('pixel');
sketchContainer.appendChild(pixel);
}

let pixels = document.querySelectorAll('.pixel')
let isDrawing = false;

function draw() {
    sketchContainer.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = `${pencilColor.value}`;
        isDrawing = true
    });
    sketchContainer.addEventListener('mouseup', () => {isDrawing == true ? isDrawing = false : '';});
    sketchContainer.addEventListener('mouseover', (e) => {isDrawing == true ? e.target.style.backgroundColor = `${pencilColor.value}` : ''});
}

function erease() {
    sketchContainer.addEventListener('mousedown', (e) => {
        e.target.style.backgroundColor = `transparent`;
        isDrawing = true
    });
    sketchContainer.addEventListener('mouseup', () => {isDrawing == true ? isDrawing = false : '';});
    sketchContainer.addEventListener('mouseover', (e) => {isDrawing == true ? e.target.style.backgroundColor = `transparent` : ''}); 
}

function handleInputChange() {
    resolutionGrid.textContent = `Resolution grid: ${rangeInput.value}x${rangeInput.value}`;
    const min = this.min;
    const max = this.max;
    const val = this.value;
    this.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}

function resolutionGridChange() {
    const val = this.value;
    const valC = val * val;
    const pixelCreate = document.querySelectorAll('.pixel');
    const sketchPixelCountNumber = pixelCreate.length;
    sketchContainer.style = `grid-template-columns: repeat(${val}, 1fr);`;
    if (sketchPixelCountNumber > valC || sketchPixelCountNumber < valC) {pixelCreate.forEach(pixel => sketchContainer.removeChild(pixel));};
    for (let i = 0; i < valC; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        sketchContainer.appendChild(pixel);
    }
    setTimeout(() => {
        pixels = document.querySelectorAll('.pixel');
    }, 1);
}

function nightMode() {
    document.body.classList.toggle('darkMode');
    document.body.classList.add('darkModeTransition');
    settingMenu.classList.add('darkModeTransition');
    settingOpt.forEach(button => button.classList.add('darkModeTransition'));
    sketch.classList.add('darkModeTransition');
    gitHub.classList.add('darkModeTransition');
    setTimeout(() => {
        document.body.classList.remove('darkModeTransition');
        settingMenu.classList.remove('darkModeTransition');
        settingOpt.forEach(button => button.classList.remove('darkModeTransition'));
        sketch.classList.remove('darkModeTransition');
        gitHub.classList.remove('darkModeTransition');
    }, 500);
}

function expandSetting(e) {
    e.stopPropagation();
    settingMenu.classList.add('settingMenuTransition');
    settingMenu.classList.add('settingMenuOpen');
    settingMenu.style = "user-select: none;";
    setTimeout(() => settingMenu.classList.remove('settingMenuTransition'), 1500);
    setTimeout(() => settingMenu.style = "", 1200);
    setTimeout(() => settingOpt.forEach(button => button.classList.add('settingMenuOpenOption')), 1000);
    setTimeout(() => upBtn.classList.add('settingMenuOpenOption'), 1500);
}

function contractSetting(e) {
    e.stopPropagation();
    settingMenu.classList.add('settingMenuTransition');
    settingOpt.forEach(button => button.classList.add('settingMenuCloseOption'));
    settingOpt.forEach(button => button.classList.remove('settingMenuOpenOption'));
    upBtn.classList.add('settingMenuCloseOption');
    upBtn.classList.remove('settingMenuOpenOption');
    settingMenu.style = "user-select: none;";
    setTimeout(() => settingMenu.classList.remove('settingMenuTransition'), 1500);
    setTimeout(() => settingOpt.forEach(button => button.classList.remove('settingMenuCloseOption')), 735);
    setTimeout(() => settingMenu.classList.remove('settingMenuOpen'), 300);
    setTimeout(() => upBtn.classList.remove('settingMenuCloseOption'), 735);
}

function changeBackground() {
    backgroundColor.style.backgroundColor = `${backgroundColorInput.value}`
}

function enableGrid() {
    sketchContainer.classList.toggle('grid');
    backgroundColor.classList.toggle('grid');
}


darkMode.addEventListener('input', nightMode);
settingBtn.addEventListener('click', expandSetting);
upBtn.addEventListener('click', contractSetting);
rangeInput.addEventListener('input', handleInputChange);
rangeInput.addEventListener('change', resolutionGridChange);
backgroundColorInput.addEventListener('input', changeBackground);
visibleGridCheck.addEventListener('input', enableGrid);
clear.addEventListener('click', () => pixels.forEach(pixel => pixel.style.backgroundColor = 'transparent'));
pencilColor.addEventListener('click', draw);
ereaser.addEventListener('click', erease);
