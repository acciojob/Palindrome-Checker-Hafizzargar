// complete the given function

function palindrome(str){
	let s="";
	if(s.length==0){
		return true;
	}
	for(let i=str.length;i>=0;i--){
		s=s+str.charAt(i);
	}
	if(s===str){
	return true;
	}
	return false;

}
module.exports = palindrome
