var fs = require('fs');
var gm = require('gm');


gm('./img/www.jpg')
.options({
    imageMagick: true
})
.identify(function(err, imgInfo) {
	var size = imgInfo.size;
	
});

setInterval(function(){}, 10000);
