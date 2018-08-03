
var Tesseract = require('tesseract.js');
var path = require('path');

// Tesseract.workerOptions.langPath = path.resolve('./data/tessdata/3.02/eng.traineddata');
// console.log(Tesseract.workerOptions.langPath);
// var Tesseract = Tesseract.create({
//     langPath: path.resolve('./data/tessdata/3.02/'),
// });

module.exports.recognize = function (image, options){
	return Tesseract.recognize(image, options)
	.progress(function(info){
		console.log(info)
	});
}