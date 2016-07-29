
function Lazy(arr){
	var self = this;

	var funcs = [];
	
	this.map = function(f){
		f.type = 'map';
		funcs.push(f);
		return self;
	};

	this.filter = function(f){
		f.type = 'filter';
		funcs.push(f);
		return self;		
	};

	this.take = function(n){
		var rs = [];
		var forEnd = n;

		if(n == null || n > arr.length){
			forEnd = arr.length;
		}

		for(var i=0; i<forEnd; i++){
			var item = arr[i];

			var skip = false;
			
			for(var j=0; j<funcs.length; j++){
				var f = funcs[j];
				var type = f.type;
				
				if(type == 'map'){
					item = f(item);
				}else if(type == 'filter' && f(item) == false){
					skip = true;
					break;
				}
			}

			if(skip == true){
				continue;
			}

			rs.push(item);

			if(rs.length == n){
				return rs;
			}
		}
		
		return rs;
	};

	return this;
}

function inc(n){
	return n + 1;
}

function isOdd(n){
	return n % 2 != 0;
}

Lazy([1, 2, 3, 4, 5]).map(inc).take(3); // [ 2 3 4]
Lazy([1, 2, 3, 4, 5]).filter(isOdd).take(); // [1 3 5]
Lazy([1, 2, 3, 4, 5]).map(inc).filter(isOdd).take(); // [3 5]

