var test	= require( 'tape' ),
	climp	= require( '../climp' ) ;

/*
test( 'play', function( assert ) {

	var input = 'Mihai play Hard To Handle by The Black Crowes' ;
	var expected = '' ;

	assert.deepEqual( climp( input ), expected, 'climp method behaves as expected for play activity' ) ;
	assert.end() ;

} ) ;

test( 'view', function( assert ) {

	var input = 'Mihai' ;
	var expected = [ 'Listened to Hard To Handle by The Black Crowes' ] ;

	assert.deepEqual( climp( input ), expected, 'climp method behaves as expected for view activity' ) ;
	assert.end() ;

} ) ;

test( 'follow', function( assert ) {

	var input = 'Aymeric follow Mihai' ;
	var expected = '' ;

	assert.deepEqual( climp( input ), expected, 'climp method behaves as expected for follow activity' ) ;
	assert.end() ;

} ) ;

test( 'activity', function( assert ) {

	var input = 'Aymeric activity' ;
	var expected = [ 'Mihai listened to Hard To Handle by The Black Crowes' ] ;

	assert.deepEqual( climp( input ), expected, 'climp method behaves as expected for activity activity' ) ;
	assert.end() ;

} ) ;
*/

test( 'sequence', function( assert ) {

	var sequence = require( './sequence.json' ) ;
	for ( var i = 0 ; i < sequence.length ; i++ ) {
		assert.deepEqual( climp( sequence[ i ].input ), sequence[ i ].expected, sequence[ i ].input ) ;
	}
	assert.end() ;

} ) ;
