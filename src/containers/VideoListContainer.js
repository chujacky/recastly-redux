import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';


const mapStateToPros = (state) => {

  console.log(state);
  return ({
    videos: state.videoList
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({

    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
   
  });

};


const VideoListContainer = connect(mapStateToPros, mapDispatchToProps)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
