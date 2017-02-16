var mongoose = require('mongoose'),
	Product = mongoose.model('Product');
exports.getProduct = function (req, res){
	Product.findOne({_id:req.query.productedId})
		.exec(function (err, product){
			if(!product){
				res.json(404,{msg:'Photo Not Found'});
			}else{
				res.json(product);
			}
		});
};
exports.getProducts = function (req, res){
	Product.find()
		.exec(function(err, products){
			if(!products){
				res.json(404 , {msg:"products Not Found"});
			}else{
				res.json(products);
			}
		});
};