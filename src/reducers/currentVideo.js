import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  if(action.type === 'CHANGE_VIDEO') {
    state = state || {videos: [], currentVideo: null, value:''};
    var updatedCurrentVideo = action.video; 
    return updatedCurrentVideo;
  }  
  return state
};

export default currentVideoReducer;
