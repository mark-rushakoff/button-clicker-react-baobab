import React from 'react';
import {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import BaobabPropTypes from 'baobab-react/prop-types';

class MainButton extends Component {
  render() {
    return <button onClick={handleClick.bind(this)}>Click!</button>;

    function handleClick() {
      this.context.cursors.totalClicks.apply(increment);

      function increment(n) {
        return n + 1;
      }
    }
  }
}
MainButton.displayName = 'MainButton';

MainButton.contextTypes = {
  cursors: BaobabPropTypes.cursors,
};

const branchConfig = {
  cursors: {
    totalClicks: ['totalClicks'],
  },
};

export default branch(MainButton, branchConfig);
