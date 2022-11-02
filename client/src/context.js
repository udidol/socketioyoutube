import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppContextProvider = ( props ) => {
	const [ playlist, setPlaylist ] = useState( [] );
	const [ socket, setSocket ] = useState( null );

	return (
		<AppContext.Provider value={ { playlist, setPlaylist, socket, setSocket } }>
			{ props.children }
		</AppContext.Provider>
	);
}

export default AppContextProvider;

AppContextProvider.propTypes = {
	children: PropTypes.object.isRequired,
};