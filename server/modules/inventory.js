var express = require("express");
var router = express.Router();

var theInventory = [];

// get invenvtory
router.get( '/', function( req, res ){
  console.log( 'returning inventory' );
  res.send( theInventory );
}); // end get

// add to invenvtory
router.post( '/add', function( req, res ){
    console.log( 'adding to inventory:', req.body );
    theInventory.push( req.body );
    res.sendStatus( 200 );
}); //end add

// add to invenvtory
router.post( '/search', function( req, res ){
    console.log( 'searching inventory: for', req.body );
    var searchResults = [];
    for (var i = 0; i < theInventory.length; i++) {
      if( theInventory[i].name.includes( req.body.name ) ){
        console.log( );
        searchResults.push( theInventory[i] );
      }// end match
    } // end for
    res.send( searchResults );
}); //end add

module.exports = router;
