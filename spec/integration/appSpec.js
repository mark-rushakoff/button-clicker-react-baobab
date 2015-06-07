import makeAppComponent from '../../app/makeAppComponent';
import makeAppState from '../../app/makeAppState';

describe('the app', () => {
  let appComponentNode;
  beforeEach(() => {
    const appComponent = makeAppComponent(makeAppState());
    const el = React.createElement(appComponent);
    appComponentNode = React.findDOMNode(TestUtils.renderIntoDocument(el));
  });

  it('starts at count 0', () => {
    expect($app()).toHaveText(/Total Clicks: 0/);
    expect($mainButton()).toExist();
  });

  describe('when clicking the counter', () => {
    beforeEach(() => {
      Simulate.click($mainButton()[0]);
    });

    it('increments the counter', (done) => {
      setImmediate(() => {
        expect($app()).toHaveText(/Total Clicks: 1/);
        done();
      });
    });
  });

  function $app() {
    return $(appComponentNode);
  }

  function $mainButton() {
    return $app().find('button');
  }
});
