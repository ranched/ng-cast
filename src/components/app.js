angular.module('video-player')


.component('app', {
  controller: function () {
    console.log('this in appCTRL: ', this);
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.selectVideo = function(video) {
      console.log('this in selectVideo: ', this);
    };
    this.selectVideo = this.selectVideo.bind(this);
    this.searchResults = function () {
      
    };
    
    
  },
  
  
  // TODO
  templateUrl: 'src/templates/app.html'
  });
