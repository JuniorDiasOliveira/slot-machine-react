import { interval, timer} from "rxjs";
import { takeUntil } from "rxjs/operators";

class WheelFunctions {

    constructor(speed, time) {
        this.speed = interval(speed);
        this.timer = timer(time);
        this.listOfSubscriptions = [];
    }

    startWheel(onRunning, notify) {
        const subscription = this.speed
            .pipe(takeUntil(this.timer))
            .subscribe(
                x => onRunning(),
                e => console.log("error"),
                () => {
                    notify();
                    this.stopWheel();
                }
            );

        this.listOfSubscriptions.push(subscription)
    }

    stopWheel(notify) {
        if(notify) notify();
        this.listOfSubscriptions.forEach(x => x.unsubscribe());
        this.listOfSubscriptions = [];
    }
}

export default WheelFunctions;