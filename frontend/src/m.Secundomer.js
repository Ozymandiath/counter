export class Secundomer {

    constructor() {
        this.time = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        }
        this.mainTime = structuredClone(this.time);
    }

    start() {
        this.visual()
        this.improve()
        this.intervalID = setInterval(() => {
            this.visual()
            this.improve()
        }, 10);

    }
    stop() {
        clearInterval(this.intervalID)
        this.mainTime = structuredClone(this.time)
        console.log(this.mainTime)
        for (const key in this.time) {
            if (this.time.hasOwnProperty(key)) this.time[key] = 0;
        }
        this.visual()
    }

    visual() {
        document.getElementById('clock1').textContent = 
        `${(this.time.hours < 10)?"0":""}${this.time.hours}:${(this.time.minutes < 10)?"0":""}${this.time.minutes}:${(this.time.seconds < 10)?"0":""}${this.time.seconds}:${(this.time.miliseconds < 10)?"0":""}${this.time.miliseconds}` 
    }
    improve() {
        this.time.miliseconds += 1
        if (this.time.miliseconds === 100) {
            this.time.miliseconds = 0
            this.time.seconds += 1
        }
        if (this.time.seconds === 60) {
            this.time.seconds = 0
            this.time.minutes += 1
        }
        if (this.time.minutes === 60) {
            this.time.minutes = 0
            this.time.hours += 1
        }
        if (this.time.hours === 24) this.time.hours = 0
    }


}

///////Создать основной таймер
