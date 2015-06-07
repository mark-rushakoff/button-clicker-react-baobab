import Baobab from 'baobab';
import {root} from 'baobab-react/higher-order';

export default function makeStubAppState() {
  const tree = new Baobab({
    totalClicks: 0,
  }, {asynchronous: false});

  tree.renderWithBranch = (rawComponent, props) => {
    const el = React.createElement(root(rawComponent, tree), props);
    return React.findDOMNode(TestUtils.renderIntoDocument(el));
  };

  return tree;
}
