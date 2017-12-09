angular.module('video-player')
.component('videoList', {
  // TODO
  bindings: {
    videos: '<',
    click: '<'
  },
  controller: function() {
   // console.log('vL:this', this)
    //
  },
  templateUrl: 'src/templates/videoList.html'
});
