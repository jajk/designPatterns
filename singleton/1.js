/*方法一：
    利用Javascript的作用域，形成闭包，从而可以创建私有变量（假设我们将这个私有变量取名为instance），然后将创建的实
	例赋予这个私有变量instance就ok了。
    （每当想创建这个类的实例时，先判断instance是否已经引用了存在的实例，如果没有引用，即这个类没有被创建实例，
	so创建一个实例，然后将其赋予给instance；如果instance已经引用，即已存在了该类的实例，so无需再创建，直接
	使用这个instance就ok了）
*/
'use strict'
var singletonAccepter =(function(){
	//默认将instance赋予null
	var instance = null;
	//类：SupposeClass
	function SupposeClass( args ){
		var args = args || {};
		this.name = args.name || 'Monkey';
		this.age = args.age || 24;
	};
	SupposeClass.prototype = {
		constructor: SupposeClass,
		displayInfo: function(){
			console.log('name: ' + this.name + '   age: ' + this.age);
		}
	};
	return {
		//类的名字
		name: 'SupposeClass',
		//创建类的实例方法
		getInstance: function( args ){
			//利用私有变量instance实现单例模式
			if( instance === null ){
				instance = new SupposeClass( args );
			}
			return instance;
		}
	};
})();