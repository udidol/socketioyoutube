const express = require( 'express' );
const router = express.Router();
const ListManager = require( './models/list-manager.js' );

router.get( '/api/list' , async ( req, res ) => {
	const items = await ListManager.getItems();

	res.json( items );
} );

router.post( '/api/add-item', async ( req, res ) => {
	ListManager.addItem( req.body.item );

	const items = await ListManager.getItems();

	res.json( items );
} );

router.post( '/api/delete-item', async ( req, res ) => {
	await ListManager.deleteItem( req.body.id );

	const items = await ListManager.getItems();

	res.json( items );
} );

module.exports = router;