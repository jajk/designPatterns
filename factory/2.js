var factory = (function(){
	//字面量对象
	var VehicleFactory= {};
	VehicleFactory.Car = function(args){
		var args = args || {};
		this.state = args.state || 'new';
		this.color = args.color || 'white';
		console.log('I\'m car');		
	};
	VehicleFactory.Bike = function(args){
	    var args = args || {};
		this.state = args.state || 'new';
		this.color = args.color || 'white';
		console.log('I\'m bike');		
	};
	VehicleFactory.Truck = function(){
	    console.log('I\'m truck');	
	};
	VehicleFactory.Moto = function(){
	    console.log('I\'m Moto');	
	};
	VehicleFactory.createVehicle = function( args ){
	    return new VehicleFactory[args.type](args);	
	};
	return VehicleFactory.createVehicle;
})();