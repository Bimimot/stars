import "./css/style.css";
import Stars from './js/Stars.js';
    
const data = {
    container: document.querySelector('.galaxy'), // container for stars
    cloudSize: 200, // the number of stars in one cloud 
    clouds: 2, // the number of clouds
    galaxyFlag: false,
    colorFlag: false
}

const galaxy = new Stars(data);

const starsSwitcher = document.querySelector('#stars');

starsSwitcher.addEventListener(('click'), (event) => {
    starsSwitcher.classList.toggle('switch_on');
    galaxy.toggleGalaxy();
});

const colorSwitcher = document.querySelector('#color');
colorSwitcher.addEventListener(('click'), (event) => {
    colorSwitcher.classList.toggle('switch_on-rainbow');
    galaxy.toggleColors();
});