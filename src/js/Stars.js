import {colorsArr, whiteColor, greenColor} from './data';

export default class Stars {
    constructor(data) {
        const { container, cloudSize, clouds, colorFlag, galaxyFlag } = data;

        this.container = container;
        this.cloudSize = cloudSize; // number of stars in a one cloud
        this.clouds = clouds; //number of star's clouds
        this.colorFlag = colorFlag;
        this.galaxyFlag = galaxyFlag;
        
        this.hCont = container.clientHeight;
        this.wCont = container.clientWidth;
        
        this.curStar = 0;   //number of the star in the cloud
        this.minDuration = 5; // time of moving in seconds
        this.maxSize = 10; // pixels, size of a star
        this.maxDelay = 7; // seconds, star is coming visible
        this.maxOpacity = "80%";
        this.minDrawDelay = 1000; //ms before start transform
        this.minDeleteDelay = 1000; //ms before del star-element, for opacity-transition
        this.color = whiteColor;

    }

    // coordinates for the start poistion of the star - the center of the star's cloud
    _calcStart() {
        if (this.curStar === this.cloudSize) { this.curStar = 0 }; //
        this.curStar = this.curStar + 1;
        if (this.curStar === 1) { //new start coordinates for new cloud of stars
            this.startX = (this.wCont * 0.3) + (Math.round(Math.random() * this.wCont * 0.4)); // start from area in the center of block
            this.startY = (this.hCont * 0.4) + (Math.round(Math.random() * this.hCont * 0.2));
        }
    }

    // coordinates for the finish poistion of the star
    _calcFinish() {
        const deg = Math.round(Math.random() * 360);
        let addX = Math.round(Math.cos(deg) * this.wCont);
        let addY = Math.round(Math.sin(deg) * this.hCont);

        //return { newX: newX, newY: newY };
        return { addX: addX, addY: addY };
    }

    // duration of the moving
    _calcDuration() {
        this.duration = this.minDuration + 4 * Math.round(Math.random() * this.minDuration);
    }

    // size of the star - height an width
    _calcSize() {
        this.size = 1 + Math.round(Math.random() * (this.maxSize - 1));
    }

    // delay for changing X and Y
    _calcDelay() {
        this.delay = Math.round(Math.random() * 10) + 's';
    }

    
    _calcColor() {
        if (this.colorFlag) {
            this.color = colorsArr[Math.floor(Math.random() * colorsArr.length)];
        } else {            
            this.color = Math.random() > .95 ? greenColor : whiteColor; 
        }   
    }
    
    // delete star-element after duration-time and make a new star
    _eraseStar(star) {
        let delTime = this.duration * 1000 + this.minDrawDelay;
        setTimeout(() => {
            star.remove();
            this._makeStar();
        }, (delTime));
    }

    // make a one beautiful star
    _makeStar() {

        if (this.galaxyFlag) {
            const newStar = document.createElement('div');
            newStar.classList.add('newStar');

            this._calcStart();
            newStar.style.left = this.startX + "px";
            newStar.style.top = this.startY + "px";

            this._calcSize();
            newStar.style.height = this.size + "px";
            newStar.style.width = this.size + "px";

            this._calcColor();
            newStar.style.background = this.color;

            this._calcDelay();
            this._calcDuration();

            // set a transition options before change star's coordinates
            newStar.style.transition = 'transform ' + this.duration + 's linear,' + 'opacity 3s ' + this.delay;

            this.container.append(newStar);

            // let's move our new star!
            this._moveStar(newStar);

            // del our star when it is far away
            this._eraseStar(newStar);
        }
    }

    // set a new TOP an LEFT, for moving our star to new point
    _moveStar(star) {
        let finXY = this._calcFinish();
        setTimeout(() => {
            star.style.transform = 'translateX(' + finXY.addX + 'px) ' + 'translateY(' + finXY.addY + 'px';
            star.style.opacity = this.maxOpacity;
        }, (this.minDrawDelay));
    }

    // make a clouds of stars
    makeStarsClouds() {
        this.container.style.opacity = "1";
        for (let i = 0; i < this.clouds; i++) {
            for (let j = 0; j < this.cloudSize; j++) {
                this._makeStar();
            }
        }
    }

    // toggle the galaxy
    toggleGalaxy() {         
        this.galaxyFlag = !this.galaxyFlag; 

        if (this.galaxyFlag) {
            this.makeStarsClouds()
        }
        else {
            this.eraseAllStars()
        }
    }

    //toggle colors
    toggleColors() {
        this.colorFlag = !this.colorFlag;
    }

    // stop stars
    eraseAllStars() {
        this.container.style.opacity= "0";
        setTimeout(() => {
            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild);
            }
        }, (1000));
    }

}