/**
 * [Get a subset of the array]
 * @param  {[type]} arr [description]
 * @param  {[type]} len [description]
 * @return {[type]}     [description]
 */
exports.getSubsetArr = function(arr, len){
	var newArr = arr.slice(),
		tmp = [];

	for (var i = 0; i < len; i+=1) {
		if (newArr.length > 0) {
			//Generate a random index
			var index = Math.floor(Math.random() * newArr.length);
			tmp.push(newArr[index]);
			newArr.splice(index, 1);
		}
	}
	return tmp;
}