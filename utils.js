exports.formatForView = function( activities ) {
	var formatted = [] ;
	for ( var i = 0 ; i < activities.length ; i++ ) {
		formatted.push( 'Listened to ' + activities[ i ].track ) ;
	}
	return formatted ;
} ;

exports.formatForActivity = function( activities ) {
	var formatted = [] ;
	for ( var i = 0 ; i < activities.length ; i++ ) {
		formatted.push( activities[ i ].username + ' listened to ' + activities[ i ].track ) ;
	}
	return formatted ;
} ;

// TODO - instead of writing directly to console.log, could allow this to be parameterised e.g. to allow output to log file

exports.formatForDisplay = function( activities ) {
	var formatted = '' ;
	for ( var i = 0 ; i < activities.length ; i++ ) {
		formatted += activities[ i ] + '\n' ;
	}
	return formatted ;
}
