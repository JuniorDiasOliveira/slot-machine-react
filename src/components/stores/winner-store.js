import { EventEmitter } from 'events';
import dispatcher from '../dispatchers/dispatcher-winner';

class WinnerStore extends EventEmitter {
    constructor() {
        super();
        this.results = null;
        window.dispatcher = dispatcher;
    }
    handleWinnerAction = (action) => this.setResults(action);

    getResults = () => this.results;

    setResults = (result) => {
        this.results = result;
        this.emit("showWinner");
    }

}

const winnerStore = new WinnerStore();
dispatcher.register(winnerStore.handleWinnerAction.bind(winnerStore));

export default winnerStore;