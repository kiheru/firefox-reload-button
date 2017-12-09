'use strict';

function reload(tab) {
	// The API is just broken. There's no way to detect shift-click.
	// The user needs to use a keyboard shortcut when a full reload is
	// needed.
	browser.tabs.reload(tab.id, {bypassCache: false});
}

browser.browserAction.onClicked.addListener(reload);
