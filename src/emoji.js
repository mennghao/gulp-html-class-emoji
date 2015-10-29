var util = require('./util.js');

var emoji = ['😀','😁','😎','😳','😍',
			 '👳','👊','🙏','🐴','🐎',
			 '🐰','🐔','🐍','🐵','🙈',
			 '🙉','🐼','🐨','🙊','☁',
			 '️💧','💦','🌚','🌝','🌝',
			 '🌞','🎃','⛄','️🏃','🚶',
			 '🚀','🚁'];

var word = ['a','b','c','d','e',
			'f','g','h','i','j',
			'k','l','m','n','o',
			'p','q','r','s','t',
			'u','v','w','x','y',
			'z'];

exports.getEmojiMap = function(){
	return util.getSubsetArr(emoji, 26).reduce(function(prev, current, index){
		prev[word[index]] = current;
		return prev;
	}, {});
}