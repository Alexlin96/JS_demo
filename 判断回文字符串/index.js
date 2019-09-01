const Palindrome = (str)=>{
    if(typeof str !== 'string') return false;

    return str.split('').reverse().join('') === str;
}
console.log(Palindrome('abbba'))  // true
console.log(Palindrome('abbbac'))  // false