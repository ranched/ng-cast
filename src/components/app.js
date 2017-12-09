angular.module('video-player')


.component('app', {
  controller: function ($scope, youTube) {
    this.options = {
      key: window.YOUTUBE_API_KEY,
      q: '',
      maxResults: 5,
      part: 'snippet'
    };
    this.videos/* = window.exampleVideoData*/;
    this.currentVideo/* = window.exampleVideoData[0]*/;
    this.selectVideo = function(index) {
      this.currentVideo = this.videos[index];
    };
    this.selectVideo = this.selectVideo.bind(this);
    this.searchResults = function (callback, options, query) {
      console.log('inside searchResults:', callback, options, query);
      this.options.q = query;
      // console.log('query:', this.query);
      youTube.getVideos(callback, options);
    };
    this.updateVideos = function(videos) {
      this.videos = videos;
      this.currentVideo = this.videos[0];
    };
    this.updateVideos = this.updateVideos.bind(this);
    // this.searchResults(this.updateVideos, this.options);
    this.searchResults = this.searchResults.bind(this);
  },
  
  
  // TODO
  templateUrl: 'src/templates/app.html'
  });
