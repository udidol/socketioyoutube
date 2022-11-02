const express = require( 'express' );
const router = express.Router();
const ListManager = require( './models/list-manager.js' );

const listManager = new ListManager();

router.get( "/", ( req, res ) => {
	res.send( { response: "I am alive" } ).status( 200 );
} );

router.get( '/api/list' , async ( req, res ) => {
	const items = await listManager.getItems();

	res.json( items );
} );

router.post( '/api/add-item', async ( req, res ) => {
	listManager.addItem( req.body.item );

	const items = await listManager.getItems();

	res.json( items );
} );

router.post( '/api/delete-item', async ( req, res ) => {
	await listManager.deleteItem( req.body.id );

	const items = await listManager.getItems();

	res.json( items );
} );

module.exports = router;