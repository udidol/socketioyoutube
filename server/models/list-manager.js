const path = require( 'path' );
const sqlite3 = require( 'sqlite3' );
const { open } = require( 'sqlite' );
class ListManager {
	constructor( dbPath ) {
		if ( dbPath ) {
			this.dbPath = dbPath;
		} else {
			this.dbPath = path.resolve( __dirname, '../db.sqlite' );
		}
	}

	async getDB() {
		if ( ! this.db ) {
			this.db = await this.openDB();
		}

		return this.db;
	}

	async openDB() {
		const db = await open( {
			filename: this.dbPath,
			driver: sqlite3.Database
		} )

		await db.run( 'CREATE TABLE IF NOT EXISTS playlist (id INTEGER PRIMARY KEY AUTOINCREMENT, videoID TEXT)' );

		return db;
	}

	async getItems() {
		try {
			const db = await this.getDB();

			return await db.all( 'SELECT * FROM playlist', ( err, rows ) => {
				if ( err ) {
					throw err;
				}

				return rows;
			} );
		} catch ( err ) {
			console.log( err );
		}
	}

	async addItem( videoID ) {
		try {
			const db = await this.getDB();

			await db.run( 'INSERT INTO playlist (videoID) VALUES (?)', [ videoID ], ( err ) => {
				if ( err ) {
					throw err;
				}
			} );

			console.log( 'item saved' );
		}
		catch ( err ) {
			console.log( err.message );
		}
	}

	async deleteItem( id ) {
		try {
			const db = await this.getDB();

			await db.run( 'DELETE FROM playlist WHERE id = (?)', [ id ], ( err ) => {
				if ( err ) {
					throw err;
				}
			} );

			console.log( 'item deleted' );
		}
		catch ( err ) {
			console.log( err.message );
		}
	}
}

module.exports = ListManager;