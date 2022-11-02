const express = require( 'express' );
const controller = require( './controller' );
const cors = require( 'cors' );
const app = express();
const http = require( 'http' ).Server( app );
const socket = require( './socket' );
const port = process.env.PORT || 5000;


app.use( express.json() );
app.use( cors() );
app.use( controller );

// Run the socket
socket( http );

http.listen( port, () => {
	console.log( `listening on port ${port}` );
} );