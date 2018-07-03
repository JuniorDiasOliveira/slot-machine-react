import dispatcher from "../dispatchers/dispatcher-winner";

let _winnerData = [];

export default {
    changeWinnerState: (result) => {

        _winnerData.push(result)

        if (_winnerData.length >= 3) {
            dispatcher.dispatch(_winnerData);
            _winnerData = [];
        }
    }
}