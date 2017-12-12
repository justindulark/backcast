var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function(query) {
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        key: window.YOUTUBE_API_KEY,
        q: query,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true
      },
      dataType: 'json',
      success: (data) => {
        console.log('Search successful');
        this.reset();
        _.each(data.items, (video) => {
          this.add(video);
        });
        this.trigger('rerender', this);
      },
      error: (data) => {
        console.error('Failed to search', data);
      }
    });
  }  
});
