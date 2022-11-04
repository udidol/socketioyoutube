import { useContext, useMemo, useRef, useEffect } from 'react';
import { AppContext } from '../context';
import config from '../config';

import YTManager from '../utils/youtube-manager';

export default function Player() {
	const appContext = useContext( AppContext );
	const { playlist, socket } = appContext;

	const playerRef = useRef();

	const Youtube = useMemo( () => {
		return new YTManager();
	}, [] );

	useEffect( () => {
		// when the component mounts, create a player
		if ( ! playlist.length ) {
			return;
		}

		if ( ! Youtube.isApiLoaded() ) {
			window.onYouTubeIframeAPIReady = () => {
				setCurrentPlayer();
			};
		} else {
			setTimeout( () => setCurrentPlayer(), 1000 );
		}

		function setCurrentPlayer() {
			playerRef.current = new window.YT.Player( `youtube-player-${ playlist[ 0 ].id }`, {
				height: '100%',
				width: '100%',
				videoId: playlist[ 0 ].videoID,
				mute: 1,
				controls: 0,
				autoplay: 1,
				origin: config.clientURL,
				events: {
					onReady: function () {
						// YouTube will only autoplay muted videos.
						playerRef.current.mute();
						playerRef.current.playVideo();
					},
					onStateChange: onPlayerStateChange,
				},
			} );
		}

		function onPlayerStateChange( event ) {
			if ( event.data === window.YT.PlayerState.ENDED ) {
				if ( playlist.length > 1 ) {
					playerRef.current.loadVideoById( { videoId: playlist[ 0 ].videoId } );
				}

				socket.emit( 'delete-item', playlist[ 0 ].id )
			}
		}
	} );

	return (
		<div className="player" key= { playlist[ 0 ]?.id }>
			{ playlist.length ? <div ref={ playerRef } id={ `youtube-player-${ playlist[ 0 ]?.id || '' }` } /> : null }
		</div>
	);
}