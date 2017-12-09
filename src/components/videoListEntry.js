angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    video: '<',
    click: '<'
  },
  controller: function() {
    console.log('vle: ', this);
  },
  
  templateUrl: 'src/templates/videoListEntry.html'
});
