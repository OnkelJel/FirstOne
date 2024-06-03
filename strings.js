// LEgnth will give you the length of the strings
"bibbledibombus".length
// THIS WILL RETUGN ... 14


// .toUppercase() will transform the string into capitals
"bibbledibombus".toUpperCase()

// toLowerCase will transfor the string to lowercase
"bibbledibombus".toLowerCase()

// substring will extact a sTRING INSIDE A sTRING
"hello world".substring(6,11) // will retrun worldqqwertyuio


// multiple fucntions, similar is replace
"hello world".replace("world", "constantin")

// indexOf

"hello world".indexOf("world") //  this will return the index of the first world in this case 6

// spllit will create an array separating the string by the characte that you choose
"hello world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world world".split(" ")


// Exercise
const text = "ron is learning javascript"
const lengthOfJavascript = "javascript".length
const beginingOfJavascript = text.indexOf("javascript")
const endIndex = beginingOfJavascript + lengthOfJavascript

text.substring(beginingOfJavascript ,endIndex)
const textButBetter = text.replace("ron", "run")
