// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function reverseString (word){
    return word.split("").reverse().join("")
}

console.log(reverseString("hello"))