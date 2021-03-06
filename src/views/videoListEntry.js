var VideoListEntryView = Backbone.View.extend({

  events: {'click div.video-list-entry-title': 'handleTitleClick'},

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  handleTitleClick: function() {
    this.model.select();
  },
 
  template: templateURL('src/templates/videoListEntry.html')
});
