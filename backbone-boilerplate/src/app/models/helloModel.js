import backbone from 'backbone';

const helloModel = backbone.Model.extend({
  getValue: function () {
    return 'Hello World';
  }
});

export default helloModel;
