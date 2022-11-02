import { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import ListItem from './List-item';

export default function Playlist() {
	const appContext = useContext( AppContext );
	const { socket, playlist, setPlaylist } = appContext;

	useEffect( () => {
		fetch( 'http://localhost:5000/api/list' )
			.then( ( response ) => response.json() )
			.then( ( data ) => {
				setPlaylist( data );
			} );
	}, [ setPlaylist ] );

	useEffect( () => {
		if ( socket ) {
			socket.on( 'update-list', ( items ) => {
				setPlaylist( items );
			} );
		}

		return () => {
			if ( socket ) {
				socket.off( 'update-list' );
			}
		};
	}, [ socket, setPlaylist, playlist ] );

	const onDeleteItem = ( id ) => {
		socket.emit( 'delete-item', id );
	};

	return (
		<div className="playlist">
			{ playlist.map( ( video, index ) => (
				<ListItem key={ index } video={ video } onDeleteItem={ onDeleteItem } />
			) ) }
		</div>
	);
}