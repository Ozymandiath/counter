class Timer {

    constructor() {
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        // this.value = 0
    }

    start() {
        setInterval(() => {
            this.visual()
            this.improve()
        }, 1000);
    }

    visual() {
        document.getElementById("clock1").innerHTML = `${this.minutes}:${this.seconds}`
    }

    improve() {
        this.seconds += 1
        if (this.seconds === 6) {
            this.seconds = 0
            this.minutes += 1
        }

        return this.seconds
        // if (this.seconds <= 5) {
        //     this.seconds = value;
        //     value = value + 1
        // }
        // // this.seconds = 0
        // return this.seconds

    }

}

let secundomer = new Timer()

secundomer.start()


