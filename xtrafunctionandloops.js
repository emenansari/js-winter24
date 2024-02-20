// #1
function findMax(arr) {
    let max = arr[0]
    for (i = 1; i< arr.length; i++) {
        if (arr[1] > max)
        max = arr[i]
    }
    return max;
}



// #2 ???
function isPalindrome(str) {
const length = string.length;
for (let i = 0; i < length / 2; i ++) 
...


// #3 
function countCharacters(str , char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count ++;
        }
    }
    return count;
}


// #4
function removeDuplicates(arr) 
let arr = [1, 2, 3, 3, 4, 5, 5]
    function removeDuplicates(arr) {
        return arr.filter((num, index) => arr.indexof(num) === index);
}
console.log(removeDuplicates(arr));


// #5 ???
function toTitleCase(str) {
    str = str.toLowerCase().split('');
    for (let i = 0; i < str.length; i ++) {
        stri[i] = str[i].chartAt(0).toUpperCase
    }
}


// #6 
function concatArrays(arr1, arr2) {
let concatArrays = [];
arr1.forEach( el => { 
    concatArrays.push(el);
});
arr2.forEach (el => {
    concatArrays.push(el);
});
return concatArrays;
}


// #7
function longestWord(sentence) {
    let setenceSplit = sentence.Split("") ;
    let longestWord = 0;
    for (let i = 0; i < setenceSplit.length; i++) {
        if (sentenceSplit[i].length > longestWord) {
            longestWord = sentenceSplit[i].length;
        }
    }
    return longestWord;
}


// #8
function reverseArray(arr) {
const array = [1, 2, 3, 4,]
const reverseArray = []
for ( let i = array.length -1; i >= 0; i--) {
    const valueAti = arr[i]
    reverseArray.push(i);
}
return reverseArray;
}