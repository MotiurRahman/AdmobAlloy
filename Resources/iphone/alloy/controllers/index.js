function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.adView = Ti.UI.createView({
        id: "adView",
        top: "0",
        width: Ti.UI.FILL,
        height: "500"
    });
    $.__views.index.add($.__views.adView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.info("Requesting Ads...");
    Admob = require("ti.admob");
    banner = Admob.createView({
        publisherId: "ca-app-pub-4951262838901192/5818956263",
        testing: false
    });
    if ("android" == Ti.Platform.osname) {
        banner.addEventListener(Admob.AD_RECEIVED, function() {
            Ti.API.info("Did receive ad!");
        });
        banner.addEventListener(Admob.AD_NOT_RECEIVED, function() {
            Ti.API.info("Failed to receive ad!");
        });
    } else {
        banner.addEventListener("didReceiveAd", function() {
            Ti.API.info("Did receive ad!");
        });
        banner.addEventListener("didFailToReceiveAd", function() {
            Ti.API.info("Failed to receive ad!");
        });
    }
    $.adView.add(banner);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;