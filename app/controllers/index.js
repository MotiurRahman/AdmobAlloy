Ti.API.info('Requesting Ads...');
Admob = require('ti.admob');
banner = Admob.createView({
	publisherId : "ca-app-pub-4951262838901192/5818956263",
	testing : false,
});

if (Ti.Platform.osname == "android") {
	banner.addEventListener(Admob.AD_RECEIVED, function() {
		// alert("ad received");
		Ti.API.info("Did receive ad!");
	});

	//listener for adNotReceived
	banner.addEventListener(Admob.AD_NOT_RECEIVED, function() {
		//alert("ad not received");
		Ti.API.info("Failed to receive ad!");
	});
} else {
	//Set listeners
	banner.addEventListener('didReceiveAd', function() {
		//alert('Did receive ad!');
		Ti.API.info("Did receive ad!");
	});
	banner.addEventListener('didFailToReceiveAd', function() {
		//alert('Failed to receive ad!');
		Ti.API.info("Failed to receive ad!");
	});

}

//add now
$.adView.add(banner);
$.index.open();
