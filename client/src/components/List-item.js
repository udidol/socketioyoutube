export default function ListItem( props ) {
	const { video } = props;

	return (
		<div className="list-item">
			<div className="video-title">{ video.title }</div>
			<div className="video-duration">{ video.duration }</div>
			<div className="delete-button">x</div>
		</div>
	);
}