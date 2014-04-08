/** @jsx React.DOM */
/*global describe, beforeEach, afterEach, it, assert */

var React          = require('react');
var ReactTestUtils = require('react/lib/ReactTestUtils');
var Modal   = require('../cjs/Modal');

describe('Modal', function () {
  it('Should render modal correctly', function () {
    var instance = ReactTestUtils.renderIntoDocument(
      <Modal title="Modal title" />
    );

    assert.ok(instance.getDOMNode().getElementsByClassName('modal'));
  });

  it('Should render modal with title correctly', function () {
    var instance = ReactTestUtils.renderIntoDocument(
      <Modal title="Modal title" />
    );

    assert.equal(instance.props.title, "Modal title");
    assert.ok(instance.getDOMNode().getElementsByClassName('modal'));
  });

  it('Should call onRequestHide callback after clicking close button', function (done) {
    function onRequestHide(evt) {
      assert.ok(evt);
      done();
    }
    var instance = (<Modal onRequestHide={onRequestHide} title="Modal title" />);
    ReactTestUtils.renderIntoDocument(instance);
    var closeDOM = ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'close');

    ReactTestUtils.Simulate.click(closeDOM);
  });

});
