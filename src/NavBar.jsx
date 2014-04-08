/** @jsx React.DOM */

import React          from './react-es6';
import classSet       from './react-es6/lib/cx';
import BootstrapMixin from './BootstrapMixin';
import utils          from './utils';


var NavBar = React.createClass({

  mixins: [BootstrapMixin],

  getDefaultProps: function () {
    return {
      bsClass: 'navbar'
    };
  },


  handleToggleMenu: function () {

    var menuDOM = this.refs.menuTarget.getDOMNode(),
        menuClass = menuDOM.className.split(" ");

    if (menuClass.indexOf("hide") > -1) {
      menuDOM.className = menuClass.toString().replace("hide");
    } else {
      menuDOM.className = menuClass.push("hide").toString();
    }

    console.log(menuDOM.className);

  },

  renderHeader: function () {

    return (
      <div>
        <button type="button" className="navbar-toggle" onClick={this.handleToggleMenu}>
          <span className="sr-only">{this.props.toggleCaption}</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">{this.props.brandName}</a>
      </div>
    );

  },

  render: function () {
    var header = this.renderHeader();

    return this.transferPropsTo(
      <nav>
        <div>
          {header}
          <div className="collaps navbar-collapse" ref="menuTarget" hide="true">
            {this.props.children}
          </div>
        </div>
      </nav>
    );

  }

});

export default = NavBar;
