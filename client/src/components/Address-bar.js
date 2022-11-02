import { useContext, useState } from 'react';
import { AppContext } from '../context';
import YTManager from '../utils/youtube-manager';

export default function AddressBar() {
	const [ address, setAddress ] = useState( '' );
	const appContext = useContext( AppContext );
	const { socket } = appContext;

	const onAddButtonClick = () => {
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
			<div className="add-button" onClick={ onAddButtonClick }>Add</div>
		</div>
	);
}