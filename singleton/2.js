/*方法二：
    利用属性来判断是否已存在实例。
    在Javascript的世界里，类(function)不也是对象嘛，so对其赋予一个属性instance，用来引用创建的实例，通过判断instance是否
	已引用创建的实例就OK咯。	
*/
function singletonAccepter( args ){
	//判断Universe.instance是否已存在实例
	if(typeof singletonAccepter.instance === 'object'){
		return singletonAccepter.instance;
	}
	this.name = args.name || 'Monkey';
	this.age = args.age || 24;
	singletonAccepter.instance = this;
};
singletonAccepter.prototype = {
	constructor: singletonAccepter,
	displayInfo: function(){
		console.log('name: ' + this.name + '   age: ' + this.age);
	}
};