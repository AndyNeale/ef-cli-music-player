var test	= require( 'tape' ),
	utils	= require( '../utils' ) ;


test( 'formatForView', function( assert ) {

	var input = [ {
		username: 'Andy',
		action: 'play',
		track: 'Thnks Fr Th Mmrs by Fall Out Boy'
	} ] ;
	var expected = [ 'Listened to Thnks Fr Th Mmrs by Fall Out Boy' ] ;

	assert.true( 'formatForView' in utils, 'formatForView method exists in utils module' ) ;
	assert.deepEqual( utils.formatForView( input ), expected, 'formatForView method formats activity as expected' ) ;
	assert.end() ;

} ) ;

test( 'formatForActivity', function( assert ) {

	var input = [ {
		username: 'Andy',
		action: 'play',
		track: 'Thnks Fr Th Mmrs by Fall Out Boy'
	} ] ;
	var expected = [ 'Andy listened to Thnks Fr Th Mmrs by Fall Out Boy' ] ;

	assert.true( 'formatForActivity' in utils, 'formatForActivity method exists in utils module' ) ;
	assert.deepEqual( utils.formatForActivity( input ), expected, 'formatForActivity method formats activity as expected' ) ;
	assert.end() ;

} ) ;

test( 'formatForDisplay', function( assert ) {

	var input = [
		'string1', 'string2', 'string3'
	] ;
	var expected = 'string1\nstring2\nstring3\n' ;

	assert.true( 'formatForDisplay' in utils, 'formatForDisplay method exists in utils module' ) ;
	assert.deepEqual( utils.formatForDisplay( input ), expected, 'formatForDisplay method formats activity as expected' ) ;
	assert.end() ;

} ) ;
