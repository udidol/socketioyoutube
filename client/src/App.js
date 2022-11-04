import { useEffect } from 'react';
import socketIOClient from 'socket.io-client';

import { useContext } from 'react';
import { AppContext } from './context';
import config from './config';

import AddressBar from './components/Address-bar';
import Playlist from './components/Playlist';
import Player from './components/Player';

function App() {
	const appContext = useContext( AppContext );
	const ENDPOINT = config.clientURL;
	const { setSocket } = appContext;

	useEffect( () => {
		const io = socketIOClient( ENDPOINT );
	
		setSocket( io );

		return () => io.disconnect();
	}, [ setSocket ] );

	return (
		<div className="App">
			<div className="sidebar">
				<AddressBar />
				<Playlist />
			</div>
			<Player />
		</div>
	);
}

export default App;
