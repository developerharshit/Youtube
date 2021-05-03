import { FETCHVIDEO, UPDATEVIDEO } from "../actions"

const fetchVideo = (state = { isFetching: true, video: {} }, action) => {
    if (action.type === FETCHVIDEO) {
        state.video = action.payload;
        state.isFetching = false;
        return { ...state };
    }
    else if (action.type === UPDATEVIDEO) {
        return action.payload
    }
    else return state
}

export default fetchVideo