export default function Player( props ) {
	const { videoId } = props;

	// generate a youtube player
	const player = useRef( null );

	// when the component mounts, create a player
	useEffect( () => {
		// create a new player
		player.current = new window.YT.Player( 'player', {
			height: '390',
			width: '640',
			videoId: 'M7lc1UVf-VE',
			events: {
				onReady: onPlayerReady,
				onStateChange: onPlayerStateChange,
			},
		} );
	}, [] );

	// when the videoId changes, load the new video
	useEffect( () => {
		if ( videoId ) {
			player.current.loadVideoById( videoId );
		}
	}, [ videoId ] );
	
	// when the player is ready, load the first video
	function onPlayerReady( event ) {
		event.target.loadVideoById( videoId );
	}

	// when the player state changes, update the videoId
	function onPlayerStateChange( event ) {
		if ( event.data === window.YT.PlayerState.PLAYING ) {
			setVideoId( event.target.getVideoData().video_id );
		}
	}

	return (
		<div className="player">
			<div id="player" ref={ player }></div>
		</div>
	);
}