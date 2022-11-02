import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export default function AppContextProvider( props ) {
	const [ playlist, setPlaylist ] = useState( [] );
	const [ socket, setSocket ] = useState( null );

	return (
		<AppContext.Provider value={ { playlist, setPlaylist, socket, setSocket } }>
			{ props.children }
		</AppContext.Provider>
	);
}

AppContextProvider.propTypes = {
	children: PropTypes.object.isRequired,
};