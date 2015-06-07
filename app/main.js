import React from 'react';

import makeAppComponent from './makeAppComponent';
import makeAppState from './makeAppState';

const appState = makeAppState();
const appComponent = makeAppComponent(appState);
React.render(React.createElement(appComponent), document.body);
