import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

var rootReducer = combineReducers({videoList: videoListReducer, currentVideo: currentVideoReducer})

// (state = {videoList: [], currentVideo: null}, action) => 

// {
//   if(action.type === "CHANGE_VIDEO_LIST") {
//     return Object.assign({}, state, {videoList: videoListReducer(state, action)});
//   }
  
//   if(action.type === "CHANGE_VIDEO"){
//     return Object.assign({}, state, {currentVideo: currentVideoReducer(state, action)});
//   }
//   return state;
// };



//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
