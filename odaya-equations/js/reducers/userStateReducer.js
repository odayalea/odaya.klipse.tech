export default function(state = {currentRiddle: 0}, action) {
    switch (action.type) {
    case "NEXT_RIDDLE":
        return Object.assign({}, state, {currentRiddle: state.currentRiddle + 1});
    case "PREVIOUS_RIDDLE":
        return Object.assign({}, state, {currentRiddle: state.currentRiddle - 1});
    default:
        return state;
    }
}
