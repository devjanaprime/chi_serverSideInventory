// requires
var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var index = require( './modules/index.js' );
var inventory = require( './modules/inventory.js' );
// globals
var port = 2345;
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// routes
app.use( '/', index );
app.use( '/inventory', inventory );

// spin up server
app.listen( port, function(){
  console.log( 'server up on:', port );
}); // end server up
// home base
