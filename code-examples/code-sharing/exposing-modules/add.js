(function (module) {
  if ('undefined' == typeof module) {
    module = { exports: {} };
  }

  module.exports = function (a, b) {
    return a + b;
  }

  if ('undefined' != typeof window) {
    window.add = module.exports;
  }
})(module);
