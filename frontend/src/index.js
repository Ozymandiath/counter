class Timer {
    constructor() {
        this.t = document.getElementById("clock1").innerHTML = `${this.getTime()}`
    }

    getTime() {
        let timeToday = new Date();
        return `${timeToday.getHours()}:${timeToday.getMinutes()}:${timeToday.getSeconds()}`
    }
}

let secundomer = new Timer()
