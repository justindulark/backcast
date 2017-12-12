var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.render, this);
  },

  render: function(video) {
    if (!video) {
      this.$el.html('<div class="loading">Please wait...</div>');
      return this;
    }
    this.$el.html(this.template(video.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
