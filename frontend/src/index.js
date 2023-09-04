class Timer {

    constructor() {
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        // this.value = 0
    }

    start() {
        let idInterval = setInterval(() => {
            this.visual()
            this.improve()
        }, 1000);
    

        // this.idInterval = setInterval(()=>{
        //     console.log('sanya')
        // },1000)
    }
    stop(){
        clearInterval(this.idInterval)
    }

    visual() {
        document.getElementById("clock1").innerHTML = `${this.hours}:${this.minutes}:${this.seconds}`
    }

    improve() {
        this.seconds += 1
        if (this.seconds === 3) {
            this.seconds = 0
            this.minutes += 1
        }
        if (this.minutes === 2) {
            this.minutes = 0
            this.hours += 1
        }
        if (this.hours === 2) this.hours = 0

        return this.seconds
    }


}

let secundomer = new Timer()

secundomer.start()


