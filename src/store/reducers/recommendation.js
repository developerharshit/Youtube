import { RECOMMENDATION } from "../actions"

const recommendation = (state = { isFetching: true, videos: [] }, action) => {
    if (action.type === RECOMMENDATION) {
        state.videos = action.payload;
        state.isFetching = false;
        return { ...state };
    }
    else return state
}

export default recommendation