import makeAppState from '../app/makeAppState';

describe('appState', () => {
  describe('in the default configuration', () => {
    it('updates asynchronously when setting state', done => {
      const appState = makeAppState();

      let asyncUpdateHappened = false;

      appState.on('update', e => {
        asyncUpdateHappened = true;
        expect(e.data.data).toEqual({totalClicks: 1});
        done();
      });

      appState.set('totalClicks', 1);
      expect(asyncUpdateHappened).toBe(false);
    });

    it('triggers "invalid" asynchronously when setting state to something invalid', done => {
      const appState = makeAppState();

      let asyncUpdateHappened = false;
      let asyncInvalidHappened = false;

      appState.on('update', () => {
        asyncUpdateHappened = true;
        expect('update').toBe('not fired');
        done();
      });

      appState.on('invalid', () => {
        asyncInvalidHappened = true;
        // nothing extra to assert
        done();
      });

      appState.set('totalClicks', 'not a number');
      expect(asyncUpdateHappened).toBe(false);
      expect(asyncInvalidHappened).toBe(false);
    });
  });
});
