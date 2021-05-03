import { FETCHHISTORY } from "../actions"

const history = (state = { isFetching: true, videos: [] }, action) => {
    if (action.type === FETCHHISTORY) {
        state.videos = action.payload;
        state.isFetching = false;
        return { ...state };
    }
    else return state
}

export default history