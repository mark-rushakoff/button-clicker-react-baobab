import makeStubAppState from '../stubs/appState';
import MainButton from '../../app/components/MainButton';

describe('MainButton component', () => {
  let appState, mainButtonNode;
  beforeEach(() => {
    appState = makeStubAppState();

    mainButtonNode = appState.renderWithBranch(MainButton, {});
  });

  it('displays the right text', () => {
    expect(mainButtonNode).toHaveText(/Click/);
  });

  describe('clicking the button', () => {
    beforeEach(() => {
      expect(appState.get('totalClicks')).toEqual(0);
      Simulate.click(mainButtonNode);
    });

    it('increments the app state totalClicks', () => {
      expect(appState.get('totalClicks')).toEqual(1);
    });
  });
});
