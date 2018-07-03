import { EventEmitter } from 'events';
import dispatcher from '../dispatchers/dispatcher-wheel';

class WheelStore extends EventEmitter {
    constructor() {
        super();
        this.wheelState = false;
    }
    getStateWheel = () => this.wheelState;
    setStateWheel = (state) => {
        this.wheelState = state;
        this.emit("rollWheels");
    }
    handleWheelAction = (action) => {
        this.setStateWheel(action)
    }
}

const wheelStore = new WheelStore();
dispatcher.register(wheelStore.handleWheelAction.bind(wheelStore));

export default wheelStore;