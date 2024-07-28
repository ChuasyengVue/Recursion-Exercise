/** product: calculate the product of an array of numbers. */

function product(nums, indx = 0) {
  if(nums.length === indx) return 1;
  return nums[indx] * product(nums, indx + 1);
}


/** longest: return the length of the longest word in an array of words. */

function longest(words, indx = 0, lngword = 0) {
  if(words.length === indx) return lngword;
  lngword = Math.max(words[indx].length, lngword);
  return longest(words, indx + 1, lngword);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, indx = 0, newstr = '') {
  if(str.length <= indx) return newstr;
  newstr += str[indx];
  return everyOther(str, indx + 2, newstr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, indx = 0) {
  let lftside = indx;
  let rgtside = str.length - indx - 1;

  if(lftside === rgtside) return true;
  if(str[lftside] !== str[rgtside]) return false;

  return isPalindrome(str, indx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, indx = 0) {
if(arr.length === indx) return -1;
if(arr[indx] === val) return indx;

return findIndex (arr, val, indx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, indx = 0, newstr = '') {
  if(str.length === newstr.length) return newstr;
  newstr += str[str.length -1 -indx];
  return revString(str, indx + 1, newstr);

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
let stringVal = [];

for( let val in obj){
  if(typeof obj[val] === 'string') stringVal.push(obj[val]);
  if(typeof obj[val] === 'object') stringVal.push(...gatherStrings(obj[val]));
}
return stringVal;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if(left > right){
    return -1;
  }
  let mid = Math.floor((left + right)/ 2);

  if(arr[mid] === val){
    return mid;
  }
  if(arr[mid] > val){
    return binarySearch(arr,val,left, mid-1)
  }
  return binarySearch(arr,val,mid + 1, right)

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
