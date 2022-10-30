import ListItem from './List-item';

export default function Playlist( props ) {
	const { playlist } = props;

	return (
		<div className="playlist">
			{ playlist.map( ( video, index ) => (
				<ListItem key={ index } video={ video } />
			) ) }
		</div>
	);
}