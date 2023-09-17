import { Secundomer } from "./m.Secundomer.js"
import { Time } from "./m.time.js"

let newSec = new Secundomer()
let newTime = new Time()
let btnStatus = false
document.getElementById('btn_SS').addEventListener('click', () => { 
    if (!btnStatus) {
        newSec.start()
        btnStatus = true
    }
    else {
        newSec.stop()
        newTime.sumOfTimes(newSec.mainTime)
        btnStatus = false
    }
})



