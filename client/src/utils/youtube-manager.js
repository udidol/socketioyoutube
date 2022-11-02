export default class YTManager {
	getURLRegex() {
		return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/;
	}

	isApiLoaded() {
		return window.YT && window.YT.loaded;
	}

	getVideoIDFromUrl( url ) {
		return url.match( this.getURLRegex() )[ 1 ];
	}
}