var fs = require('fs');
var gm = require('gm');

var gmObj = gm('./img/a.jpg')
.options({
    imageMagick: true
})
.identify(function(err, imgInfo) {
	var cropSize = {
		width: 140,
		height: 140
	};
	var newSize = calcScaleSize(imgInfo, cropSize);
	crop(this, 'Center', newSize, cropSize);
});

function crop(gmObj, type, resize, cropSize) {
	gmObj
	.noProfile()
	.resize(resize.width, resize.height)
	.gravity('Center')
	.crop(cropSize.width, cropSize.height)
	.write('./output/b.jpg', function (err) {
		console.log(err);
	});
}

/**
 * calculate the size of image scaling
 * @param  {Object} gm.js return the image information
 * @param  {Object} toSize  to get the size of image file
 * @return {Object}         new size of image file
 */
function calcScaleSize(imgInfo, toSize) {
	var size = imgInfo.size;
	var width = size.width;
	var height = size.height;
	var ratio = 1;
	var newWidth = 0;
	var newHeight = 0;

	if (width > height) {
		ratio = height / toSize.height;
		newWidth = Math.round(width / ratio);
		newHeight = toSize.height;
	} else {
		ratio = width / toSize.width;
		newHeight = Math.round(height / ratio);
		newWidth = toSize.width;
	}

	return {
		width: newWidth,
		height: newHeight
	}
}

setInterval(function(){}, 10000);
