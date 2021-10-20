(function getNewPass(size){

	const letLC = 'qwertyuiopasdfghjklzxcvbnm';
	const dic = [letLC, letLC.toUpperCase(), '1234567890', '!@#$%^&()_+-={}[]:;\'"\\|/?.,><~'];
	let result = '';

	for (let i=0; i < dic.length; i++){
		const t = !i && (size % dic.length) ? size % dic.length : 0;
		const ts = Math.ceil(size / dic.length) + t;
		result += randomizeString(dic[i]).substr(0, ts);
	}

	prompt('Your password\n\n"OK" - stop password generation\n"Cancel" - get new one', randomizeString(result)) || getNewPass(size);

	function randomizeString(str){
		return str.split('').sort(function(){return Math.random() - 0.5}).join('') ;
	}

})(16);