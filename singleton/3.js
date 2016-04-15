/*方法三：
    在Javascript的世界里，this是引用的对象。
    还记得JavaScript是怎么通过new创建对象的么？    
	new:
	    1、创建一个新的对象，这个对象的类型时object;
		2、将这个对象的__proto__隐指针指向原型prototype;
		3、执行构造函数，当this被提及的时候，代表新创建的对象;
		4、返回新创建的对象。
		注，倘若在最后return了，那么return的是基本类型，例如3，则无效；否则是引用类型，则返回这个引用类型
	注意第三点了么，当new后，this代表新创建的对象。so，我们可以利用闭包，在类中声明一个变量instance来引用
	创建的实例。然后再重写类，就OK啦。
*/
function singletonAccepter( args ){
	var instance = null;
	var args = args || {};
	this.name = args.name || 'Monkey';
	this.age = args.age || 24;
	//将instance引用创建的实例this
	instance = this;
	//重写构造函数
	singletonAccepter = function(){
		return instance;
	}
};
singletonAccepter.prototype = {
	constructor: singletonAccepter,
	displayInfo: function(){
		console.log('name: ' + this.name + '   age: ' + this.age);
	}
};