export default class YTManager {
	getURLRegex() {
		return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/;
	}

	isApiLoaded() {
		return window.YT && window.YT.loaded;
	}

	getVideoIDFromUrl( url ) {
		const regex = this.getURLRegex();
		const match = url.match( regex );

		if ( match ) {
			return match[ 1 ];
		}

		return false;
	}
}