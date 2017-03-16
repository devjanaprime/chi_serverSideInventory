$( document ).ready( function(){

  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input
    // assemble into object to send
    var objectToSend = {
      name: $( '#nameInAdd' ).val()
    }; // end objectToSend
    console.log( 'sending:', objectToSend );
    // send to server
    $.ajax({
      type: 'POST',
      url: '/inventory/add',
      data: objectToSend,
      success: function( response ){
        // display updated inventory
        console.log( response );
        if( response == 'OK' ){
          // success
          getInventory();
          // clear input
          $( '#nameInAdd' ).val('');
        } // end success
        else{
          alert( 'error adding item')
        } // end error message
      } //end success
    }); // end ajax
  }); // end addButton on click

  $( '#clearSearchButton' ).on( 'click', function(){
    console.log( 'in clearSearchButton on click');
    // get full inventory
    getInventory();
    // clear search input
    $( '#nameInSearch' ).val( '' );
  });

  $( '#searchButton' ).on( 'click', function(){
    var searchText = $( '#nameInSearch' ).val();
    console.log( 'in end searchButton on click:', searchText );
    $.ajax({
      type: 'POST',
      url: '/inventory/search',
      data: { name: searchText },
      success: function( response ){
        showInventory( response );
      }
    }); //end ajax
  }); // end search button on click

  var showInventory = function( inventoryToShow ){
    $( '#listDiv' ).empty();
    for (var i = 0; i < inventoryToShow.length; i++) {
      $( '#listDiv' ).append( '<p>' + inventoryToShow[i].name + '</p>' );
    } // end for
  };

  var getInventory = function(){
    console.log( 'in getInventory' );
      $.ajax({
        type: 'GET',
        url: '/inventory',
        success: function( response ){
          console.log( 'inventory:', response );
          showInventory( response );
        } // end success
      }); // end ajax
  }; // end getInventory

  getInventory();
}); //end doc ready
