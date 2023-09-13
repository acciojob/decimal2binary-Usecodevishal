function decimalToBinary(num) {
  //Write you code here
	
  let arr = [];
	while(num!==0 || num!==1){
		var biDi = num%2;
		arr.push(biDi);
		num=Math.trunc(num/2);
	}
	let newArr = arr.join("");
	let ans = Number(newArr);
	return ans;
}

window.decimalToBinary = decimalToBinary;
