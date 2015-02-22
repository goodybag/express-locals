var defaults  = require('lodash/object/fillin');
var extend    = require('lodash/object/extend');
var clone     = require('lodash/object/clone');

module.exports = function( locals, options ){
  options = defaults( options || {}, {
    clone: true
  });

  return function( req, res, next ){
    extend( res.locals, options.clone ? clone( locals ) : locals );
    return next();
  };
};