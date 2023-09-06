
class Timer {

    constructor() {
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        this.btnStatus = false
    }

    btnStart() {
        document.getElementById('btn_SS').addEventListener('click', () => { this.updateButton() })
    }

    updateButton() {
        if (!this.btnStatus) {
            this.start()
            this.btnStatus = true
        }
        else {
            this.stop()
            this.btnStatus = false
        }
    }

    start() {
        this.intervalID = setInterval(() => {
            this.visual()
            this.improve()
        }, 1000);

    }
    stop() {
        clearInterval(this.intervalID)
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        this.visual()
        
    }

    visual() {
        document.getElementById("clock1").innerHTML = `${this.hours}:${this.minutes}:${this.seconds}`
    }

    improve() {
        this.seconds += 1
        if (this.seconds === 4) {
            this.seconds = 0
            this.minutes += 1
        }
        if (this.minutes === 4) {
            this.minutes = 0
            this.hours += 1
        }
        if (this.hours === 2) this.hours = 0

        return this.seconds
    }


}
let secundomer = new Timer()
secundomer.btnStart()

///////Создать основной таймер
