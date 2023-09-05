
class Timer {
    
    constructor() {
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        this.btnStatus = false
    }
    
    start2(){
        document.getElementById('btn_SS').addEventListener('click', () => {this.updateButton()})
    }

    updateButton() { 
        if (this.btnStatus === false) {
            this.btnStatus = true
            this.start()
        }
        else {
            this.btnStatus = false
            this.stop()
        }
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
    stop() {
        clearInterval(this.idInterval)
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
// function lert (){
//     secundomer.updateButton()
// }


secundomer.start2()



////Решить проблему с обнулением секундомера