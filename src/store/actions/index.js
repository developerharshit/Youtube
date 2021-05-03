import { api } from '../../api'

export const RECOMMENDATION = 'RECOMMENDATION'
export const FETCHVIDEO = 'FETCHVIDEO'
export const UPDATEVIDEO = 'UPDATEVIDEO'
export const GETTRENDING = 'GETTRENDING'
export const FETCHHISTORY = 'FETCHHISTORY'
export const FETCHLIKEDVIDEOS = 'FETCHLIKEDVIDEOS'

export const getRecommendation = () => async (dispatch) => {
    const response = await api.get('/videos')
    // const response = await client('/videos')
    dispatch({
        type: RECOMMENDATION,
        payload: response.data.data
    })
}

export const fetchTrending = () => async (dispatch) => {
    const response = await api.get('/videos')
    dispatch({
        type: GETTRENDING,
        payload: response.data.data.sort((a, b) => b.views - a.views)
    })
}

export const fetchHistory = () => async (dispatch) => {
    const response = await api.get('/users/history')
    dispatch({
        type: FETCHHISTORY,
        payload: response.data.data
    })
}

export const fetchLikedVideos = () => async (dispatch) => {
    const response = await api.get('/users/likedVideos')
    dispatch({
        type: FETCHLIKEDVIDEOS,
        payload: response.data.data
    })
}

export const login = () => async (dispatch) => {
    const response = await api.get('/users/likedVideos')
    dispatch({
        type: FETCHLIKEDVIDEOS,
        payload: response.data.data
    })
}

// WATCH VIDEO ACTIONS

export const fetchVideo = (id) => async (dispatch, getState) => {
    const response = await api.get(`/videos/${id}`)
    dispatch({
        type: FETCHVIDEO,
        payload: response.data.data
    })
}

export const clearVideo = () => (dispatch, getState) => {
    dispatch({
        type: UPDATEVIDEO,
        payload: {
            isFetching: true,
            video: {}
        }
    })
}

export const cancelLike = () => (dispatch, getState) => {
    const videoState = getState().video
    videoState.video.isLiked = false;
    videoState.video.likesCount -= 1
    dispatch({
        type: UPDATEVIDEO,
        payload: { ...videoState }
    })
}

export const like = () => (dispatch, getState) => {
    const videoState = getState().video
    videoState.video.isLiked = true;
    videoState.video.likesCount += 1
    dispatch({
        type: UPDATEVIDEO,
        payload: { ...videoState }
    })
}

export const cancelDislike = () => (dispatch, getState) => {
    const videoState = getState().video
    videoState.video.isDisliked = false;
    videoState.video.dislikesCount -= 1
    dispatch({
        type: UPDATEVIDEO,
        payload: { ...videoState }
    })
}

export const dislike = () => (dispatch, getState) => {
    const videoState = getState().video
    videoState.video.isDisliked = true;
    videoState.video.dislikesCount += 1
    dispatch({
        type: UPDATEVIDEO,
        payload: { ...videoState }
    })
}

export const handleSubscribeFromVideo = () => (dispatch, getState) => {
    const videoState = getState().video
    videoState.video.isSubscribed = !videoState.video.isSubscribed;
    dispatch({
        type: UPDATEVIDEO,
        payload: { ...videoState }
    })
}



