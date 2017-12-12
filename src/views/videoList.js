var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    // console.log(this.collection);
    // console.log(this.$el);
    // debugger;

    this.$el.find('.video-list').append(this.collection.map(function(video) {
      let currentVideo = new VideoListEntryView({model: video});
      return currentVideo.render().$el;
    }));

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
