import BaobabPropTypes from 'baobab-react/prop-types';
import React, {Component} from 'react';
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

export default function makeAppComponent(appState) {
  return root(App, appState);
}
