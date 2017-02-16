var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//定义地址模式
var AddressSchema = new Schema({
	name : String,
	address : String,
	state : String,
	city : String,
	zip : String
},{_id:false});   //可以不用id
mongoose.model('Address',AddressSchema);

//定义账单
var BillingSchema = new Schema({
	cardtype : { type : String , enum : ['Visa','MasterCard','Amex']},
	name : String,
	number : String,
	expiremonth : Number,
	expireyear : Number,
	address : [AddressSchema]	
},{_id : false});
mongoose.model('Billing',BillingSchema);

//定义产品
var ProductSchema = new Schema({
	name : String,
	imagefile : String,
	description : String,
	price : Number,
	instock : Number
});
mongoose.model('Product',ProductSchema);

//定义数量
var ProductQuantitySchema = new Schema({
	quantity : Number,
	product : [ProductSchema]
}，{_id : false});
mongoose.model('ProductQuantity',ProductQuantitySchema);

//定义订单
var OrderSchema = new Schema({
	userid : String,
	items : [ProductQuantitySchema],
	shipping : [AddressSchema],
	billing : [BillingSchema],
	status : {type : String , default : "Pending"},
	timestamp : {type: Date , default:Date.now} 
});
mongoose.model('Order',OrderSchema);