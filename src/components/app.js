angular.module('video-player')


.component('app', {
  controller: function ($scope, youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.selectVideo = function(index) {
      this.currentVideo = this.videos[index];
    };
    this.selectVideo = this.selectVideo.bind(this);
    this.searchResults = function (callback) {
      youTube.getVideos(callback);
    };
    this.updateVideos = function(videos){
      this.videos = videos;
      this.currentVideo = this.videos[0];
    };
    this.searchResults(this.updateVideos.bind(this));
    console.log(this.videos);
    
    //console.log(this.searchResults());
   //console.log(this.searchResults());
  },
  
  
  // TODO
  templateUrl: 'src/templates/app.html'
  });
