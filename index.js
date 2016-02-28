#!/usr/bin/env node

// Use the readline module to get input from the user
// Then offload all of the work into the climp module
// This means we can test the entire module independently of the command-line

var climp		= require( './climp' ),
	utils		= require( './utils' ) ;
	readline	= require( 'readline' ).createInterface( process.stdin, process.stdout ) ;

// Set command prompt
readline.setPrompt( '$ ') ;

// Get input from user
readline.prompt() ;

readline
// When a line of input is entered...
.on( 'line', function( line ) {
	// Exit if user has entered "quit" or "exit"
	if ( line === 'quit' || line === 'exit' ) readline.close() ;
	// Now get climp to do its work
	var response = climp( line ) ;
	console.log( utils.formatForDisplay( response ) ) ;
	// Rinse, lather, repeat!
	readline.prompt() ;
} )
// When the command prompt is closed...
.on( 'close', function() {
	process.exit( 0 ) ;
} ) ;
