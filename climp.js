// This is where the action happens
// Well, the parsing of whatever has been passed on the command line, anyway

var actions	= require( './actions' ) ;

module.exports = function( command ) {

	// Username must be specified
	if ( command.length === 0 ) {
		console.log( 'Error - no username specified' ) ;
		return ;
	}

	// Split whatever has been entered into words
	command = command.split( ' ' ) ;

	var cli = {} ;

	// Parse command
	// Username is always the first parameter
	cli.username = command[ 0 ] ;

	// Action is optional and defaults to "view" if not specified
	if ( command.length >= 2 ) {
		cli.action = command[ 1 ] ;
	} else {
		cli.action = 'view' ;
	}

	// Everything else can be concatenated back into a single parameter (e.g. artist and song title)
	if ( command.length >= 2 ) {
		cli.other = command.slice( 2 ).join( ' ' ) ;
	} else {
		cli.other = [] ;
	}

	// The specified action must be valid i.e. it must exist in the methods defined in the actions module
	if ( ! ( cli.action in actions ) ) {
		console.log( 'Error - unknown action specified' ) ;
		return ;
	}

	// No problems encountered so we're good to go... perform the relevant action and return the results
	return actions[ cli.action ]( cli.username, cli.other ) ;

}
