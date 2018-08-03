var path = require('path');
var tesseractUtil = require(path.resolve('./modules/ocr/tesseract'));

function recognizeImage(req, res){
	var image = path.resolve('./data/images', 'cosmic.png');
	
	var options = {
		lang: 'eng'
	};
	if (req.query.lang){
		options.lang = req.query.lang
	}

	tesseractUtil.recognize(image, options)
	.then(data=>{
		console.log('done', data);
		res.json({
			status: "Success",
			message: "Success",
			result: {
				text: data.text,
				html: data.html
			}
		});
	})
	.catch(err=>{
		res.json({
			status: "Fail",
			message: err.message
		});
	});
}

module.exports.route = function(app){
	app.get("/api/ocr/recognize/", recognizeImage);
}