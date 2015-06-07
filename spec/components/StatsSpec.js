import makeStubAppState from '../stubs/appState';
import Stats from '../../app/components/Stats';

describe('Stats component', () => {
  let appState, statsNode;
  beforeEach(() => {
    appState = makeStubAppState();

    appState.set('totalClicks', 5);

    statsNode = appState.renderWithBranch(Stats, {});
  });

  it('displays the right text', () => {
    expect(statsNode).toHaveText(/Total Clicks: 5/);
  });
});
