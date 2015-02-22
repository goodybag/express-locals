var assert  = require('assert');
var express = require('express');
var agent   = require('supertest');
var elocals = require('../');

var setup = function(){
  var app = express.Router();

  app.get( '/locals', function( req, res ){
    res.send( res.locals );
  });

  return app;
}

describe('Express Locals', function(){
  it('Should add locals', function( done ){
    var app = express();

    app.use( elocals({
      testing: 123
    }));

    app.use( setup() );

    agent( app )
      .get('/locals')
      .expect(200)
      .end( function( error, res ){
        assert( !!error );
        console.log( res );
        done();
      });
  });
});