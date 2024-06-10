const fibblebeeglop = ["glorbus","bleblo", "gibble"]

fibblebeeglop.push(fibblebeeglop)

[ "glorbus","gibble", ["glorbus","gibble"] ]


fibblebeeglop.flat()
[ "glorbus","gibble", "glorbus","gibble" ]

for (let i = 0; i < fibblebeeglop.length; i++){
  console.log(fibblebeeglop[i])
}

fibblebeeglop.pop()
//pop will return the element removed (the last one)
//and the remaining array will not have that element

const removedElement = fibblebeeglop.pop()
// removedElement will be gibble
//  fibblebeeglop will be ["glorbus","bleblo"]


//SHIFT
const removedElement = fibblebeeglop.shift("firstBibli")
//add in de beninging

//UNSHIFT
const removedElement = fibblebeeglop.unshift()
//removes the first element

// foreach
fibblebeeglop.forEach((item, i) => {
  console.log(item)
});

// map
const modifiedArrray = fibblebeeglop.map((element)=> {
  return element.toUpperCase()
});
// ["GLORBUS","BLEBLO","GIBBLE"]

// filter
fibblebeeglop.filter((element)=> {
 return element.toUpperCase() !== "GLORBUS"
});
// ["BLEBLO","GIBBLE"]
