import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  if (action.type === 'CHANGE_VIDEO_LIST') {
    var newVideoList = action.videos;
    return newVideoList;
  }
  return state;
};

export default videoListReducer;
