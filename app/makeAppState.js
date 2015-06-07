import Baobab from 'baobab';
import types from 'typology';

export default function makeAppState(optionOverrides) {
  return new Baobab(initialData(), defaultBaobabOptions(optionOverrides));
}

export function initialData() {
  return {
    totalClicks: 0,
  };
}

export function defaultBaobabOptions(overrides) {
  return Object.assign({validate}, overrides);

  function validate(previousState, newState) {
    const type = {
      totalClicks: 'number',
    };

    if (types.check(type, newState)) {
      return undefined;
    }

    const result = types.scan(type, newState);
    return new Error(result.error);
  }
}
