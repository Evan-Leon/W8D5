class Clock {
    constructor(){
        let date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        const bindedPrintTime = this.printTime.bind(this)
        const binded_Tick = this._tick.bind(this)
        setInterval(function (){
            bindedPrintTime();
            binded_Tick();
        }, 1000);

    }

    printTime(){
        let stringTime = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(stringTime);
    }

    _tick() {
        this.seconds++ ; 
        if (this.seconds == 60){
            this.seconds = 0; 
            this.minutes++;

        }
        if (this.minutes == 60){
            this.minutes = 0;
            this.hours++;
        }
        if (this.hours == 24){
            this.hours = 0;
        }
    }

}

const clock = new Clock();