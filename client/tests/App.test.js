import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import AppContextProvider from '../src/context';
import App from '../src/App';

global.fetch = jest.fn( () =>
	Promise.resolve( {
		json: () => Promise.resolve( [] ),
	} )
);

beforeEach( () => {
	fetch.mockClear();
} );

test( 'App renders playlist', async () => {
	const { container } = await act( async () => render(
		<AppContextProvider>
			<App />
		</AppContextProvider>
	) );

	const playlist = container.getElementsByClassName( 'playlist' );

	expect( playlist.length ).toBe( 1 );
} );