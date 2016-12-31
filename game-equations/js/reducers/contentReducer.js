export default function(state = {}, action) {
    switch (action.type) {
    case "GET_ALL_RIDDLES_SUCCESS":
            return action.riddles;
        default:
            return state;
    }
}
