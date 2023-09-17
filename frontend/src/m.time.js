export class Time {

    constructor() {
        this.time = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        }
    }

    sumOfTimes(timeObj) {
        for (const key in this.time) {
            switch (key) {
                case 'hours':
                    this.time[key] += timeObj[key]
                    break;

                case 'minutes':
                    this.time[key] += timeObj[key]
                    if (this.time[key] > 59){
                        this.time.hours += 1
                        this.time[key] -= 60
                    }
                    break;
                    
                case 'seconds':
                    this.time[key] += timeObj[key]
                    if (this.time[key] > 59){
                        this.time.minutes += 1
                        this.time[key] -= 60
                    }
                    break;
                case 'miliseconds':
                    this.time[key] += timeObj[key]
                    if (this.time[key] > 99){
                        this.time.seconds += 1
                        this.time[key] -= 100
                    }
                    break;
            
            }
            // if ((this.time[key] + timeObj[key]) > 59) {
            //     this.time['seconds'] += timeObj[key] - 60 
            //     this.time['minutes'] += 1
            // }
            // this.time[key] += timeObj[key]

        }
        this.visual()
    }

    visual() {
        document.getElementById("clock2").textContent = `${this.time.hours}:${this.time.minutes}:${this.time.seconds}`
    }
}