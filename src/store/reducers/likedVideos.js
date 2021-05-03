import { FETCHLIKEDVIDEOS } from "../actions"

const likedVideos = (state = { isFetching: true, videos: [] }, action) => {
    if (action.type === FETCHLIKEDVIDEOS) {
        state.videos = action.payload;
        state.isFetching = false;
        return { ...state };
    }
    else return state
}

export default likedVideos