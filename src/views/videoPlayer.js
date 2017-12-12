var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    Backbone.on('select', function(receivedVideo) {
      this.model = receivedVideo;
      this.render();
    }, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
