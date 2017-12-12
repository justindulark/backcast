var SearchView = Backbone.View.extend({

  events: {'click button.btn': 'handleSearchClick',
    'keyup': function(e) {
      if (e.keyCode === 13) {
        this.handleSearchClick();
      }
    }
  },

  template: templateURL('src/templates/search.html'),

  render: function() {
    this.$el.html(this.template());
    return this;
  },
  
  handleSearchClick: function() {
    var query = this.$el.find('input.form-control').val();
    this.collection.search(query);
  } 

});
