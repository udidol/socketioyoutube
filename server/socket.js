const socketIO = require( 'socket.io' );
const ListManager = require( './models/list-manager.js' );

function socket( server ) {
	const listManager = new ListManager();

	const io = socketIO( server, {
		cors: {
			origin: "http://localhost:3000",
		}
	} );

	io.on( 'connection', ( socket ) => {
		console.log( 'A user connected' );

		socket.on( 'disconnect', () => {
			console.log( 'A user disconnected' );
		} );

		socket.on( 'add-item', async ( data ) => {
			await listManager.addItem( data.videoID );

			const items = await listManager.getItems();

			io.sockets.emit( 'update-list', items );
		} );

		socket.on( 'delete-item', async ( id ) => {
			await listManager.deleteItem( id );

			const items = await listManager.getItems();

			io.sockets.emit( 'update-list', items );
		} );
	} );
}

module.exports = socket;