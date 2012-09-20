
/**
 * Request time middleware.
 *
 * Options:
 *   - `time` (`Number`): number of ms after which we log (100)
 *
 * @param {Object} options
 * @api public
 */

module.exports = function (opts) {

  var time = opts.time || 100;

  return function (req, res, next) {
    var timer = setTimeout(function () {
      console.log(
          '\033[90m%s %s\033[39m \033[91mis taking too long!\033[39m'
        , req.method
        , req.url
      );
    }, time);

    var end = res.end;
    res.end = function (chunk, encoding) {
      res.end = end;
      res.end(chunk, encoding);
      clearTimeout(timer);
    };

    next();
  };

};
