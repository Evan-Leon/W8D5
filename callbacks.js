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

// const clock = new Clock();

const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question('Input a number: ', function(numStr) {
            let numInt = parseInt(numStr);
            sum += numInt;
            console.log(sum);
            numsLeft--;
            addNumbers(sum, numsLeft, completionCallback);
        })
    } else if (numsLeft === 0) {
        completionCallback(sum);
        reader.close();
    }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


function absurdBubbleSort(arr, sortCompletionCallback){
    
}





