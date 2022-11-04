import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';
import YTManager from '../utils/youtube-manager';

export default function AddressBar() {
	const [ address, setAddress ] = useState( '' );
	const appContext = useContext( AppContext );
	const { socket } = appContext;

	useEffect( () => {
		function callAddItem( event ) {
			if ( event.key === 'Enter' ) {
				addItem();
			}
		}

		// add item on enter key up
		document.addEventListener( 'keyup', callAddItem );

		return () => {
			document.removeEventListener( 'keyup', callAddItem );
		};
	} );

	const addItem = () => {
		if ( ! address ) {
			return;
		}

		const Youtube = new YTManager();

		const videoID = Youtube.getVideoIDFromUrl( address );

		if ( ! videoID ) {
			return;
		}

		socket.emit( 'add-item', { videoID } );

		setAddress( '' );
	};

	return (
		<div className="address-bar">
			<input
				type="text"
				value={ address }
				onChange={ ( event ) => setAddress( event.target.value ) }
			/>
			<div className="add-button" onClick={ addItem }>Add</div>
		</div>
	);
}