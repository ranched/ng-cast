angular.module('video-player')
  .service('youTube', function($http) {
    // console.log(this)
    
    this.getVideos = function (callback,options) {
      var videos;
      const getOptions = {
        method: 'GET',
        //url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCjJW2aj1JBrqIVxPQQTFXE2TcpVA5x3Zk&part=snippet',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: options
       //{
       //    key: window.YOUTUBE_API_KEY,
       //    q: 'funny cats',
       //    maxResults: 5,
       //    part: 'snippet',
       //    // videoEmbeddable: true
       //  } 
      };
      
      $http(getOptions).then( 
        
        function successCallback(response) {
          // console.log('GET SUCCESSFUL');
          // return response.data.items;
          // console.log(response.data.items)
          callback(response.data.items);
        },
      
        function errorCallback (response) {
          //console.error('get unsuccessful');
        }
      );
      return videos;
    };
  
  });
