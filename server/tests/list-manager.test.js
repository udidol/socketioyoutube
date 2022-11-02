const path = require( 'path' );
const ListManager = require( '../models/list-manager' );

beforeEach( async () => {
	const listManager = new ListManager( path.resolve( __dirname, './test-db.sqlite' ) );

	const db = await listManager.getDB();

	await db.run( 'DROP TABLE IF EXISTS playlist' );
} );

test( 'getItems() returns an array', async () => {
	const listManager = new ListManager( path.resolve( __dirname, './test-db.sqlite' ) );

	const items = await listManager.getItems();

	console.log( items );

	expect( Array.isArray( items ) ).toBe( true );
} );

test( 'addItem() adds an item to the database', async () => {
	const listManager = new ListManager( path.resolve( __dirname, './test-db.sqlite' ) );

	await listManager.addItem( 'test-video-id' );

	const items = await listManager.getItems();

	expect( items.length ).toBe( 1 );
} );

test( 'deleteItem() removes an item from the database', async () => {
	const listManager = new ListManager( path.resolve( __dirname, './test-db.sqlite' ) );

	await listManager.addItem( 'test-video-id' );

	const items = await listManager.getItems();

	expect( items.length ).toBe( 1 );

	await listManager.deleteItem( items[ 0 ].id );

	const newItems = await listManager.getItems();

	expect( newItems.length ).toBe( 0 );
} );