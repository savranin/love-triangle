/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  for (let i = 0; i < preferences.length-1; i++) {
	  preferences[i] = preferences[i]-1;
  }
  
  let set = new Set();
  
  for (let i = 0; i < preferences.length-1; i++) {	  
	  
	  let a  = preferences[i];  
	  let b  = preferences[i+1]; 
	  let c  = preferences[i+2];
	  
	  let love_a = preferences[a];
	  let love_b = preferences[b];
	  let love_c = preferences[c];
  
	  
	  if (love_a == b && love_b == c && love_c == a) {
		  let abc = String(a)+String(b)+String(c);
		  set.add(abc);			  
	  } 
 
  } 
return set.size;
  
};
