export class Time {

    constructor(){
        this.time = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    
    sumOfTimes(timeObj) {
        for (const key in this.time) {
            console.log(this.time[key])
            console.log(timeObj[key])
            this.time[key] += timeObj[key]
        }
        this.visual()
    }

    visual() {
        document.getElementById("clock2").textContent = `${this.time.hours}:${this.time.minutes}:${this.time.seconds}`
    }
}