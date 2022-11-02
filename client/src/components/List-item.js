import PropTypes from 'prop-types';

export default function ListItem( props ) {
	const { video, onDeleteItem } = props;

	return (
		<div className='list-item'>
			<div className="video-url">{ `https://youtube.com/watch?v=${ video.videoID }` }</div>
			<div className="delete-button" onClick={ () => onDeleteItem( video.id ) }>x</div>
		</div>
	);
}

ListItem.propTypes = {
	video: PropTypes.object.isRequired,
	onDeleteItem: PropTypes.func.isRequired,
};