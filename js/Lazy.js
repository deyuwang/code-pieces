
function Lazy(arr){
	var self = this;

	var funcs = [];
	var types = [];
	
	this.map = function(f){
		types.push('map');
		funcs.push(f);
		return self;
	};

	this.filter = function(f){
		types.push('filter');
		funcs.push(f);
		return self;		
	};

	this.take = function(n){
		var rs = [];
		var len = n;

		if(n == null || n > arr.length){
			len = arr.length;
		}

		for(var i=0; i<len; i++){
			var item = arr[i];

			var skip = false;
			
			for(var j=0; j<funcs.length; j++){
				var fn = funcs[j];
				var type = types[j];
				
				if(type == 'map'){
					item = fn(item);
				}else if(type == 'filter' && fn(item) == false){
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


// --------------------- test --------------------------------
function inc(n){
	return n + 1;
}

function isOdd(n){
	return n % 2 != 0;
}

function str(n){
	return "" + n;
}

var data = [1, 2, 3, 4, 5];

Lazy(data).map(inc).take(3); // [2 3 4]

Lazy(data).filter(isOdd).take(); // [1 3 5]

Lazy(data).map(inc).filter(isOdd).take(); // [3 5]

Lazy(data).map(inc).filter(isOdd).map(str).take(); // ["3" "5"]
