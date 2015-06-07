import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import BaobabPropTypes from 'baobab-react/prop-types';

class Stats extends Component {
  render() {
    return (<div>
      Total Clicks: {this.props.totalClicks}
    </div>);
  }
}
Stats.displayName = 'Stats';

Stats.contextTypes = {
  cursors: BaobabPropTypes.cursors,
};
Stats.propTypes = {
 totalClicks: React.PropTypes.number.isRequired,
};

const branchConfig = {
  cursors: {
    totalClicks: ['totalClicks'],
  },
};

export default branch(Stats, branchConfig);
