/** @jsx React.DOM */

var React = require('react');
var classes = require('react-classes');

module.exports = React.CreateClass({

  /**
   * @function hide
   * @description Hide the dialog window when open.
   */
  hide: function () {
    this.refs.modal.hide();
  },

  /**
   * @funcion show
   * @description Show the dialog window when hidden.
   */
  show: function () {
    this.refs.modal.show();
  },

  propTypes: {
    title: React.PropTypes.string,
    actions: React.PropTypes.array
  },

  getDefaultProps: function () {
    return {
      actions: []
    };
  },

  render: function () {

    var classes = 

    return (
      <div ref="modal" className={classes}>

        <h3 className="dialog-title">
          {this.props.title}
        </h3>

        <section ref="dialogContent" className="dialog-content">
          {this.props.children}
        </section>

        <div className="dialog-actions">
          <div className="dialog-actions-right">{actions}</div>
        </div>

      </div>
    );
  },

});
