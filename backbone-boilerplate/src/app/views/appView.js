import backbone from 'backbone';
import HelloModel from 'app/models/helloModel';
import './appView.scss';

const appView = Backbone.View.extend({

  el: 'body',

  initialize: function () {
    this.$helloEl = this.$('.App__main');
    this.hello = new HelloModel();
    this.render();
  },

  render: function () {
    this.$helloEl.html(`<h1 class="Home__heading">${this.hello.getValue()}</h1>`);
  }
});

export default appView;
