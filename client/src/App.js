import AddressBar from './components/Address-bar';
import Playlist from './components/Playlist';
import Player from './components/Player';

function App() {
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
