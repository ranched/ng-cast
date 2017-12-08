angular.module('video-player')


  .component('app', {
    controller: function () {
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      this.selectVideo = function() {
      };
      this.searchResults = function () {
        
      };
      
      
    },
    
    // TODO
    templateUrl: 'src/templates/app.html'
  });
