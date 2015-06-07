// ES5 shims for Function.prototype.bind, Object.prototype.keys, etc.
import 'core-js/es5';

const helpers = require.context('./spec/helpers', true, /\.js$/);
helpers.keys().forEach(helpers);

const specs = require.context('./spec', true, /Spec\.js$/);
specs.keys().forEach(specs);
