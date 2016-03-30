var React = require('react');

var Hello = React.createClass({
  render: function () {
    return (
      <div>Hello, {this.props.params.name || 'World'}</div>
    );
  }
});

module.exports = Hello;