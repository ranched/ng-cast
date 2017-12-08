angular.module('video-player')
.component('videoList', {
  // TODO
  bindings: {
    videos: '<'
  },
  controller: function() {
    // console.log('vL controller: ',this);
  },
  templateUrl: 'src/templates/videoList.html'
});
