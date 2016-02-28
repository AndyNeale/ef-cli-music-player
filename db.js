var loki	= require( 'lokijs' ),
	db		= new loki( 'loki.json' ),
	utils	= require( './utils' ),

	history	= db.addCollection( 'history' ),
	users	= db.addCollection( 'users' ) ;


/* ---------------------------------------- */
/*                                          */
/*                   play                   */
/*                                          */
/* ---------------------------------------- */

function play( username, track ) {
	// Add history entry
	history.insert( { username: username, action: 'play', track: track } ) ;
	// Add user if user doesn't already exist
	var user = users.findOne( { username: username } ) ;
	if ( user === null ) {
		users.insert( { username: username, following: [] } ) ;
	}
	return '' ;
}

/* ---------------------------------------- */
/*                                          */
/*                   view                   */
/*                                          */
/* ---------------------------------------- */

function view( username ) {
	// Find all tracks the specified user has played
	var activity = history.findObjects( { username: username, 'action': 'play' } ) ;
	// Format as "Listened to <TRACK>"
	return utils.formatForView( activity ) ;
}

/* ---------------------------------------- */
/*                                          */
/*                  follow                  */
/*                                          */
/* ---------------------------------------- */

function follow( username, follow ) {
	// Add history entry
	history.insert( { username: username, action: 'follow', follow: follow } ) ;
	// Add user if user doesn't already exist
	var user = users.findOne( { username: username } ) ;
	if ( user === null ) {
		users.insert( { username: username, following: [ follow ] } ) ;
	// If user does exist, and isn't already following the specified user, then add the new user to be followed and update the user
	} else {
		if ( user.following.indexOf( follow ) === -1 ) {
			user.following.push( follow ) ;
			users.update( user ) ;
		}
	}
	return '' ;
}

/* ---------------------------------------- */
/*                                          */
/*                 activity                 */
/*                                          */
/* ---------------------------------------- */

function activity( username ) {
	// Find the specified user
	var user = users.findOne( { username: username } ) ;
	// If the user is following any other users...
	if ( user.following ) {
		// Find the tracks the specified user has listened to
		var activity = history.findObjects( { username: { '$in': user.following } } ) ;
		// Format as "<USER> listened to <TRACK>"
		return utils.formatForActivity( activity ) ;
	// ... otherwise, well, say so
	} else {
		return 'User ' + username + ' is not following any other users' ;
	}
}


// Export module methods

module.exports = {
	view: view,
	play: play,
	follow: follow,
	activity: activity
} ;

