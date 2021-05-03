import { combineReducers } from "redux";
import recommendation from "./recommendation";
import trending from "./trending";
import video from './video'
import history from './history'
import likedVideos from "./likedVideos";

export default combineReducers({
    recommendation: recommendation,
    video: video,
    trending: trending,
    history: history,
    likedVideos: likedVideos,
})