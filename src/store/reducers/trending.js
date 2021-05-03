import { GETTRENDING } from "../actions"

const trending = (state = { isFetching: true, videos: [] }, action) => {
    if (action.type === GETTRENDING) {
        state.videos = action.payload;
        state.isFetching = false;
        return { ...state };
    }
    else return state
}

export default trending