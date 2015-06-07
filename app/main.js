import React, {Component} from 'react';
import Baobab from 'baobab';
import BaobabPropTypes from 'baobab-react/prop-types';
import {root} from 'baobab-react/higher-order';

import MainButton from './components/MainButton';
import Stats from './components/Stats';

class App extends Component {
  render() {
    return (<div>
      <Stats/>
      <MainButton/>
    </div>);
  }
}
App.displayName = 'App';

App.contextTypes = {
  tree: BaobabPropTypes.baobab,
};

const appState = new Baobab({
  totalClicks: 0,
});


const app = root(App, appState);
React.render(React.createElement(app), document.body);
