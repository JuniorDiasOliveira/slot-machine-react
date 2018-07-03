import dispatcher from "../dispatchers/dispatcher-wheel";

export default {
    changeWheelState: (state) => {
        dispatcher.dispatch(state)
    }
}