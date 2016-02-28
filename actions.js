// Include our database service layer
// Now I know what you're thinking... what's the point, especially in such a small demo app?
// Well this makes it nice and easy to swap out Loki.js for something like MongoDB
// without having to touch this module, which actually wouldn't make much difference as it stands
// but would be more significant if there was extra logic or logging or whatever going on here

var db = require( './db.js' ) ;

/* ---------------------------------------- */
/*                                          */
/*                   play                   */
/*                                          */
/* ---------------------------------------- */

function play( username, track ) {
	return db.play( username, track ) ;
}

/* ---------------------------------------- */
/*                                          */
/*                   view                   */
/*                                          */
/* ---------------------------------------- */

function view( username ) {
	return db.view( username ) ;
}

/* ---------------------------------------- */
/*                                          */
/*                  follow                  */
/*                                          */
/* ---------------------------------------- */

function follow( username, follow ) {
	return db.follow( username, follow ) ;
}

/* ---------------------------------------- */
/*                                          */
/*                 activity                 */
/*                                          */
/* ---------------------------------------- */

function activity( username ) {
	return db.activity( username ) ;
}


// Export module methods

module.exports = {
	view: view,
	play: play,
	follow: follow,
	activity: activity
} ;
