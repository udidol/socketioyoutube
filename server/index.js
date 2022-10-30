const express = require( 'express' );
const controller = require( './controller' );
const cors = require( 'cors' );
const app = express();
const port = process.env.PORT || 5000;

app.use( express.json() );
app.use( cors() );
app.use( controller );

app.listen( port, () => {
	console.log( `listening on port ${port}` );
} );