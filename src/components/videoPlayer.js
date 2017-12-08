angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    video: '<'
  },
  controller: function () {
      // console.log('VP controller: ', JSON.stringify(this));
      
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
