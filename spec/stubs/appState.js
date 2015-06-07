import {root} from 'baobab-react/higher-order';

import makeAppState from '../../app/makeAppState';

export default function makeStubAppState() {
  const state = makeAppState({asynchronous: false});

  state.renderWithBranch = (rawComponent, props) => {
    const el = React.createElement(root(rawComponent, state), props);
    return React.findDOMNode(TestUtils.renderIntoDocument(el));
  };

  return state;
}
