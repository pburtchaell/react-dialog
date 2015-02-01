/** @jsx React.DOM */

var React = require('react');
var classes = require('react-classes');

module.exports = React.CreateClass({

  mixins: [classes],

  /**
   * @function hide
   * @description Hide the dialog window when open.
   */
  hide: function () {
    this.setState({
      active: true
    });
  },

  /**
   * @funcion show
   * @description Show the dialog window when hidden.
   */
  show: function () {
    this.setState({
      active: true
    })
  },

  propTypes: {
    title: React.PropTypes.string,
    action: React.PropTypes.string,
    message: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      action: 'Close'
    };
  },

  render: function () {

    var classes = this.getClass('dialog', {
      'dialog-active': this.state.active || false,
    });

    return (
      <div ref="modal" className={classes}>
        <div className="dialog-title">{this.props.title}</div>
        <section ref="dialogContent" className="dialog-content">{this.props.message}</section>
        <div className="dialog-action"{this.props.action}></div>
      </div>
    );

  },

});
