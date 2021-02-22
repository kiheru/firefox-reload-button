'use strict';

function reload(tab, onClickData) {
	let noCache = false;
	let newTab = false;
	if (typeof(onClickData !== "undefined")) {
		noCache = onClickData.modifiers.includes("Shift");
		newTab = (onClickData.button === 1);
	}
	if (newTab) {
		browser.tabs.create({index: tab.index + 1, url: tab.url});
	} else {
		browser.tabs.reload(tab.id, {bypassCache: noCache});
	}
}

browser.browserAction.onClicked.addListener(reload);
