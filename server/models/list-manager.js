const sqlite3 = require( 'sqlite3' ).verbose();

class ListManager {
	async getDB() {
		if ( ! this.db ) {
			this.db = await this.openDB();
		}

		return this.db;
	}

	async openDB() {
		this.db = new sqlite3.Database( './db.sqlite', ( err ) => {
			if ( err ) {
				return console.error( err.message );
			}
		
			console.log( 'Connected to the. SQlite database.' );
		} );

		await this.db.run( 'CREATE TABLE IF NOT EXISTS playlist (id INTEGER PRIMARY KEY AUTOINCREMENT, item TEXT)' );

		return this.db;
	}

	async getItems() {
		const db = this.getDB();

		try {
			return await db.all( 'SELECT * FROM playlist' );
		}
		catch ( err ) {
			console.log( err.message );

			return [];
		}
	}

	async addItem( item ) {
		try {
			// const newItem = new ListItem( item );

			// await newItem.save();

			console.log( 'item saved' );
		}
		catch ( err ) {
			console.log( err.message );
		}
	}

	async deleteItem( id ) {
		try {
			//await ListItem.deleteOne( { _id: id } );

			console.log( 'item deleted' );
		}
		catch ( err ) {
			console.log( err.message );
		}
	}
}

module.exports = new ListManager();